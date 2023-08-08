import React from 'react'
import Nav from '../components/Nav'
import '../css/ShoppingTab.css'
// import Shopping_cart from '../components/Shopping_cart'
// import { checkout } from '../ProceedToCheckout'


function Shopping_tab() {
 // checkout()
 const proceedToCheckout = () => {
  const checkoutBtn = document.querySelector('.checkout-btn');
  const details  = document.querySelector('#details');
  const vision  = document.querySelector('#vision');
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");

 console.log(checkoutBtn)
  // checkoutBtn.addEventListener('click', ()=>{
   console.log('clicked')
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    details.classList.add("active");
    
     articles.forEach(function (article) {
      article.classList.remove("active");
    });
    
    vision.classList.add("active");
  // })
 }

 const proceedToPayment = () => {
  const paymentBtn = document.querySelector('.payment');
  const details  = document.querySelector('#payment');
  const vision  = document.querySelector('#goals');
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");

 // console.log(checkoutBtn)
  // checkoutBtn.addEventListener('click', ()=>{
   // console.log('clicked')
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    details.classList.add("active");
    
     articles.forEach(function (article) {
      article.classList.remove("active");
    });
    
    vision.classList.add("active");
  // })
 }

 // proceedToCheckout()

  return (
    <div className='shopping_tab'>
     <Nav />
      <article className="about">
          {/* <!-- btn container --> */}
          <div className="btn-container-outer">
            <div className="btn-container">
             <button className="tab-btn active" id="cart">Shopping cart</button>
             <button className="tab-btn" id="details">Shipping details</button>
             <button className="tab-btn" id="payment">Payment details</button>
           </div>
          </div>

          <div className="about-content">
            {/* shopping cart componenet */}
            {/* <Shopping_cart />*/}
             <div className="content active" id="shopping_cart">
       <div className="shopping_cart_items">

        {/* single cart item */}
        <div className="cart_item">
         <div className="cart_first">
          <div className="cart_first_one">
           <img src="../../assets/Shoppingtab/Rectangle 35.png" alt="" />
          </div>
          <div className="cart_first_two">
           <h2>Philomena ‘22</h2>
           <p>Clearamane</p>
           <p className="size">Size: <span>200ft</span> </p>
           <div className="counter_div"> 
            <button>-</button>
            <span className="count">1</span>
            <button>+</button>
           </div>
          </div>
         </div>
         <div className="cart_second">
          <img src="../../assets/Shoppingtab/Group.png" alt="" />

          <h1>$35.50</h1>
         </div>
        </div>
        {/* end of cart item */}


         {/* single cart item */}
        <div className="cart_item">
         <div className="cart_first">
          <div className="cart_first_one">
           <img src="../../assets/Shoppingtab/Rectangle 36.png" alt="" />
          </div>
          <div className="cart_first_two">
           <h2>Warped ‘99</h2>
           <p>Clearamane</p>
           <p className="size">Size: <span>200ft</span> </p>
           <div className="counter_div"> 
            <button>-</button>
            <span className="count">1</span>
            <button>+</button>
           </div>
          </div>
         </div>
         <div className="cart_second">
          <img src="../../assets/Shoppingtab/Group.png" alt="" />

          <h1>$39.50</h1>
         </div>
        </div>
        {/* end of cart item */}


         {/* single cart item */}
        <div className="cart_item">
         <div className="cart_first">
          <div className="cart_first_one">
           <img src="../../assets/Shoppingtab/Rectangle 37.png" alt="" />
          </div>
          <div className="cart_first_two">
           <h2>Ellipsia </h2>
           <p>Clearamane</p>
           <p className="size">Size: <span>200ft</span> </p>
           <div className="counter_div"> 
            <button>-</button>
            <span className="count">4</span>
            <button>+</button>
           </div>
          </div>
         </div>
         <div className="cart_second">
          <img src="../../assets/Shoppingtab/Group.png" alt="" />

          <h1>$36.50</h1>
         </div>
        </div>
        {/* end of cart item */}

        <div className="cart_summary">
         <div className="cart_proceed">
          <button className="checkout-btn" onClick={proceedToCheckout} >Proceed to checkout</button>
          <a href="">continue shopping</a>
         </div>
         <div className="cart_items_total">
           <p> <span className="name">Products in cart:</span>  <span className="name_content"><span className='product_count'>3</span> items</span></p>
           <p> <span className="name">Shipping:</span>  <span className="name_content">$2.50</span></p>
           <p> <span className="name">Total in cart:</span>  <span className="name_content">$114.00</span></p>
         </div>
        </div>
       </div>
     </div>
     {/*  end of shopping cart component  */}

     {/* <!-- start of shipping details component--> */}
     <div className="content" id="vision">
       <div className="shipping_details">
        <div className="shipping_details_first">
          <div className="shipping_input">
           <label htmlFor="">Your email</label>
           <input type="email" name="" id="" placeholder='willymonka@gmail.com'/>
           <div className="email_checkbox">
            <input type="checkbox" name="" id="" />
             Get updates about new drops & exclusive offers
           </div>
          </div>

          <div className="shipping_input">
           <label htmlFor="">Your full name</label>
           <input type="text" name="" id="" placeholder='Willy Monka'/>
          </div>

          <div className="shipping_input">
           <label htmlFor="">Choose a wallet</label>
           <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
           </select>
          </div>

          <div className="shipping_input">
           <label htmlFor="">City</label>
           <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
           </select>
          </div>

          <div className="shipping_input_split">
           <div className="country">
            <label htmlFor="">Country</label>
            <select name="" id="">
             <option value="">Nigeria</option>
             <option value="">Other</option>
            </select>
           </div>
           <div className="postal">
            <label htmlFor="">Postal code</label>
            <input type="number" name="" id="" placeholder='001001'/>
           </div>
          
          </div>


          <div className="shipping_input">
            <label htmlFor="">Phone number</label>
            <input type="text" name="" id="" placeholder='0812 3456 785'/> 
          </div>

          <div className="payment-btn">
           <button className="payment" onClick={proceedToPayment}>
            Proceed to payment
           </button>
          </div>
        </div>


        <div className="shipping_details_second">
          {/* <div className="content active" id="shopping_cart"> */}
       <div className="shopping_cart_items">

        {/* single cart item */}
        <div className="cart_item">
         <div className="cart_first">
          <div className="cart_first_one">
           <img src="../../assets/Shoppingtab/Rectangle 35.png" alt="" />
          </div>
          <div className="cart_first_two">
           <h2>Philomena ‘22</h2>
           <p>Clearamane</p>
           <p className="size">Size: <span>200ft</span> </p>
           <div className="counter_div"> 
            <button>-</button>
            <span className="count">1</span>
            <button>+</button>
           </div>
          </div>
         </div>
         <div className="cart_second">
          <img src="../../assets/Shoppingtab/Group.png" alt="" />

          <h1>$35.50</h1>
         </div>
        </div>
        {/* end of cart item */}

        {/* single cart item */}
        <div className="cart_item">
         <div className="cart_first">
          <div className="cart_first_one">
           <img src="../../assets/Shoppingtab/Rectangle 36.png" alt="" />
          </div>
          <div className="cart_first_two">
           <h2>Philomena ‘22</h2>
           <p>Clearamane</p>
           <p className="size">Size: <span>200ft</span> </p>
           <div className="counter_div"> 
            <button>-</button>
            <span className="count">1</span>
            <button>+</button>
           </div>
          </div>
         </div>
         <div className="cart_second">
          <img src="../../assets/Shoppingtab/Group.png" alt="" />

          <h1>$35.50</h1>
         </div>
        </div>
        {/* end of cart item */}

        {/* single cart item */}
        <div className="cart_item">
         <div className="cart_first">
          <div className="cart_first_one">
           <img src="../../assets/Shoppingtab/Rectangle 37.png" alt="" />
          </div>
          <div className="cart_first_two">
           <h2>Philomena ‘22</h2>
           <p>Clearamane</p>
           <p className="size">Size: <span>200ft</span> </p>
           <div className="counter_div"> 
            <button>-</button>
            <span className="count">1</span>
            <button>+</button>
           </div>
          </div>
         </div>
         <div className="cart_second">
          <img src="../../assets/Shoppingtab/Group.png" alt="" />

          <h1>$35.50</h1>
         </div>
        </div>
        {/* end of cart item */}

       <div className="cart_items_total">
          <p> <span className="name">Products in cart:</span>  <span className="name_content"><span className='product_count'>3</span> items</span></p>
          <p> <span className="name">Shipping:</span>  <span className="name_content">$2.50</span></p>
          <p> <span className="name">Total in cart:</span>  <span className="name_content">$114.00</span></p>
        </div>

        </div>
        </div>
       </div>
     </div>
     {/* <!-- end of shipping details component --> */}
     {/* <!-- start of payment details --> */}
     <div className="content" id="goals">
      <div className="payment_method">
       <h2>Payment method</h2>

       <div className="secure">
        <img src="../../assets/Shoppingtab/secured.png" alt="" />
        <small>Secure server</small>
       </div>
      </div>
      <div className="payment_method_body">
       <div className="select_payment_method">
        <div className="select_payment_body">
         <div className="select_wallet">
          <div className="select_text">
            <input type="radio" name="" id="" /> Select your wallet
          </div>
         
          <div className="wallet_div">
           <img src="../../assets/Shoppingtab/metamask.png" alt="" />
           <img src="../../assets/Shoppingtab/coinbase.png" alt="" />
           <img src="../../assets/Shoppingtab/walletconnect.png" alt="" />
           <img src="../../assets/Shoppingtab/phantom.png" alt="" />
          </div>

          
         </div>

         <div className="brief_text">
          <div className="brief_text_content">
            <p>Connect with one of our available wallet </p>
            <p>providers or add and connect a new wallet.  </p>
          </div>
         </div>
        
          <div className="shipping_input">
           <label htmlFor="">Wallet type</label>
           <input type="text" name="" id="" />
          </div>

          <div className="shipping_input">
           <label htmlFor="">Key</label>
           <div className="wallet_key_input">
            <input type="text" name="" id="" />
            <img src="../../assets/Shoppingtab/metamask.png" alt="" />
           </div>
          
          </div>


          <div className="shipping_input_split">
           <div className="country">
            <label htmlFor="">Expiry date</label>
            <input type="date" name="" id="" placeholder='MM/YY'/>
           </div>
           <div className="postal">
            <label htmlFor="">CVV</label>
            <input type="" name="" id="" placeholder='•••'/>
           </div>
          
          </div>

          <div className="save">
           <input type="checkbox" name="" id="" /> 
           Save my wallet details & information for future transactions
          </div>

          
         
        </div>
        <button className="confirm">
          Confirm
         </button>
       </div>
       <div className="payment_summary">

       </div>
      </div>
     </div>
     {/* <!-- end of payment details--> */}
       </div>
     </article>
  </div>
 )
}

export default Shopping_tab