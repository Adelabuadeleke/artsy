import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { useReveal } from '../hooks/useMotion';
import { LIVE_LOTS, TOP_BIDS, formatCountdown } from '../data/auctions';
import '../css/Auctions.css';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const PAGE_SIZE = 4;

function Auctions() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [liked, setLiked] = useState([]);
  const [bidsRef, bidsRevealed] = useReveal();
  // One ticking clock drives every countdown rather than a timer per card.
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const toggleLike = (id) =>
    setLiked((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const shown = TOP_BIDS.slice(0, visible);
  const hasMore = visible < TOP_BIDS.length;

  return (
    <div className="auctions">
      <Nav />
      <div className="auctions_body">
        <h1>Home/<span>Auctions</span></h1>
        <h2>Here’s an overview of products actively on auction, explore!</h2>

        <div className="swiper_div">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            breakpoints={{
              0: { slidesPerView: 1.08 },
              640: { slidesPerView: 1.6 },
              900: { slidesPerView: 2.2 },
              1200: { slidesPerView: 2.6 },
            }}
            loop
            autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {LIVE_LOTS.map((lot) => {
              const left = lot.endsIn - elapsed;
              return (
                <SwiperSlide className="slide" key={lot.id}>
                  {/* Each lot opens its own live room. */}
                  <Link
                    to={'/auctions/live/' + lot.id}
                    className="lot_link"
                    aria-label={'Open the live room for ' + lot.title}
                  >
                    <div
                      className="outer"
                      style={{ backgroundImage: `url("${lot.img}")` }}
                    >
                      <div className={'timer' + (left <= 0 ? ' is_ended' : '')}>
                        {formatCountdown(left)}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-custom-pagination" />
        </div>

        <h2 className="top-bids">Top bids from popular creators</h2>

        <div
          className={'auction_top_bids reveal' + (bidsRevealed ? ' is_revealed' : '')}
          ref={bidsRef}
        >
          {shown.map((bid, i) => (
            <div className="top_bid_item" key={bid.id} style={{ '--i': i }}>
              <div className="top_bid_display">
                <button
                  type="button"
                  className={'top_bid_heart' + (liked.includes(bid.id) ? ' is_liked' : '')}
                  onClick={() => toggleLike(bid.id)}
                  aria-pressed={liked.includes(bid.id)}
                  aria-label={
                    (liked.includes(bid.id) ? 'Remove ' : 'Add ') + bid.title + ' to favourites'
                  }
                >
                  {/* Inline so the liked/unliked states are unambiguous — the
                      source glyphs are 33x27 and near-white on a white card. */}
                  <svg className="heart_glyph" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8c0 5.8-8.5 11.3-8.5 11.3Z"
                      fill={liked.includes(bid.id) ? '#E4514F' : 'none'}
                      stroke={liked.includes(bid.id) ? '#E4514F' : '#9a9a9a'}
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="top_bid_img">
                  <img src={bid.img} alt={bid.title} loading="lazy" />
                </div>
                <div className="top_bid_title">
                  <h2>{bid.title}</h2>
                </div>
              </div>
              <div className="top_bid_texts">
                <p>Creator <span> : {bid.creator}</span></p>
                <p>Date <span> : {bid.date}</span></p>
                <p>Highest Bid<span> : {bid.highest.toFixed(2)}</span> <span>ETH</span></p>

                <div className="current_bid">
                  <div className="current_bid_one">
                    <div className="current_bid_text">Current bid</div>
                    <div className="current_bid_eth">
                      {bid.current} <span>ETH</span>
                    </div>
                  </div>
                  <div className="current_bid_two">
                    <button
                      type="button"
                      onClick={() => navigate('/auctions/live/' + bid.lot)}
                    >
                      Place bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Only rendered while lots remain out of view. */}
        {hasMore && (
          <div className="see_more_auctions">
            <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              See more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auctions;
