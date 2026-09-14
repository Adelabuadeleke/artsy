import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { nextNotification, seedNotifications } from '../data/notifications';

const READ_KEY = 'artsy:notifications:read';

// A new notification lands every 30s while the tab is open.
const ARRIVAL_MS = 30000;

const NotificationsContext = createContext(null);

function readStoredIds() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(READ_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function NotificationsProvider({ children }) {
  const [items, setItems] = useState(() => seedNotifications());
  const [readIds, setReadIds] = useState(readStoredIds);
  const seq = useRef(100);

  useEffect(() => {
    try {
      // Only the ids still on screen are worth keeping.
      window.localStorage.setItem(READ_KEY, JSON.stringify(readIds.slice(-100)));
    } catch {
      /* private mode — read state just won't survive a reload */
    }
  }, [readIds]);

  useEffect(() => {
    const t = setInterval(() => {
      const arrival = nextNotification((seq.current += 1));
      setItems((cur) => [arrival, ...cur].slice(0, 30));
    }, ARRIVAL_MS);
    return () => clearInterval(t);
  }, []);

  /* Lets the rest of the app raise a notification — setting a drop reminder
     puts one in the bell, which is the only cross-page signal that it stuck. */
  const push = useCallback((n) => {
    const entry = { kind: 'drop', ...n, id: n.id || 'push-' + (seq.current += 1), at: Date.now() };
    setItems((cur) => [entry, ...cur.filter((x) => x.id !== entry.id)].slice(0, 30));
  }, []);

  const markRead = useCallback((id) => {
    setReadIds((cur) => (cur.includes(id) ? cur : [...cur, id]));
  }, []);

  // Reads the current list from a ref rather than from inside a setItems
  // updater — StrictMode runs updaters twice, so they must stay side-effect free.
  const itemsRef = useRef(items);
  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  const markAllRead = useCallback(() => {
    setReadIds(itemsRef.current.map((n) => n.id));
  }, []);

  const value = useMemo(() => {
    const read = new Set(readIds);
    const list = items.map((n) => ({ ...n, read: read.has(n.id) }));
    return {
      items: list,
      unread: list.filter((n) => !n.read).length,
      push,
      markRead,
      markAllRead,
    };
  }, [items, readIds, push, markRead, markAllRead]);

  return (
    <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error('useNotifications must be used inside <NotificationsProvider>');
  return ctx;
}
