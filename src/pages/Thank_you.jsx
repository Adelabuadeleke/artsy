import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import { money } from '../data/cart';
import '../css/Thankyou.css';

function Thank_you() {
  // Populated by the checkout's Confirm step; reaching this page directly just
  // shows the generic thank-you.
  const order = useLocation().state?.order;
  const who = order?.name || 'Celestina';

  return (
    <div className="thank_you">
      <Nav />
      <div className="thank_you_body">
        <img src="/assets/Thankyou/Woman get online delivery.webp" alt="" />
        <h2>Hey {who}, thank you for your purchase.</h2>
        <small>
          You are amazing. Cheers to being <span>ARTSY!</span>
          <img src="/assets/Thankyou/Illustration.webp" alt="" />
        </small>

        {order && (
          <dl className="order_receipt">
            <div>
              <dt>Order</dt>
              <dd>{order.reference}</dd>
            </div>
            <div>
              <dt>Items</dt>
              <dd>{order.count}</dd>
            </div>
            <div>
              <dt>Paid</dt>
              <dd>{money(order.total)}</dd>
            </div>
            {order.wallet && (
              <div>
                <dt>Wallet</dt>
                <dd>{order.wallet}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="thank_you_actions">
          <Link to="/marketplace" className="keep_shopping">
            Keep shopping
          </Link>
          <Link to="/drops" className="see_drops">
            See upcoming drops
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thank_you;
