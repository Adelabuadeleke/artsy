import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { KIND_LABEL, timeAgo } from '../data/notifications';
import { useNotifications } from '../context/NotificationsContext';
import '../css/Notifications.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'unread', label: 'Unread' },
];

// Below this the panel is a bottom sheet with a scrim; above it, a popover
// anchored under the bell. Keep in step with the breakpoint in Notifications.css.
const SHEET_QUERY = '(max-width: 599px)';

/**
 * Non-modal popover: the page behind stays visible and usable, which is the
 * right weight for something you glance at. Only the phone sheet locks scroll.
 */
function NotificationsPanel({ onClose }) {
  const { items, unread, markRead, markAllRead } = useNotifications();
  const [filter, setFilter] = useState('all');
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  // Re-render once a minute so "12m ago" keeps up without a timer per row.
  const [, tick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => tick((n) => n + 1), 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    // Anything outside the bell's anchor dismisses it. Clicks inside the anchor
    // are left alone so the bell itself can toggle.
    const onOutside = (e) => {
      if (!e.target.closest?.('.notif_anchor')) onClose();
    };

    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onOutside);

    // A sheet covers the screen, so the page behind it must not scroll. The
    // popover leaves the page alone on purpose.
    const isSheet = window.matchMedia?.(SHEET_QUERY).matches;
    const previous = document.body.style.overflow;
    if (isSheet) document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onOutside);
      if (isSheet) document.body.style.overflow = previous;
    };
  }, [onClose]);

  const shown = filter === 'unread' ? items.filter((n) => !n.read) : items;

  return (
    <>
      {/* Phone only — the popover needs no backdrop. */}
      <div className="notif_scrim" onClick={onClose} />

      <div
        className="notif_panel"
        ref={panelRef}
        role="dialog"
        aria-labelledby="notif_title"
      >
        <header className="notif_head">
          <div className="notif_head_left">
            <h2 id="notif_title">Notifications</h2>
            {unread > 0 && <span className="notif_pill">{unread} new</span>}
          </div>
          <button
            type="button"
            className="notif_close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Close notifications"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className="notif_tools">
          <div className="notif_filters" role="tablist" aria-label="Filter notifications">
            {FILTERS.map((f) => (
              <button
                type="button"
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={'notif_filter' + (filter === f.id ? ' is_active' : '')}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                {f.id === 'unread' && unread > 0 ? ` (${unread})` : ''}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="notif_mark_all"
            onClick={markAllRead}
            disabled={unread === 0}
          >
            Mark all as read
          </button>
        </div>

        <ul className="notif_list">
          {shown.map((n, i) => (
            <li
              key={n.id}
              className={'notif_item' + (n.read ? '' : ' is_unread')}
              style={{ '--i': i }}
            >
              <Link
                to={n.to}
                className="notif_link"
                onClick={() => {
                  markRead(n.id);
                  onClose();
                }}
              >
                <span className="notif_thumb">
                  <img src={n.img} alt="" loading="lazy" />
                </span>
                <span className="notif_body">
                  <span className="notif_meta">
                    <span className={'notif_kind notif_kind--' + n.kind}>
                      {KIND_LABEL[n.kind]}
                    </span>
                    <span className="notif_time">{timeAgo(n.at)}</span>
                  </span>
                  <span className="notif_title">{n.title}</span>
                  <span className="notif_text">{n.body}</span>
                </span>
                {!n.read && <span className="notif_dot" aria-label="Unread" />}
              </Link>
            </li>
          ))}

          {shown.length === 0 && (
            <li className="notif_empty">
              {filter === 'unread' ? "You're all caught up." : 'Nothing here yet.'}
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default NotificationsPanel;
