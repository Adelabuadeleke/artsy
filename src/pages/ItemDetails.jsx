import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import { getProduct, relatedTo } from '../data/products';
import { useCart } from '../context/CartContext';
import '../css/ItemDetails.css';

const money = (n) => '$' + n.toFixed(2);

const SECTIONS = [
  {
    id: 'description',
    label: 'Description',
    body: (p) =>
      `${p.title} is a ${p.year} ${p.category.toLowerCase()} piece by ${p.creator}, ` +
      `printed at ${p.size} and finished in ${p.madeIn}.`,
  },
  { id: 'listings', label: 'Listings', body: (p) => `One of 12 editions, ${money(p.price)} each.` },
  { id: 'status', label: 'Status', body: () => 'Minted and available. Ships within 5 working days.' },
];

function ItemDetails() {
  const { id } = useParams();
  const product = useMemo(() => getProduct(id), [id]);
  const related = useMemo(() => relatedTo(product), [product]);

  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [openSection, setOpenSection] = useState('description');
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    add(
      {
        id: 'p' + product.id,
        title: product.title,
        maker: product.creator,
        size: product.size,
        price: product.price,
        img: product.img,
      },
      qty
    );
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="itemdetails">
      <Nav />
      <div className="itemdetails_body">
        <h1>
          <Link to="/">Home</Link>/ <Link to="/marketplace">Marketplace</Link>/ {product.category}/
          <span>{product.title}</span>
        </h1>

        <div className="item_details">
          <div className="details_one">
            <img src={product.img} alt={product.title} />
          </div>

          <div className="details_two">
            <div className="details_title">
              <h2>{product.title}</h2>
              <p>
                <img src="/assets/eth_logo.webp" alt="" /> {product.eth}
              </p>
            </div>

            <div className="details_cart">
              <p>
                Creator : <span>{product.creator}</span>
              </p>
              <small>Made in {product.madeIn}</small>
              <h4>
                Total views: <span>{product.views}</span> view
              </h4>

              <div className="counter_div">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="count">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="cart_cta">
                <button
                  type="button"
                  className={added ? 'is_added' : undefined}
                  onClick={addToCart}
                >
                  {added ? 'Added to cart ✓' : 'Add to cart — ' + money(product.price * qty)}
                </button>
                <button
                  type="button"
                  className={'like_btn' + (liked ? ' is_liked' : '')}
                  onClick={() => setLiked((l) => !l)}
                  aria-pressed={liked}
                  aria-label={liked ? 'Remove from favourites' : 'Add to favourites'}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8c0 5.8-8.5 11.3-8.5 11.3Z"
                      fill={liked ? '#E4514F' : 'none'}
                      stroke={liked ? '#E4514F' : '#9a9a9a'}
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {added && (
                <p className="added_note" role="status">
                  In your cart. <Link to="/checkout">Go to checkout</Link>
                </p>
              )}
            </div>

            <div className="cart_drop_down">
              {SECTIONS.map((s) => (
                <div
                  className={'drop_item' + (openSection === s.id ? ' is_open' : '')}
                  key={s.id}
                >
                  <button
                    type="button"
                    className="drop_item_head"
                    onClick={() => setOpenSection((cur) => (cur === s.id ? null : s.id))}
                    aria-expanded={openSection === s.id}
                  >
                    <p>{s.label}</p>
                    <img
                      src={'/assets/arrow_' + (openSection === s.id ? 'top' : 'down') + '.webp'}
                      alt=""
                    />
                  </button>
                  {openSection === s.id && <p className="drop_item_body">{s.body(product)}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="item_detail_explore">
          <h2>Explore more from this collection</h2>
        </div>
      </div>

      <div className="item_detail_slider">
        {related.map((p) => (
          <Link className="explore_page_item" to={'/marketplace/item/' + p.id} key={p.id}>
            <div className="explore_img">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <div className="explore_text">
              <p>{p.title}</p>
              <div className="text_eth">
                <img src="/assets/eth_logo.webp" alt="" />
                <p>{p.eth}</p>
              </div>
            </div>
          </Link>
        ))}
        {related.length === 0 && (
          <p className="cart_empty">Nothing else in this collection yet.</p>
        )}
      </div>

      <div className="explore_all">
        <Link className="explore_all_cta" to="/marketplace">
          Explore all
        </Link>
      </div>
    </div>
  );
}

export default ItemDetails;
