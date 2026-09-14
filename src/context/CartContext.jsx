import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { INITIAL_CART, SHIPPING } from '../data/cart';

const STORAGE_KEY = 'artsy:cart';

const CartContext = createContext(null);

/* The demo ships with a pre-filled cart so the checkout flow has something to
   show on a first visit; after that the browser's copy wins. */
function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return INITIAL_CART;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return INITIAL_CART;
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStored);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* private mode / quota — the cart just won't survive a reload */
    }
  }, [items]);

  /* Adding something already in the cart bumps its quantity rather than
     creating a second line for it. */
  const add = useCallback((product, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((i) => i.id === product.id);
      if (found) {
        return cur.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...cur, { ...product, qty }];
    });
  }, []);

  const remove = useCallback((id) => {
    setItems((cur) => cur.filter((i) => i.id !== id));
  }, []);

  const changeQty = useCallback((id, delta) => {
    setItems((cur) =>
      cur.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = count ? SHIPPING : 0;
    return {
      items,
      count,
      subtotal,
      shipping,
      total: subtotal + shipping,
      add,
      remove,
      changeQty,
      clear,
    };
  }, [items, add, remove, changeQty, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
