// Dummy auction data. Images repeat across entries on purpose — the point is to
// exercise the carousel, countdowns and pagination, not to be a real feed.

const A = (n) => `/assets/Auctions/${n}`;

// Live lots shown in the top carousel. `endsIn` is seconds from page load, so the
// countdown actually ticks instead of being a static "6hr : 40mins : 15s".
// Each lot is also a room you can open at /auctions/live/:id.
export const LIVE_LOTS = [
  {
    id: 'l1', img: A('Rectangle 247.webp'), endsIn: 6 * 3600 + 40 * 60 + 15,
    title: 'Lost or Wither', creator: 'Stormi Rylie', tag: 'Lost or Wither', openingBid: 4500,
  },
  {
    id: 'l2', img: A('Rectangle 245.webp'), endsIn: 3 * 3600 + 12 * 60 + 48,
    title: 'Second Skin', creator: 'Ada Nwosu', tag: 'Fashion / Editorial', openingBid: 2750,
  },
  {
    id: 'l3', img: A('Rectangle 247 (1).webp'), endsIn: 1 * 3600 + 5 * 60 + 30,
    title: 'Harmattan Light', creator: 'Kola Ade', tag: 'Nature', openingBid: 980,
  },
  {
    id: 'l4', img: A('Rectangle 57.webp'), endsIn: 9 * 3600 + 27 * 60 + 6,
    title: 'Out of the Box', creator: 'Dan Murray', tag: 'Art & Museum', openingBid: 6100,
  },
  {
    id: 'l5', img: A('Rectangle 58.webp'), endsIn: 22 * 60 + 9,
    title: 'Falling Apart', creator: 'Jacob Banks', tag: 'Editorials', openingBid: 1450,
  },
  {
    id: 'l6', img: A('Rectangle 245.webp'), endsIn: 14 * 3600 + 2 * 60 + 41,
    title: 'Paper Lanterns', creator: 'Theo Adeyemi', tag: 'Optics', openingBid: 3300,
  },
];

export const TOP_BIDS = [
  { id: 'b1', lot: 'l4', title: 'Out of the box', creator: 'Dan Murray',    date: '12/08/22', highest: 0.57, current: 0.987, img: A('Rectangle 57.webp') },
  { id: 'b2', lot: 'l5', title: 'Falling apart',  creator: 'Jacob Banks',   date: '12/08/22', highest: 0.34, current: 0.99,  img: A('Rectangle 58.webp') },
  { id: 'b3', lot: 'l1', title: 'Golden hour',    creator: 'Ama Boateng',   date: '09/08/22', highest: 0.81, current: 1.204, img: A('Rectangle 247.webp') },
  { id: 'b4', lot: 'l2', title: 'Still water',    creator: 'Ines Okafor',   date: '05/08/22', highest: 0.22, current: 0.418, img: A('Rectangle 245.webp') },
  { id: 'b5', lot: 'l6', title: 'Paper lanterns', creator: 'Theo Adeyemi',  date: '02/08/22', highest: 1.15, current: 1.62,  img: A('Rectangle 247 (1).webp') },
  { id: 'b6', lot: 'l3', title: 'The quiet room', creator: 'Nadia Hassan',  date: '28/07/22', highest: 0.44, current: 0.71,  img: A('Rectangle 57.webp') },
];

/** The lot behind /auctions/live/:id — falls back to the headline lot. */
export const getLot = (id) => LIVE_LOTS.find((l) => l.id === id) || LIVE_LOTS[0];

/** Seconds -> the design's "6hr : 40mins : 15s" shape. */
export function formatCountdown(total) {
  if (total <= 0) return 'Ended';
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}hr : ${m}mins : ${s}s`;
}

/** Compact "06:40:15" for the live room's header clock. */
export function formatClock(total) {
  if (total <= 0) return '00:00:00';
  const p = (n) => String(n).padStart(2, '0');
  return `${p(Math.floor(total / 3600))}:${p(Math.floor((total % 3600) / 60))}:${p(total % 60)}`;
}
