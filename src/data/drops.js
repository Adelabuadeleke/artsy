// Dummy drops feed. Statuses drive the badge colour, the pill label and whether
// the row shows a live countdown or an "ended" timestamp.

const D = (n) => `/assets/Drops/${n}`;

const BLURB =
  'Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.';

export const DROPS = [
  {
    id: 'd1', status: 'upcoming', title: 'Eyo : Eko For Show', creator: 'Aliya Minat',
    date: 'November 21 at 11 am WAT', img: D('Rectangle 82.webp'),
    cta: 'Get Notified', blurb: BLURB, endsIn: 6 * 3600 + 45 * 60 + 22,
  },
  {
    id: 'd2', status: 'live', title: 'Ginger Suburbs', creator: 'Tina Benson',
    date: 'November 21 at 11 am WAT', img: D('Rectangle 84.webp'),
    cta: 'Join now', blurb: BLURB, endsIn: 2 * 3600 + 8 * 60 + 5, lot: 'l2',
  },
  {
    id: 'd3', status: 'ended', title: 'Sink', creator: 'Aliya Minat',
    date: 'November 21 at 11 am WAT', img: D('Rectangle 87.webp'),
    cta: 'View', blurb: BLURB, endedAgo: '2 hours ago',
  },
  {
    id: 'd4', status: 'ended', title: 'Warped ‘99', creator: 'Aliya Minat',
    date: 'November 21 at 11 am WAT', img: D('Rectangle 232.webp'),
    cta: 'View', blurb: BLURB, endedAgo: '5 hours ago',
  },
  {
    id: 'd5', status: 'upcoming', title: 'Harmattan Light', creator: 'Kola Ade',
    date: 'December 02 at 4 pm WAT', img: D('Rectangle 84.webp'),
    cta: 'Get Notified', blurb: BLURB, endsIn: 31 * 3600 + 12 * 60 + 9,
  },
  {
    id: 'd6', status: 'live', title: 'Salt & Static', creator: 'Mara Idowu',
    date: 'November 22 at 9 am WAT', img: D('Rectangle 87.webp'),
    cta: 'Join now', blurb: BLURB, endsIn: 47 * 60 + 30, lot: 'l6',
  },
  {
    id: 'd7', status: 'ended', title: 'Blue Hour Tapes', creator: 'Sena Cole',
    date: 'November 12 at 6 pm WAT', img: D('Rectangle 232.webp'),
    cta: 'View', blurb: BLURB, endedAgo: '3 days ago',
  },
  {
    id: 'd8', status: 'upcoming', title: 'Concrete Garden', creator: 'Femi Bright',
    date: 'December 09 at 1 pm WAT', img: D('Rectangle 82.webp'),
    cta: 'Get Notified', blurb: BLURB, endsIn: 5 * 3600 + 3 * 60 + 44,
  },
];

/** Design shows "06  hrs : 45 min : 22 s" — pad to keep the columns steady. */
export function formatDropTime(total) {
  if (total <= 0) return 'Starting now';
  const h = String(Math.floor(total / 3600)).padStart(2, '0');
  const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const s = String(total % 60).padStart(2, '0');
  return `${h} hrs : ${m} min : ${s} s`;
}

export const STATUS_LABEL = { upcoming: 'upcoming', live: 'live now', ended: 'ended' };
export const STATUS_CLASS = { upcoming: 'upcoming', live: 'live_drop', ended: 'ended' };
export const PILL_LABEL = { upcoming: 'Join', live: 'Join', ended: 'View' };


export const STATUS_FILTERS = [
  { id: 'all', label: 'All drops' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'live', label: 'Live now' },
  { id: 'ended', label: 'Ended' },
];

/**
 * Where a drop's Join/View button goes. Live drops open their bidding room;
 * ended ones fall back to the marketplace. Upcoming drops have nowhere to go
 * yet, so the button sets a reminder instead — the caller checks for null.
 */
export function dropDestination(drop) {
  if (drop.status === 'live') return drop.lot ? '/auctions/live/' + drop.lot : '/auctions';
  if (drop.status === 'ended') return '/marketplace';
  return null;
}
