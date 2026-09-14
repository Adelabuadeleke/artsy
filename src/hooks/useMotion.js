import { useEffect, useRef, useState } from 'react';

/**
 * Reveals a container the first time it scrolls into view, so grids animate in
 * as you reach them rather than all at once on mount.
 *
 * Returns [ref, revealed]. Where IntersectionObserver is missing — jsdom in the
 * tests, and older browsers — it reveals immediately, so content is never
 * gated behind an API that may not be there.
 */
export function useReveal(options) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px', ...options }
    );

    io.observe(el);

    /* Children start at opacity 0, so anything that stops the observer firing
       would leave the content invisible rather than merely un-animated. Reveal
       regardless after a beat — the worst case is a grid that skips its
       entrance, never one that never appears. */
    const failsafe = setTimeout(() => setRevealed(true), 1500);

    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, [revealed, options]);

  return [ref, revealed];
}

/**
 * True for a moment each time `value` grows — for the little pop a badge or a
 * figure gives when it changes. Ignores decreases, which are not news.
 */
export function useBump(value, ms = 420) {
  const [bumping, setBumping] = useState(false);
  const previous = useRef(value);

  useEffect(() => {
    const grew = value > previous.current;
    previous.current = value;
    if (!grew) return undefined;

    setBumping(true);
    const t = setTimeout(() => setBumping(false), ms);
    return () => clearTimeout(t);
  }, [value, ms]);

  return bumping;
}
