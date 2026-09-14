import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import {
  SEED_COMMENTS,
  YOUR_AVATAR,
  nextActivity,
  parseBid,
} from '../data/liveAuction';
import { getLot, formatClock } from '../data/auctions';
import '../css/LiveAuctions.css';

const HEART_COLOURS = ['#4693ed', '#e8505b', '#37c978', '#8b5cf6', '#f59e0b', '#ec4899'];

const CloseGlyph = () => (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M1 1l26 26M27 1L1 27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

function Comment({ c }) {
  return (
    <li className={'comment_display_item' + (c.mine ? ' is_mine' : '')}>
      <div className="commenter_img">
        <img src={c.avatar} alt="" loading="lazy" />
      </div>
      <div className="commenter_content">
        <p className="commenter_name">{c.name}</p>
        <p className="comment_text">{c.text}</p>
      </div>
    </li>
  );
}

function LiveAuctions() {
  const { id } = useParams();
  // The room is whichever lot you opened; /auctions/live falls back to the first.
  const lot = useMemo(() => getLot(id), [id]);

  const [comments, setComments] = useState(SEED_COMMENTS);
  const [draft, setDraft] = useState('');
  const [bid, setBid] = useState(lot.openingBid);
  const [leader, setLeader] = useState(lot.creator);
  const [viewers, setViewers] = useState(295);
  const [left, setLeft] = useState(lot.endsIn);
  const [hearts, setHearts] = useState([]);

  const feedRef = useRef(null);
  const nextId = useRef(1000);

  // Switching rooms resets the room, not just the picture behind it.
  useEffect(() => {
    setComments(SEED_COMMENTS);
    setBid(lot.openingBid);
    setLeader(lot.creator);
    setLeft(lot.endsIn);
    setViewers(180 + Math.floor(Math.random() * 260));
  }, [lot]);

  // Keep the feed pinned to the newest message.
  useEffect(() => {
    const el = feedRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [comments]);

  // Lot clock.
  useEffect(() => {
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [lot]);

  const ended = left <= 0;

  // Rival bids + drifting viewer count, so the room reads as live. Both stop
  // once the clock runs out. The standing bid is mirrored in a ref because the
  // interval needs to read it without queueing a side effect from inside a
  // state updater (StrictMode runs those twice).
  const bidRef = useRef(bid);
  useEffect(() => {
    bidRef.current = bid;
  }, [bid]);

  useEffect(() => {
    if (ended) return undefined;
    const chat = setInterval(() => {
      const { bid: raised, comment } = nextActivity(bidRef.current);
      const entry = { ...comment, id: (nextId.current += 1) };
      setComments((cur) => [...cur, entry].slice(-40));
      if (raised) {
        bidRef.current = raised;
        setBid(raised);
        setLeader(comment.name);
      }
    }, 6500);
    const people = setInterval(
      () => setViewers((v) => Math.max(120, v + Math.floor(Math.random() * 11) - 5)),
      3000
    );
    return () => {
      clearInterval(chat);
      clearInterval(people);
    };
  }, [ended]);

  // Drop the heart from the state list once its animation is done.
  const popHeart = () => {
    const h = {
      id: (nextId.current += 1),
      left: 4 + Math.random() * 62,
      colour: HEART_COLOURS[Math.floor(Math.random() * HEART_COLOURS.length)],
      scale: 0.7 + Math.random() * 0.6,
    };
    setHearts((cur) => [...cur, h]);
    setTimeout(() => setHearts((cur) => cur.filter((x) => x.id !== h.id)), 2600);
  };

  const say = (text) => {
    const entry = { id: (nextId.current += 1), name: 'You', text, avatar: YOUR_AVATAR, mine: true };
    setComments((cur) => [...cur, entry]);
  };

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || ended) return;
    say(text);
    const amount = parseBid(text);
    if (amount && amount > bid) {
      setBid(amount);
      setLeader('You');
    }
    setDraft('');
  };

  // One-tap raise, for when you don't want to type a figure.
  const raise = () => {
    if (ended) return;
    const step = Math.max(50, Math.round((bid * 0.05) / 50) * 50);
    const amount = bid + step;
    setBid(amount);
    setLeader('You');
    say('$' + amount.toLocaleString() + ' from me');
  };

  return (
    <div className="liveauctions">
      <Nav />

      <h2 className="liveauctions_crumbs">
        <Link to="/">Home</Link>/ <Link to="/auctions">Auctions</Link>/{' '}
        <span>{lot.title}</span>
      </h2>

      <div className="liveauctions_contents">
        <div
          className="liveauction_display"
          style={{ backgroundImage: 'url("' + lot.img + '")' }}
        >
          <div className="display_topbar">
            <div className="display_status">
              <span className={'live' + (ended ? ' is_ended' : '')}>
                {ended ? 'ended' : 'live'}
              </span>
              <span className="viewers_count">
                <img src="/assets/Liveauctions/Group 496.webp" alt="" />
                {viewers}
              </span>
              <span className="lot_clock" title="Time left on this lot">
                {formatClock(left)}
              </span>
            </div>

            <Link to="/auctions" className="cancel" aria-label="Close live auction">
              <CloseGlyph />
            </Link>
          </div>

          <div className="display_bid">
            <span className="display_bid_label">Current bid</span>
            <strong className="display_bid_value">${bid.toLocaleString()}</strong>
            <span className="display_bid_leader">
              {ended ? 'Won by' : 'Leading'} : {leader}
            </span>
          </div>

          <div className="display_tag">
            <span>Tag:</span> {lot.tag}
          </div>
        </div>

        <div className="liveauction_comments">
          <ul className="comments_display" ref={feedRef}>
            {comments.map((c) => (
              <Comment c={c} key={c.id} />
            ))}
          </ul>

          <div className="bid_all">
            <div className="place_bid">
              <small>Creator : {lot.creator}</small>
              <form className="place_bid_content" onSubmit={send}>
                <div className="place_bid_input">
                  <input
                    type="text"
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    placeholder={ended ? 'Bidding has closed' : 'Place a bid...'}
                    aria-label="Place a bid"
                    disabled={ended}
                    id="bid_input"
                  />
                  <button
                    type="submit"
                    className="send_bid"
                    aria-label="Send bid"
                    disabled={ended}
                  >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M3 11.5L21 3l-8.5 18-2.2-7.3L3 11.5z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <button
              type="button"
              className="raise_btn"
              onClick={raise}
              disabled={ended}
            >
              Raise
            </button>

            <button
              type="button"
              className="heart_btn"
              onClick={popHeart}
              aria-label="Send a heart"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 21s-7.5-4.7-9.3-9A5.2 5.2 0 0 1 12 6.6 5.2 5.2 0 0 1 21.3 12c-1.8 4.3-9.3 9-9.3 9z"
                  fill="#e8505b"
                />
              </svg>
              <span className="hearts_stream" aria-hidden="true">
                {hearts.map((h) => (
                  <svg
                    key={h.id}
                    className="float_heart"
                    viewBox="0 0 24 24"
                    style={{ left: h.left + '%', color: h.colour, '--s': h.scale }}
                  >
                    <path
                      d="M12 21s-7.5-4.7-9.3-9A5.2 5.2 0 0 1 12 6.6 5.2 5.2 0 0 1 21.3 12c-1.8 4.3-9.3 9-9.3 9z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </span>
            </button>
          </div>
        </div>
      </div>

      <Link to="/drops" className="auctions_upcoming_link">
        <div className="auctions_upcoming">
          <p>See upcoming drops</p>
          <img src="/assets/Liveauctions/arrow_upcoming.webp" alt="" />
        </div>
      </Link>
    </div>
  );
}

export default LiveAuctions;
