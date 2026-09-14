// Dummy catalogue for the marketplace. Images are reused across entries on
// purpose — the point is to exercise filtering/pagination, not to be a real feed.

export const CATEGORIES = ['Editorials', 'Fashion', 'Optics', 'Art & Museum', 'Nature'];

// Labels come verbatim from the Figma "By artist" panel (which lists price bands).
export const PRICE_BANDS = [
  { id: 'all', label: 'All', test: () => true },
  { id: 'below100', label: 'Below $100.00', test: (p) => p < 100 },
  { id: '100to150', label: '$100.00 - $150.00', test: (p) => p >= 100 && p <= 150 },
  { id: '150to200', label: '$150.00 - $200.00', test: (p) => p > 150 && p <= 200 },
  { id: 'above200', label: 'Above $200.00', test: (p) => p > 200 },
];

const IMG = (n) => `/assets/${n}`;

export const PRODUCTS = [
  { id: 1,  title: 'PHILOMENA ‘22',    price: 3.9,   category: 'Editorials',   year: 2022, img: IMG('Rectangle 251.webp') },
  { id: 2,  title: 'BOOLEAN EGYPTIAN', price: 128,   category: 'Art & Museum', year: 2021, img: IMG('Rectangle 299 (4).webp') },
  { id: 3,  title: 'BLANC',            price: 96.5,  category: 'Fashion',      year: 2022, img: IMG('Rectangle 49 (1).webp') },
  { id: 4,  title: 'ELLIPSIA',         price: 145,   category: 'Optics',       year: 2020, img: IMG('Rectangle 53.webp') },
  { id: 5,  title: 'THE LAWMAKERS',    price: 260,   category: 'Editorials',   year: 2019, img: IMG('Rectangle 54.webp') },
  { id: 6,  title: 'VEIL',             price: 175,   category: 'Fashion',      year: 2022, img: IMG('Rectangle 50.webp') },
  { id: 7,  title: 'ALTERNATING',      price: 42,    category: 'Optics',       year: 2021, img: IMG('Rectangle 48.webp') },
  { id: 8,  title: 'ROSEMARY ‘22',     price: 210,   category: 'Editorials',   year: 2022, img: IMG('Rectangle 52 (5).webp') },
  { id: 9,  title: 'BEVERLY',          price: 88,    category: 'Nature',       year: 2020, img: IMG('Rectangle 55.webp') },
  { id: 10, title: 'ROAD TO EGYPT',    price: 134,   category: 'Art & Museum', year: 2018, img: IMG('Rectangle 299 (1).webp') },
  { id: 11, title: 'OLOIBIRI 1997',    price: 320,   category: 'Art & Museum', year: 1997, img: IMG('Rectangle 299 (2).webp') },
  { id: 12, title: 'ARE WE THERE YET', price: 74,    category: 'Nature',       year: 2021, img: IMG('Rectangle 299 (3).webp') },
  { id: 13, title: 'MONALISA REDUX',   price: 189,   category: 'Art & Museum', year: 2022, img: IMG('Rectangle 299.webp') },
  { id: 14, title: 'SILENT HOURS',     price: 58,    category: 'Editorials',   year: 2023, img: IMG('Rectangle 231.webp') },
  { id: 15, title: 'NORTHBOUND',       price: 112,   category: 'Nature',       year: 2020, img: IMG('Rectangle 232.webp') },
  { id: 16, title: 'CARRIAGE NO. 4',   price: 240,   category: 'Editorials',   year: 2019, img: IMG('Rectangle 233.webp') },
  { id: 17, title: 'GLASSHOUSE',       price: 149,   category: 'Optics',       year: 2022, img: IMG('Rectangle 234.webp') },
  { id: 18, title: 'DUNE STUDY',       price: 67,    category: 'Nature',       year: 2021, img: IMG('Rectangle 240.webp') },
  { id: 19, title: 'THE LONG WAIT',    price: 198,   category: 'Fashion',      year: 2018, img: IMG('Rectangle 241.webp') },
  { id: 20, title: 'PORTRAIT IX',      price: 305,   category: 'Editorials',   year: 2023, img: IMG('Rectangle 242.webp') },
  { id: 21, title: 'AFTERGLOW',        price: 91,    category: 'Optics',       year: 2022, img: IMG('Rectangle 65.webp') },
  { id: 22, title: 'MERIDIAN',         price: 155,   category: 'Nature',       year: 2020, img: IMG('Rectangle 66.webp') },
  { id: 23, title: 'SECOND SKIN',      price: 129,   category: 'Fashion',      year: 2021, img: IMG('Rectangle 65 (2).webp') },
  { id: 24, title: 'LOW TIDE',         price: 45,    category: 'Nature',       year: 2023, img: IMG('Rectangle 299 (4).webp') },
];

export const SORTS = [
  { id: 'featured',  label: 'Sort by' },
  { id: 'priceAsc',  label: 'Price: low to high' },
  { id: 'priceDesc', label: 'Price: high to low' },
  { id: 'newest',    label: 'Newest' },
  { id: 'az',        label: 'A – Z' },
];

/* The detail page needs a little more than the grid card does. Rather than
   hand-writing four more fields on 24 dummy rows, derive them deterministically
   so the same product always reads the same way. */
const CREATORS = [
  'Ali Dawa', 'Clearamane', 'Stormi Rylie', 'Ada Nwosu', 'Kola Ade',
  'Theo Adeyemi', 'Nadia Hassan', 'Ines Okafor',
];
const SIZES = ['200 ft', '150 ft', '320 ft', '180 ft'];

for (const [i, p] of PRODUCTS.entries()) {
  p.creator = CREATORS[i % CREATORS.length];
  p.size = SIZES[i % SIZES.length];
  p.eth = Number((p.price / 1450).toFixed(3));
  p.views = (0.4 + ((i * 37) % 30) / 10).toFixed(1) + 'k';
  p.madeIn = 'Italy';
}

/** The product behind /marketplace/item/:id — falls back to the first. */
export const getProduct = (id) =>
  PRODUCTS.find((p) => String(p.id) === String(id)) || PRODUCTS[0];

/** Four other pieces to show under "Explore more from this collection". */
export const relatedTo = (product) =>
  PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
