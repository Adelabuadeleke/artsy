import React from 'react'

function Shopping_cart() {
  return (
      <div class="content active" id="shopping_cart">
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
                 <button className="checkout">Proceed to checkout</button>
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
  )
}

export default Shopping_cart