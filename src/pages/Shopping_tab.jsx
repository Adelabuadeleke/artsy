import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { WALLETS, money } from '../data/cart';
import { useCart } from '../context/CartContext';
import '../css/ShoppingTab.css';

const TABS = [
  { id: 'cart', label: 'Shopping cart' },
  { id: 'shipping', label: 'Shipping details' },
  { id: 'payment', label: 'Payment details' },
];

/* One cart list, reused by all three panels — it was previously duplicated
   three times with hardcoded quantities and totals. */
function CartList({ items, onQty, onRemove, readOnly }) {
  if (items.length === 0) {
    return <p className="cart_empty">Your cart is empty.</p>;
  }
  return (
    <>
      {items.map((it) => (
        <div className="cart_item" key={it.id}>
          <div className="cart_first">
            <div className="cart_first_one">
              <img src={it.img} alt={it.title} loading="lazy" />
            </div>
            <div className="cart_first_two">
              <h2>{it.title}</h2>
              <p>{it.maker}</p>
              <p className="size">
                Size: <span>{it.size}</span>
              </p>
              {readOnly ? (
                <p className="size">
                  Qty: <span>{it.qty}</span>
                </p>
              ) : (
                <div className="counter_div">
                  <button
                    type="button"
                    onClick={() => onQty(it.id, -1)}
                    aria-label={`Decrease quantity of ${it.title}`}
                  >
                    -
                  </button>
                  <span className="count">{it.qty}</span>
                  <button
                    type="button"
                    onClick={() => onQty(it.id, 1)}
                    aria-label={`Increase quantity of ${it.title}`}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="cart_second">
            {!readOnly && (
              <button
                type="button"
                className="remove_item"
                onClick={() => onRemove(it.id)}
                aria-label={`Remove ${it.title} from cart`}
              >
                <img src="/assets/Shoppingtab/Group.webp" alt="" />
              </button>
            )}
            <h1>{money(it.price * it.qty)}</h1>
          </div>
        </div>
      ))}
    </>
  );
}

function CartTotals({ count, shipping, total }) {
  return (
    <div className="cart_items_total">
      <p>
        <span className="name">Products in cart:</span>
        <span className="name_content">
          <span className="product_count">{count}</span> items
        </span>
      </p>
      <p>
        <span className="name">Shipping:</span>
        <span className="name_content">{money(shipping)}</span>
      </p>
      <p>
        <span className="name">Total in cart:</span>
        <span className="name_content">{money(total)}</span>
      </p>
    </div>
  );
}

function ShoppingTab() {
  const navigate = useNavigate();
  const { items, count, shipping, total, changeQty, remove, clear } = useCart();

  const [tab, setTab] = useState('cart');
  const [wallet, setWallet] = useState('metamask');
  const [saveWallet, setSaveWallet] = useState(false);
  const [subscribe, setSubscribe] = useState(true);
  const [name, setName] = useState('');

  const totals = <CartTotals count={count} shipping={shipping} total={total} />;
  const activeWallet = WALLETS.find((w) => w.id === wallet);

  // Confirming empties the cart and hands the receipt to the thank-you page,
  // which is why the badge in the nav clears at the same time.
  const confirmOrder = () => {
    if (items.length === 0) return;
    const order = {
      name: name.trim(),
      count,
      total,
      reference: 'ARTSY-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
      wallet: activeWallet?.label,
    };
    clear();
    navigate('/checkout/thankyou', { state: { order } });
  };

  return (
    <div className="shopping_tab">
      <Nav />
      <article className="about">
        <div className="btn-container-outer">
          <div className="btn-container">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                id={t.id}
                className={'tab-btn' + (tab === t.id ? ' active' : '')}
                aria-current={tab === t.id ? 'step' : undefined}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="about-content">
          {/* ---------------- shopping cart ---------------- */}
          {tab === 'cart' && (
            <div className="content active" id="shopping_cart">
              <div className="shopping_cart_items">
                <CartList items={items} onQty={changeQty} onRemove={remove} />
                {totals}
                <div className="cart_actions">
                  <button
                    type="button"
                    className="checkout-btn"
                    disabled={items.length === 0}
                    onClick={() => setTab('shipping')}
                  >
                    Proceed to checkout
                  </button>
                  <Link to="/marketplace" className="continue_shopping">
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- shipping details ---------------- */}
          {tab === 'shipping' && (
            <div className="content active" id="vision">
              <div className="shipping_details">
                <div className="shipping_details_first">
                  <div className="shipping_input">
                    <label htmlFor="ship_email">Your email</label>
                    <input id="ship_email" type="email" placeholder="willymonka@gmail.com" />
                    <label className="email_checkbox" htmlFor="ship_updates">
                      <input
                        id="ship_updates"
                        type="checkbox"
                        checked={subscribe}
                        onChange={(e) => setSubscribe(e.target.checked)}
                      />
                      Get updates about new drops &amp; exclusive offers
                    </label>
                  </div>

                  <div className="shipping_input">
                    <label htmlFor="ship_name">Your full name</label>
                    <input
                      id="ship_name"
                      type="text"
                      placeholder="Willy Monka"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="shipping_input">
                    <label htmlFor="ship_wallet">Choose a wallet</label>
                    <select
                      id="ship_wallet"
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                    >
                      {WALLETS.map((w) => (
                        <option key={w.id} value={w.id}>{w.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="shipping_input">
                    <label htmlFor="ship_city">City</label>
                    <select id="ship_city" defaultValue="Lagos">
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                    </select>
                  </div>

                  <div className="shipping_input_split">
                    <div className="country">
                      <label htmlFor="ship_country">Country</label>
                      <select id="ship_country" defaultValue="Nigeria">
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Kenya</option>
                      </select>
                    </div>
                    <div className="postal">
                      <label htmlFor="ship_postal">Postal code</label>
                      <input id="ship_postal" type="text" inputMode="numeric" placeholder="001001" />
                    </div>
                  </div>

                  <div className="shipping_input">
                    <label htmlFor="ship_phone">Phone number</label>
                    <input id="ship_phone" type="tel" placeholder="0812 3456 785" />
                  </div>

                  <div className="payment-btn">
                    <button
                      type="button"
                      className="payment"
                      disabled={items.length === 0}
                      onClick={() => setTab('payment')}
                    >
                      Proceed to payment
                    </button>
                  </div>
                </div>

                <div className="shipping_details_second">
                  <div className="shopping_cart_items">
                    <CartList items={items} readOnly />
                    {totals}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- payment details ---------------- */}
          {tab === 'payment' && (
            <div className="content active" id="goals">
              <div className="payment_method">
                <h2>Payment method</h2>
                <div className="secure">
                  <img src="/assets/Shoppingtab/secured.webp" alt="" />
                  <small>Secure server</small>
                </div>
              </div>

              <div className="payment_method_body">
                <div className="select_payment_method">
                  <div className="select_payment_body">
                    <div className="select_wallet">
                      <div className="select_text">Select your wallet</div>

                      <div className="wallet_div" role="radiogroup" aria-label="Select your wallet">
                        {WALLETS.map((w) => (
                          <button
                            type="button"
                            key={w.id}
                            role="radio"
                            aria-checked={wallet === w.id}
                            aria-label={w.label}
                            className={'wallet_option' + (wallet === w.id ? ' is_selected' : '')}
                            onClick={() => setWallet(w.id)}
                          >
                            <img src={w.img} alt="" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="brief_text">
                      <div className="brief_text_content">
                        <p>Connect with one of our available wallet</p>
                        <p>providers or add and connect a new wallet.</p>
                      </div>
                    </div>

                    <div className="shipping_input">
                      <label htmlFor="pay_type">Wallet type</label>
                      <input id="pay_type" type="text" value={activeWallet?.label ?? ''} readOnly />
                    </div>

                    <div className="shipping_input">
                      <label htmlFor="pay_key">Key</label>
                      <div className="wallet_key_input">
                        <input id="pay_key" type="text" placeholder="Please enter your key" />
                        <img src={activeWallet?.img} alt="" />
                      </div>
                    </div>

                    <div className="shipping_input_split">
                      <div className="country">
                        <label htmlFor="pay_exp">Expiry date</label>
                        <input id="pay_exp" type="text" placeholder="MM/YY" />
                      </div>
                      <div className="postal">
                        <label htmlFor="pay_cvv">CVV</label>
                        <input id="pay_cvv" type="password" placeholder="•••" maxLength={4} />
                      </div>
                    </div>

                    <label className="save" htmlFor="pay_save">
                      <input
                        id="pay_save"
                        type="checkbox"
                        checked={saveWallet}
                        onChange={(e) => setSaveWallet(e.target.checked)}
                      />
                      Save my wallet details &amp; information for future transactions
                    </label>
                  </div>

                  <button
                    type="button"
                    className="confirm"
                    onClick={confirmOrder}
                    disabled={items.length === 0}
                  >
                    Confirm
                  </button>
                </div>

                <div className="payment_summary">
                  <div className="summary_heading">
                    <h2>Payment summary</h2>
                  </div>

                  <div className="summary_wallet">
                    <h3>{activeWallet?.label} wallet : 002345KJi90pzzz3</h3>
                    <p>Actively linked to Yaba, Lagos Nigeria.</p>
                  </div>

                  <div className="summary_arrival">
                    <p>Expected arrival date: Between 22nd</p>
                    <p>September and 26th September 2022</p>
                  </div>

                  {totals}
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default ShoppingTab;
