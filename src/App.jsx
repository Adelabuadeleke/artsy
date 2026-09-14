import { useEffect } from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Auctions from './pages/Auctions';
import Drop from './pages/Drop';
import ItemDetails from './pages/ItemDetails';
import LiveAuctions from './pages/LiveAuctions';
import ShoppingTab from './pages/Shopping_tab';
import Thank_you from './pages/Thank_you';
import { CartProvider } from './context/CartContext';
import { NotificationsProvider } from './context/NotificationsContext';
import './App.css';
// Last, so its hover/focus states land after every page sheet in the cascade.
import './css/Interactive.css';

/* A client-side navigation keeps the old scroll offset, which lands you
   half-way down the next page. */
function ScrollToTop() {
  const { pathname } = useLocation();
  // Block body on purpose: a concise arrow would return scrollTo's result, and
  // React takes any non-undefined return as the effect's cleanup function.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="app">
      <CartProvider>
        <NotificationsProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/item" element={<ItemDetails />} />
              <Route path="/marketplace/item/:id" element={<ItemDetails />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/auctions/live" element={<LiveAuctions />} />
              <Route path="/auctions/live/:id" element={<LiveAuctions />} />
              <Route path="/drops" element={<Drop />} />
              <Route path="/checkout" element={<ShoppingTab />} />
              <Route path="/checkout/thankyou" element={<Thank_you />} />
              {/* Anything else lands on the home page rather than a blank screen. */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </NotificationsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
