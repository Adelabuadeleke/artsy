import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NotificationsProvider } from './context/NotificationsContext';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';
import ItemDetails from './pages/ItemDetails';
import LiveAuctions from './pages/LiveAuctions';
import ShoppingTab from './pages/Shopping_tab';
import Thank_you from './pages/Thank_you';

const wrap = (ui, path = '/') =>
  render(
    <CartProvider>
      <NotificationsProvider>
        <MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>
      </NotificationsProvider>
    </CartProvider>
  );

const pages = [
  ['Home', <Home />],
  ['Marketplace', <Marketplace />],
  ['Auctions', <Auctions />],
  ['Drop', <Drop />],
  ['ItemDetails', <ItemDetails />],
  ['LiveAuctions', <LiveAuctions />],
  ['ShoppingTab', <ShoppingTab />],
  ['Thank_you', <Thank_you />],
];

for (const [name, ui] of pages) {
  test('renders ' + name, () => {
    wrap(ui);
    cleanup();
  });
}

test('cart badge appears once something is added', () => {
  window.localStorage.clear();
  const { container } = wrap(<ShoppingTab />, '/checkout');
  expect(screen.getByText(/Proceed to checkout/i)).toBeTruthy();
  expect(container.querySelectorAll('.cart_item').length).toBe(3);
  fireEvent.click(screen.getAllByLabelText(/Remove .* from cart/i)[0]);
  expect(container.querySelectorAll('.cart_item').length).toBe(2);
});

test('live room reflects the lot in the url', () => {
  const { container } = wrap(
    <Routes>
      <Route path="/auctions/live/:id" element={<LiveAuctions />} />
    </Routes>,
    '/auctions/live/l3'
  );
  expect(container.querySelector('.display_bid_value').textContent).toBe('$980');
  expect(container.querySelector('.display_tag').textContent).toContain('Nature');
});

test('item detail reflects the product in the url', () => {
  const { container } = wrap(
    <Routes>
      <Route path="/marketplace/item/:id" element={<ItemDetails />} />
    </Routes>,
    '/marketplace/item/4'
  );
  expect(container.querySelector('.details_title h2').textContent).toBe('ELLIPSIA');
});

test('adding from the item page grows the cart', () => {
  window.localStorage.setItem('artsy:cart', '[]');
  const { container } = wrap(
    <Routes>
      <Route path="/marketplace/item/:id" element={<ItemDetails />} />
      <Route path="/checkout" element={<ShoppingTab />} />
    </Routes>,
    '/marketplace/item/4'
  );
  fireEvent.click(screen.getByLabelText('Increase quantity'));
  fireEvent.click(screen.getByRole('button', { name: /Add to cart/i }));
  expect(container.querySelector('.cart_dot')).toBeTruthy();
  expect(container.querySelector('.cart_count').textContent).toBe('2');
});

test('the bell opens the notifications modal and can be cleared', () => {
  window.localStorage.removeItem('artsy:notifications:read');
  const { container } = wrap(<Marketplace />, '/marketplace');

  expect(container.querySelector('.bell_dot')).toBeTruthy();
  expect(container.querySelector('.notif_panel')).toBeNull();

  fireEvent.click(screen.getByLabelText(/Notifications, \d+ unread/i));
  const panel = document.querySelector('.notif_panel');
  expect(panel).toBeTruthy();
  expect(panel.querySelectorAll('.notif_item').length).toBeGreaterThan(0);
  expect(panel.querySelectorAll('.notif_item.is_unread').length).toBeGreaterThan(0);

  fireEvent.click(screen.getByText('Mark all as read'));
  expect(document.querySelectorAll('.notif_item.is_unread').length).toBe(0);
  expect(container.querySelector('.bell_dot')).toBeNull();

  fireEvent.click(screen.getByLabelText('Close notifications'));
  expect(document.querySelector('.notif_panel')).toBeNull();
});

test('the unread filter empties once everything is read', () => {
  window.localStorage.removeItem('artsy:notifications:read');
  wrap(<Marketplace />, '/marketplace');
  fireEvent.click(screen.getByLabelText(/Notifications, \d+ unread/i));
  fireEvent.click(screen.getByText('Mark all as read'));
  fireEvent.click(screen.getByRole('tab', { name: /Unread/i }));
  expect(screen.getByText(/all caught up/i)).toBeTruthy();
});

test('the bell toggles the panel and it is not a blocking modal', () => {
  window.localStorage.removeItem('artsy:notifications:read');
  wrap(<Marketplace />, '/marketplace');
  const bell = screen.getByLabelText(/Notifications, \d+ unread/i);

  fireEvent.click(bell);
  const panel = document.querySelector('.notif_panel');
  expect(panel).toBeTruthy();
  // A popover leaves the page behind it reachable.
  expect(panel.getAttribute('aria-modal')).toBeNull();
  expect(bell.getAttribute('aria-expanded')).toBe('true');
  // Anchored to the bell rather than rendered at the page root.
  expect(panel.closest('.notif_anchor')).toBeTruthy();

  fireEvent.click(bell);
  expect(document.querySelector('.notif_panel')).toBeNull();
});

test('a click outside the bell dismisses the panel', () => {
  window.localStorage.removeItem('artsy:notifications:read');
  wrap(<Marketplace />, '/marketplace');
  fireEvent.click(screen.getByLabelText(/Notifications, \d+ unread/i));
  expect(document.querySelector('.notif_panel')).toBeTruthy();

  fireEvent.mouseDown(document.body);
  expect(document.querySelector('.notif_panel')).toBeNull();
});

test('drops filter by status', () => {
  const { container } = wrap(<Drop />, '/drops');
  const all = container.querySelectorAll('.drops_item').length;
  expect(all).toBeGreaterThan(0);

  fireEvent.click(screen.getByRole('tab', { name: /Live now/i }));
  const live = container.querySelectorAll('.drops_item');
  expect(live.length).toBeGreaterThan(0);
  expect(live.length).toBeLessThan(all);
  for (const row of live) {
    expect(row.querySelector('.second_tag').textContent).toBe('live now');
  }
});

test('a live drop opens its bidding room', () => {
  const { container } = wrap(
    <Routes>
      <Route path="/drops" element={<Drop />} />
      <Route path="/auctions/live/:id" element={<LiveAuctions />} />
    </Routes>,
    '/drops'
  );
  fireEvent.click(screen.getByRole('tab', { name: /Live now/i }));
  fireEvent.click(container.querySelectorAll('.drop_cta')[0]);
  // d2 maps to lot l2, whose opening bid is 2750.
  expect(container.querySelector('.display_bid_value').textContent).toBe('$2,750');
});

test('an upcoming drop sets a reminder and raises a notification', () => {
  window.localStorage.removeItem('artsy:drop-reminders');
  window.localStorage.removeItem('artsy:notifications:read');
  const { container } = wrap(<Drop />, '/drops');

  fireEvent.click(screen.getByRole('tab', { name: /Upcoming/i }));
  // The unset label is the drop's own "Get Notified"; the set one is "Notified ✓".
  const cta = container.querySelectorAll('.drop_cta')[0];
  expect(cta.textContent).toBe('Get Notified');
  expect(cta.getAttribute('aria-pressed')).toBe('false');

  fireEvent.click(cta);
  const after = container.querySelectorAll('.drop_cta')[0];
  expect(after.textContent).toBe('Notified ✓');
  expect(after.getAttribute('aria-pressed')).toBe('true');
  expect(JSON.parse(window.localStorage.getItem('artsy:drop-reminders')).length).toBe(1);

  fireEvent.click(screen.getByLabelText(/Notifications, \d+ unread/i));
  expect(screen.getByText('Reminder set')).toBeTruthy();
});
