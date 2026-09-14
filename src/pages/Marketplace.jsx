import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { useReveal } from '../hooks/useMotion';
import { PRODUCTS, CATEGORIES, PRICE_BANDS, SORTS } from '../data/products';
import '../css/Marketplace.css';

const PAGE_SIZE = 9;
const MAX_PRICE = 350;

const money = (n) => '$' + n.toFixed(2);

function Marketplace() {
  const [selectedCats, setSelectedCats] = useState([]);
  const [band, setBand] = useState('all');
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sort, setSort] = useState('featured');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [open, setOpen] = useState({ category: true, price: true, artist: true, year: false });
  const [gridRef, gridRevealed] = useReveal();

  const toggleSection = (key) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  const toggleCat = (cat) => {
    setSelectedCats((cur) =>
      cur.includes(cat) ? cur.filter((c) => c !== cat) : [...cur, cat]
    );
    setVisible(PAGE_SIZE); // a changed filter should start from the first page again
  };

  const filtered = useMemo(() => {
    const activeBand = PRICE_BANDS.find((b) => b.id === band);
    const bandTest = activeBand ? activeBand.test : () => true;
    const list = PRODUCTS.filter(
      (p) =>
        (selectedCats.length === 0 || selectedCats.includes(p.category)) &&
        bandTest(p.price) &&
        p.price <= maxPrice
    );
    const sorted = [...list];
    if (sort === 'priceAsc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'priceDesc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') sorted.sort((a, b) => b.year - a.year);
    else if (sort === 'az') sorted.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
  }, [selectedCats, band, maxPrice, sort]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const renderSection = (id, title, children) => (
    <div
      className={
        'filter_section filter_section--' + id + (open[id] ? '' : ' is_closed')
      }
    >
      <button
        type="button"
        className="by_category_inner"
        onClick={() => toggleSection(id)}
        aria-expanded={open[id]}
      >
        <p>{title}</p>
        <img
          src={'/assets/arrow_' + (open[id] ? 'top' : 'down') + '.webp'}
          alt=""
          aria-hidden="true"
        />
      </button>
      {open[id] && children}
    </div>
  );

  return (
    <div className="marketplace">
      <Nav />
      <div className="marketplace_body">
        <aside className="marketplace_one">
          <div className="marketplace_one_body">
            <div className="search_outter">
              <img src="/assets/search_icon.webp" alt="" aria-hidden="true" />
              <input type="text" placeholder="Search" aria-label="Search products" />
            </div>

            <div className="marketplace_filter">
              <div className="marketplace_filter_top">
                {/* Inline so it scales and picks up currentColor, unlike the
                    fixed-size raster it replaces. */}
                <svg
                  className="filter_glyph"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M3 7h13M19 7h2M3 17h5M11 17h10" />
                  <circle cx="17.5" cy="7" r="2.3" />
                  <circle cx="9.5" cy="17" r="2.3" />
                </svg>
                <p>Filter</p>
              </div>
              <div className="marketplace_filter_bottom">
                <div className="filter_underline" />
              </div>
            </div>

            {renderSection('category', 'By category', (
              <div className="category_options">
                {CATEGORIES.map((cat) => (
                  <label className="category_item" key={cat}>
                    <input
                      type="checkbox"
                      name="category"
                      value={cat}
                      checked={selectedCats.includes(cat)}
                      onChange={() => toggleCat(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            ))}

            {renderSection('price', 'By price', (
              <div className="by_price_body">
                <p>{money(0)} - {money(maxPrice)}</p>
                <input
                  type="range"
                  min="0"
                  max={MAX_PRICE}
                  step="5"
                  value={maxPrice}
                  aria-label="Maximum price"
                  onChange={(e) => {
                    setMaxPrice(Number(e.target.value));
                    setVisible(PAGE_SIZE);
                  }}
                />
              </div>
            ))}

            {renderSection('artist', 'By artist', (
              <div className="by_artist_body">
                {PRICE_BANDS.map((b) => (
                  <button
                    type="button"
                    key={b.id}
                    className={'band_option' + (band === b.id ? ' is_active' : '')}
                    onClick={() => {
                      setBand(b.id);
                      setVisible(PAGE_SIZE);
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            ))}

            {renderSection('year', 'Collection year', (
              <div className="by_artist_body">
                {[2023, 2022, 2021, 2020].map((y) => (
                  <span className="band_option is_static" key={y}>{y}</span>
                ))}
              </div>
            ))}
          </div>
        </aside>

        <div className="marketplace_two">
          <div className="market_two_body">
            <div className="result_sort">
              <p>
                {filtered.length === 0
                  ? 'No results'
                  : 'See 1-' + shown.length + ' of ' + filtered.length + ' results'}
              </p>
              <select
                value={sort}
                aria-label="Sort products"
                onChange={(e) => setSort(e.target.value)}
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>

            <div className="marketplace_heading_title">
              <h2>Home/ <span>Marketplace</span> </h2>
              <p>
                {filtered.length === 0
                  ? 'No results'
                  : 'Showing 1-' + shown.length + ' of ' + filtered.length + ' results'}
              </p>
            </div>

            <div className="filter_mobile">
              <select
                value={selectedCats.length === 1 ? selectedCats[0] : ''}
                aria-label="Filter by category"
                onChange={(e) => {
                  setSelectedCats(e.target.value ? [e.target.value] : []);
                  setVisible(PAGE_SIZE);
                }}
              >
                <option value="">Filters</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                value={sort}
                aria-label="Sort products"
                onChange={(e) => setSort(e.target.value)}
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>

            <div
              className={'all_arts reveal' + (gridRevealed ? ' is_revealed' : '')}
              ref={gridRef}
            >
              {shown.map((p, i) => (
                <div className="art_item" key={p.id} style={{ '--i': i }}>
                  <Link className="art_item_body" to={'/marketplace/item/' + p.id}>
                    <img src={p.img} alt={p.title} loading="lazy" />
                    <div className="art_item_text">
                      <p>{p.title}</p>
                      <h3>{money(p.price)}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="no_results">Nothing matches those filters. Try clearing one.</p>
            )}

            {/* Only rendered while items remain out of view. */}
            {hasMore && (
              <div className="see_more">
                <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                  See more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
