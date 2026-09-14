// Seed chat for the live auction room. Avatars come from public/assets/Liveauctions.
const AV = (n) => `/assets/Liveauctions/${n}`;

export const YOUR_AVATAR = AV('Ellipse 47.webp');

export const SEED_COMMENTS = [
  { id: 1, name: 'Taylor Ellen',     text: '$45.00 instant bid',         avatar: AV('Ellipse 52.webp') },
  { id: 2, name: 'Ella Flynn',       text: 'Tight bid',                  avatar: AV('Ellipse 45.webp') },
  { id: 3, name: 'Uncle Luca',       text: 'instant bid',                avatar: AV('Ellipse 46.webp') },
  { id: 4, name: 'Opeyemi Tiwalope', text: '$45.00',                     avatar: AV('Ellipse 47.webp') },
  { id: 5, name: 'Celestina Quinn',  text: 'gm frens! ready to bidddd',  avatar: AV('Ellipse 48.webp') },
  { id: 6, name: 'Samy Ellen',       text: 'i love this. $20.00 for me', avatar: AV('Ellipse 49.webp') },
];

const BIDDERS = [
  { name: 'Ella Flynn',      avatar: AV('Ellipse 45.webp') },
  { name: 'Uncle Luca',      avatar: AV('Ellipse 46.webp') },
  { name: 'Celestina Quinn', avatar: AV('Ellipse 48.webp') },
  { name: 'Taylor Ellen',    avatar: AV('Ellipse 52.webp') },
  { name: 'Samy Ellen',      avatar: AV('Ellipse 49.webp') },
];

const CHATTER = [
  'not today frens',
  'this one is mine 👀',
  'that framing though',
  'holding for the next lot',
  'gm, just got here',
];

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

/**
 * One tick of room activity: usually a raise on the standing bid, sometimes
 * just chatter. Returns the message plus the bid it implies (null for chatter),
 * so the room's headline figure moves because someone actually bid.
 */
export function nextActivity(currentBid) {
  const who = rand(BIDDERS);
  if (Math.random() < 0.65) {
    const step = Math.max(50, Math.round((currentBid * (0.02 + Math.random() * 0.06)) / 50) * 50);
    const amount = currentBid + step;
    return {
      bid: amount,
      comment: { ...who, text: `$${amount.toLocaleString()} from me` },
    };
  }
  return { bid: null, comment: { ...who, text: rand(CHATTER) } };
}

/** Pulls a dollar figure out of a typed message, e.g. "raising to $6,200". */
export function parseBid(text) {
  const m = text.match(/\$?\s*([\d,]+(?:\.\d{1,2})?)/);
  if (!m) return null;
  const n = Number(m[1].replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}
