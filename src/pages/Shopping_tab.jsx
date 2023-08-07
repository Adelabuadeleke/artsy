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
           <input type="email" name="" id="" />
           <div className="email_checkbox">
            <input type="checkbox" name="" id="" />
             Get updates about new drops & exclusive offers
           </div>
          </div>

          <div className="shipping_details">
           <label htmlFor="">Your full name</label>
           <input type="text" name="" id="" />
          </div>

          <div className="shipping_details">
           <label htmlFor="">Choose a wallet</label>
           <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
           </select>
          </div>

          <div className="shipping_details">
           <label htmlFor="">City</label>
           <select name="" id="">
            <option value="">one</option>
            <option value="">two</option>
           </select>
          </div>

          <div className="shipping_details">
           <div className="country">
            <label htmlFor="">Country</label>
            <select name="" id="">
             <option value="">Nigeria</option>
             <option value="">Other</option>
            </select>
           </div>
           <div className="postal">
            <label htmlFor="">Postal code</label>
            <input type="number" name="" id="" />
           </div>
          
          </div>


          <div className="shipping_details">
            <label htmlFor="">Phone number</label>
            <input type="text" name="" id="" /> 
          </div>
        </div>
        <div className="shipping_details_second">

        </div>
       </div>
     </div>
     {/* <!-- end of shipping details component --> */}
     {/* <!-- single item --> */}
     <div className="content" id="goals">
       <h4>goals</h4>
       <p>
         Chambray authentic truffaut, kickstarter brunch taxidermy vape
         heirloom four dollar toast raclette shoreditch church-key.
         Poutine etsy tote bag, cred fingerstache leggings cornhole
         everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
         swag, mixtape hashtag marfa readymade direct trade man braid
         cold-pressed roof party. Small batch adaptogen coloring book
         heirloom. Letterpress food truck hammock literally hell of wolf
         beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
         banh mi salvia venmo photo booth quinoa chicharrones.
       </p>
     </div>
     {/* <!-- end of single item --> */}
       </div>
     </article>
  </div>
 )
}

export default Shopping_tab