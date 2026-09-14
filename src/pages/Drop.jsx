import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import {
  DROPS,
  STATUS_FILTERS,
  dropDestination,
  formatDropTime,
  STATUS_LABEL,
  STATUS_CLASS,
  PILL_LABEL,
} from '../data/drops';
import { useNotifications } from '../context/NotificationsContext';
import { useReveal } from '../hooks/useMotion';
import '../css/Drop.css';

const PAGE_SIZE = 4;
const REMINDER_KEY = 'artsy:drop-reminders';

function readReminders() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(REMINDER_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/marketplace', label: 'Marketplace' },
  { to: '/auctions', label: 'Auctions' },
  { to: '/drops', label: 'Drops' },
];

function Drop() {
  const navigate = useNavigate();
  const { push } = useNotifications();

  const [filter, setFilter] = useState('all');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [notified, setNotified] = useState(readReminders);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  // One clock for every countdown rather than a timer per row.
  const [elapsed, setElapsed] = useState(0);
  const [listRef, listRevealed] = useReveal();

  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Reminders outlive the visit, so the button state survives a reload.
  useEffect(() => {
    try {
      window.localStorage.setItem(REMINDER_KEY, JSON.stringify(notified));
    } catch {
      /* private mode — reminders just won't persist */
    }
  }, [notified]);

  const counts = useMemo(() => {
    const by = { all: DROPS.length, upcoming: 0, live: 0, ended: 0 };
    for (const d of DROPS) by[d.status] += 1;
    return by;
  }, []);

  const filtered = useMemo(
    () => (filter === 'all' ? DROPS : DROPS.filter((d) => d.status === filter)),
    [filter]
  );

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const upcoming = DROPS.filter((d) => d.status === 'upcoming');
  const allUpcomingOn = upcoming.every((d) => notified.includes(d.id));

  const setReminder = (d) => {
    const on = !notified.includes(d.id);
    setNotified((cur) => (on ? [...cur, d.id] : cur.filter((x) => x !== d.id)));
    if (on) {
      push({
        id: 'reminder-' + d.id,
        title: 'Reminder set',
        body: `We'll tell you when ${d.title} opens — ${d.date}.`,
        img: d.img,
        to: '/drops',
      });
    }
  };

  // The header button is a bulk version of the same control.
  const toggleAllReminders = () => {
    if (allUpcomingOn) {
      setNotified((cur) => cur.filter((id) => !upcoming.some((d) => d.id === id)));
      return;
    }
    setNotified((cur) => [...new Set([...cur, ...upcoming.map((d) => d.id)])]);
    push({
      id: 'reminder-all',
      title: 'Notifications on',
      body: `You'll be told about all ${upcoming.length} upcoming drops.`,
      img: upcoming[0]?.img,
      to: '/drops',
    });
  };

  // Join/View routes somewhere for live and ended drops; for an upcoming one
  // there is nothing to open yet, so it sets the reminder instead.
  const openDrop = (d) => {
    const to = dropDestination(d);
    if (to) navigate(to);
    else setReminder(d);
  };

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    push({
      id: 'newsletter',
      title: 'Subscribed',
      body: 'You’re on the list for new drops and deals.',
      img: DROPS[0].img,
      to: '/drops',
    });
  };

  return (
    <div className="drop">
      <Nav />
      <div className="drop_body">
        <h2>
          <Link to="/">Home</Link>/ <Link to="/auctions">Auctions</Link>/ <span>Drops</span>
        </h2>

        <div className="drop_intro">
          <h1>Upcoming drops</h1>
          <p>Turn on notifications so that no drops will miss you.</p>
          <button
            type="button"
            className={'notify' + (allUpcomingOn ? ' is_on' : '')}
            onClick={toggleAllReminders}
            aria-pressed={allUpcomingOn}
          >
            {allUpcomingOn ? 'Notifications on ✓' : 'Notify me'}
          </button>
        </div>

        <div className="drop_filters" role="tablist" aria-label="Filter drops">
          {STATUS_FILTERS.map((f) => (
            <button
              type="button"
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              className={'drop_filter' + (filter === f.id ? ' is_active' : '')}
              onClick={() => {
                setFilter(f.id);
                setVisible(PAGE_SIZE);
              }}
            >
              {f.label} <span className="drop_filter_count">{counts[f.id]}</span>
            </button>
          ))}
        </div>

        <div
          className={'drop_items reveal' + (listRevealed ? ' is_revealed' : '')}
          ref={listRef}
        >
          {shown.map((d, i) => {
            const isEnded = d.status === 'ended';
            const left = isEnded ? 0 : d.endsIn - elapsed;
            const cls = STATUS_CLASS[d.status];
            const isNotified = notified.includes(d.id);

            return (
              <div className="drops_item" key={d.id} style={{ '--i': i }}>
                <div className="item_first" style={{ backgroundImage: `url("${d.img}")` }}>
                  <div className="drop_item_tag_div">
                    <div className={'second_tag ' + cls}>{STATUS_LABEL[d.status]}</div>
                  </div>
                  <div className="drop_timer">
                    <small>{isEnded ? 'Auction ended' : 'Time remaining'}</small>
                    <div className="time_details">
                      <p>{isEnded ? d.endedAgo : formatDropTime(left)}</p>
                      <button
                        type="button"
                        className={'drop_pill ' + cls}
                        onClick={() => openDrop(d)}
                      >
                        {d.status === 'upcoming' && isNotified ? 'Reminded' : PILL_LABEL[d.status]}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="item_second">
                  <div className={'second_tag ' + cls}>{STATUS_LABEL[d.status]}</div>

                  <p>{d.date}</p>

                  <h2>{d.title}</h2>

                  <small>{d.blurb}</small>

                  <h2 className="creator">
                    Creator : <span>{d.creator}</span>
                  </h2>

                  <button
                    type="button"
                    className={'drop_cta' + (isNotified && !isEnded ? ' is_on' : '')}
                    onClick={() => openDrop(d)}
                    aria-pressed={d.status === 'upcoming' ? isNotified : undefined}
                  >
                    {d.status === 'upcoming' && isNotified ? 'Notified ✓' : d.cta}
                  </button>
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="drop_empty">No drops with that status right now.</p>
          )}
        </div>

        {/* Only rendered while drops remain out of view. */}
        {hasMore && (
          <div className="see_more_drops">
            <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              See more
            </button>
          </div>
        )}
      </div>

      <section className="newsletter">
        <div className="newsletter_inner">
          <h2>NewsLetter</h2>
          <p>Subscribe to get daily updates on new drops &amp; exciting deals </p>
          <form className="newsletter_input" onSubmit={subscribe}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              aria-label="Email address"
            />
            <button type="submit">{subscribed ? 'Subscribed ✓' : 'Subscribe'}</button>
          </form>
          {subscribed && (
            <p className="newsletter_done" role="status">
              You’re on the list. Watch the bell for new drops.
            </p>
          )}
        </div>
      </section>

      <footer>
        <div className="footer__inner">
          <div className="footer_inner_one">
            <h1>ARTSY.</h1>
          </div>

          <div className="footer_inner_two">
            {FOOTER_LINKS.map((l) => (
              <Link to={l.to} key={l.to}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="footer_inner_three">
            <p>Blog</p>
            <p>Wallets</p>
            <p>Rates</p>
            <p>High bids</p>
          </div>

          <div className="footer_inner_four">
            <p>
              <img src="/assets/mail_icon.svg" alt="" /> artsystudios@gmail.com
            </p>
            <p>
              <img src="/assets/location_pin.svg" alt="" /> Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="footer_end">
          <p>Artsystudios © 2022. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Drop;
