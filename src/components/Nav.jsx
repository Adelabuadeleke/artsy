import React, { useEffect, useState } from 'react';
import '../css/Nav.css';
import '../css/SideBar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useCart } from '../context/CartContext';
import { useNotifications } from '../context/NotificationsContext';
import NotificationsPanel from './NotificationsPanel';

const LINKS = [
  { to: '/', label: 'home' },
  { to: '/marketplace', label: 'marketplace' },
  { to: '/auctions', label: 'auctions' },
  { to: '/drops', label: 'drop' },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const { count } = useCart();
  const { unread } = useNotifications();
  const { pathname } = useLocation();

  // Navigating away should leave the drawer behind.
  useEffect(() => {
    setOpen(false);
    setNotifOpen(false);
  }, [pathname]);

  // Don't let the page scroll behind an open drawer.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const cartLabel = count
    ? `Cart, ${count} item${count === 1 ? '' : 's'}`
    : 'Cart, empty';

  return (
    <div className="nav">
      <nav>
        <div className="mobile_icon">
          <button
            type="button"
            className="menu_btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <MenuIcon className="menu" />
          </button>
        </div>
        <p>artsy.</p>

        <ul>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : 'toggle')}
            >
              {l.label}
            </NavLink>
          ))}
        </ul>

        <div className="nav__icons">
          <SearchIcon className="search" />

          <Link to="/checkout" className="cart_link" aria-label={cartLabel} title={cartLabel}>
            <ShoppingCartOutlinedIcon className="cart" />
            {count > 0 && (
              <>
                <span className="cart_dot" aria-hidden="true" />
                <span className="cart_count" aria-hidden="true">
                  {count > 9 ? '9+' : count}
                </span>
              </>
            )}
          </Link>

          {/* The panel is a popover anchored to this button on desktop, so it
              lives inside the anchor rather than at the page root. */}
          <div className="notif_anchor">
            <button
              type="button"
              className="bell_btn"
              onClick={() => setNotifOpen((o) => !o)}
              aria-label={
                unread ? `Notifications, ${unread} unread` : 'Notifications'
              }
              aria-haspopup="dialog"
              aria-expanded={notifOpen}
            >
              <NotificationsNoneIcon className="bell" />
              {unread > 0 && (
                <>
                  <span className="bell_dot" aria-hidden="true" />
                  <span className="bell_count" aria-hidden="true">
                    {unread > 9 ? '9+' : unread}
                  </span>
                </>
              )}
            </button>

            {notifOpen && <NotificationsPanel onClose={() => setNotifOpen(false)} />}
          </div>
        </div>
      </nav>

      {open && <div className="sidebar_scrim" onClick={() => setOpen(false)} />}

      <aside className={'sidebar' + (open ? ' show_toggle' : '')} aria-hidden={!open}>
        <div className="sidebar_top">
          <h2>artsy.</h2>
          <button
            type="button"
            className="sidebar_cancel_btn"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <ClearOutlinedIcon className="sidebar_cancel" />
          </button>
        </div>

        <div className="sidebar_list">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              <p>{l.label}</p>
            </NavLink>
          ))}
          <NavLink to="/checkout">
            <p>
              cart
              {count > 0 && <span className="sidebar_count">{count}</span>}
            </p>
          </NavLink>
          <button
            type="button"
            className="sidebar_notif"
            onClick={() => {
              setOpen(false);
              setNotifOpen(true);
            }}
          >
            <p>
              notifications
              {unread > 0 && <span className="sidebar_count">{unread}</span>}
            </p>
          </button>
        </div>

        <div className="sidebar_chat">
          <img src="/assets/chat.svg" alt="" />
        </div>
      </aside>
    </div>
  );
}

export default Nav;
