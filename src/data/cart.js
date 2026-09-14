// Cart contents for the checkout flow. Figures match the Figma CHECKOUT frame
// (347:116): 35.50 + 39.50 + 36.50 + 2.50 shipping = $114.00.
const IMG = (n) => `/assets/Shoppingtab/${n}`;

export const SHIPPING = 2.5;

export const INITIAL_CART = [
  { id: 'philomena', title: 'Philomena ‘22', maker: 'Clearamane', size: '200 ft', price: 35.5, qty: 1, img: IMG('Rectangle 35.webp') },
  { id: 'warped',    title: 'Warped ‘99',    maker: 'Clearamane', size: '200 ft', price: 39.5, qty: 1, img: IMG('Rectangle 36.webp') },
  { id: 'ellipsia',  title: 'Ellipsia',      maker: 'Clearamane', size: '200 ft', price: 36.5, qty: 1, img: IMG('Rectangle 37.webp') },
];

export const WALLETS = [
  { id: 'metamask',      label: 'MetaMask',      img: IMG('metamask.webp') },
  { id: 'coinbase',      label: 'Coinbase',      img: IMG('coinbase.webp') },
  { id: 'walletconnect', label: 'WalletConnect', img: IMG('walletconnect.webp') },
  { id: 'phantom',       label: 'Phantom',       img: IMG('phantom.webp') },
];

export const money = (n) => '$' + n.toFixed(2);
