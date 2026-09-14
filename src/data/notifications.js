// Notifications are derived from the same dummy feeds the pages render, so the
// panel always talks about things you can actually click through to.
import { DROPS } from './drops';
import { LIVE_LOTS, TOP_BIDS } from './auctions';
import { PRODUCTS } from './products';

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;

const drop = (i) => DROPS[i % DROPS.length];
const lot = (i) => LIVE_LOTS[i % LIVE_LOTS.length];
const bid = (i) => TOP_BIDS[i % TOP_BIDS.length];
const art = (i) => PRODUCTS[i % PRODUCTS.length];

/* `ago` is minutes before now, resolved at build time so the list reads as a
   history rather than everything arriving at once. */
const SEED = [
  (i) => ({
    kind: 'bid',
    title: 'You were outbid',
    body: `${bid(i).creator} raised “${bid(i).title}” to ${bid(i).current} ETH.`,
    img: bid(i).img,
    to: '/auctions/live/' + lot(i).id,
    ago: 4,
  }),
  (i) => ({
    kind: 'live',
    title: 'Live now',
    body: `“${lot(i + 1).title}” by ${lot(i + 1).creator} is taking bids.`,
    img: lot(i + 1).img,
    to: '/auctions/live/' + lot(i + 1).id,
    ago: 26,
  }),
  (i) => ({
    kind: 'drop',
    title: 'Drop starting soon',
    body: `${drop(i).title} — ${drop(i).date}.`,
    img: drop(i).img,
    to: '/drops',
    ago: 3 * 60,
  }),
  (i) => ({
    kind: 'price',
    title: 'Price drop',
    body: `${art(i + 3).title} is now $${art(i + 3).price.toFixed(2)}.`,
    img: art(i + 3).img,
    to: '/marketplace/item/' + art(i + 3).id,
    ago: 9 * 60,
  }),
  (i) => ({
    kind: 'order',
    title: 'Shipping update',
    body: 'Your last order cleared customs and is out for delivery.',
    img: art(i + 7).img,
    to: '/checkout',
    ago: 29 * 60,
  }),
];

export function seedNotifications(now = Date.now()) {
  return SEED.map((make, i) => {
    const n = make(i);
    return { ...n, id: 'n' + i, at: now - n.ago * MINUTE };
  });
}

// Pool the live feed draws from. Each call picks one at random, so the panel
// keeps producing believable new activity while the tab is open.
const INCOMING = [
  (i) => ({
    kind: 'bid',
    title: 'New bid on a lot you watch',
    body: `${lot(i).creator}'s “${lot(i).title}” just moved.`,
    img: lot(i).img,
    to: '/auctions/live/' + lot(i).id,
  }),
  (i) => ({
    kind: 'live',
    title: 'A room you follow went live',
    body: `“${lot(i + 2).title}” is open for bids.`,
    img: lot(i + 2).img,
    to: '/auctions/live/' + lot(i + 2).id,
  }),
  (i) => ({
    kind: 'drop',
    title: 'Drop reminder',
    body: `${drop(i + 1).title} opens ${drop(i + 1).date}.`,
    img: drop(i + 1).img,
    to: '/drops',
  }),
  (i) => ({
    kind: 'price',
    title: 'Back in stock',
    body: `${art(i + 11).title} is available again.`,
    img: art(i + 11).img,
    to: '/marketplace/item/' + art(i + 11).id,
  }),
];

export function nextNotification(seq) {
  const make = INCOMING[Math.floor(Math.random() * INCOMING.length)];
  return { ...make(seq), id: 'n' + seq + '-' + Date.now(), at: Date.now() };
}

/** "just now" / "12m ago" / "3h ago" / "2d ago" */
export function timeAgo(at, now = Date.now()) {
  const diff = Math.max(0, now - at);
  if (diff < MINUTE) return 'just now';
  if (diff < HOUR) return Math.floor(diff / MINUTE) + 'm ago';
  if (diff < 24 * HOUR) return Math.floor(diff / HOUR) + 'h ago';
  return Math.floor(diff / (24 * HOUR)) + 'd ago';
}

export const KIND_LABEL = {
  bid: 'Auction',
  live: 'Live',
  drop: 'Drop',
  price: 'Marketplace',
  order: 'Order',
};
