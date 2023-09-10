import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import'../css/ItemDetails.css';

function ItemDetails() {
  return (
    <div className='itemdetails'>
     <SideBar />
     <Nav />
     <div className="itemdetails_body">
      <h1>Home/ Marketplace/ Editorials/<span>Philomena ‘22</span> </h1>
      <div className="item_details">
       <div className="details_one">
        <img src="../../assets/Rectangle 300.png" alt="" />
       </div>
       <div className="details_two">
         <div className="details_title">
          <h2>Boolean Egyptian</h2>
          <p><img src="../../assets/eth_logo.png" alt="" /> 0.09</p>
        </div>
        <div className="details_cart">
         <p>Creator : <span> Ali Dawa</span></p>
         <small>Made in Italy</small>
         <h4>Total views: <span>1.7k</span> view</h4>

         <div className="counter_div"> 
          <button>-</button>
          <span className="count">1</span>
          <button>+</button>
         </div>

         <div className="cart_cta">
          <button>Add to cart <img src="" alt="" /></button>
          <img src="../../assets/heart.png" alt="" />
         </div>
        </div>

        <div className="cart_drop_down">
          <div className="drop_item">
            <p>Description</p>
            <img src="../../assets/arrow_down.png" alt="" />
          </div>

          <div className="drop_item">
            <p>Listings</p>
            <img src="../../assets/arrow_down.png" alt="" />
          </div>

          <div className="drop_item">
              <p>Status</p>
              <img src="../../assets/arrow_down.png" alt="" />
          </div>
        </div>
        </div>
      </div>

      <div className="item_detail_explore">
        <h2>Explore more from this collection</h2>

        <div className="explore_btns ">
          <div className="explore_btn_div">
            <img src="../../assets/arrow_left.png" alt="" />
          </div>
          
          <div className="explore_btn_div explore_one">
            <img src="../../assets/arrow_right.png" alt="" />
          </div>
          
        </div>
      </div>

      

     </div>
     <div className="item_detail_slider">
        <div className="explore_page_item">
          <div className="heart_div">
            <img src="../../assets/heart_2.png" alt="" />
          </div>

          <div className="explore_img">
            <img src="../../assets/Rectangle 65.png" alt="" />
          </div>

          <div className="explore_text">
            <p>Sassy</p>
            <div className="text_eth">
              <img src="../../assets/eth_logo.png" alt="" />
              <p>3.02</p>
            </div>
          </div>
        </div>

        <div className="explore_page_item">
          <div className="heart_div">
            <img src="../../assets/heart_2.png" alt="" />
          </div>

          <div className="explore_img">
            <img src="../../assets/Rectangle 66.png" alt="" />
          </div>

          <div className="explore_text">
            <p>Escape</p>
            <div className="text_eth">
              <img src="../../assets/eth_logo.png" alt="" />
              <p>0.03</p>
            </div>
          </div>
        </div>

        <div className="explore_page_item">
          <div className="heart_div">
            <img src="../../assets/heart_2.png" alt="" />
          </div>

          <div className="explore_img">
            <img src="../../assets/Rectangle 48.png" alt="" />
          </div>

          <div className="explore_text">
            <p>Sassy</p>
            <div className="text_eth">
              <img src="../../assets/eth_logo.png" alt="" />
              <p>0.03</p>
            </div>
          </div>
        </div>

        <div className="explore_page_item">
          <div className="heart_div">
            <img src="../../assets/heart_2.png" alt="" />
          </div>

          <div className="explore_img">
            <img src="../../assets/Rectangle 65.png" alt="" />
          </div>

          <div className="explore_text">
            <p>Sassy</p>
            <div className="text_eth">
              <img src="../../assets/eth_logo.png" alt="" />
              <p>0.03</p>
            </div>
          </div>
        </div>
      </div>

      <div className="explore_all">
        <button className='explore_all_cta'>
          Explore all
        </button>
      </div>
    </div>
  )
}

export default ItemDetails