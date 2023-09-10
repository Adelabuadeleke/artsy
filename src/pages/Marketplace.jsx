import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import'../css/Marketplace.css';

function Marketplace() {
  return (
    <div className='marketplace'>
     <SideBar />
     <Nav />
     <div className="marketplace_body">
      <div className="marketplace_one">
        <div className="marketplace_one_body">
          <div className="search_outter">
            <img src='../../assets/search_icon.png' alt='' />
            <input type="text" placeholder='Search' />
          </div> 
          
          <div className="marketplace_filter">
            <div className="marketplace_filter_top">
              <img src="../../assets/filter_icon.png" alt="" />
              <p>Filter</p>
            </div>
            <div className="marketplace_filter_bottom">
              <div className="filter_underline">

              </div>
            </div>
            
          </div>

          <div className="by_category">
            <div className="by_category_inner">
              <p>By category</p>
              <img src="../../assets/arrow_top.png" alt="" />
            </div>
            
            <div className="category_options">
              <div className="category_item">
               <input type="checkbox" name="category" id=""  value='Editorials'/><label>Editorials</label>
              </div>
              <div className="category_item">
                <input type="checkbox" name="category" id=""  value='Fashion'/><label>Fashion</label>
              </div>
              <div className="category_item">
                <input type="checkbox" name="category" id=""  value='Optics'/><label>Optics</label>
              </div>
              <div className="category_item">
               <input type="checkbox" name="category" id=""  value='Art&Museum'/><label>Art & Museum</label>
              </div>
              <div className="category_item">
               <input type="checkbox" name="category" id=""  value='Nature'/><label>Nature</label>
              </div>
            </div>
          </div>

          <div className="by_price">
            <div className="by_category_inner">
              <p>By price</p>
              <img src="../../assets/arrow_top.png" alt="" />
            </div>
            <div className="by_price_body">
              <p>$100.00 - $150.00</p>
              <input type="range" name="" id="" />
            </div>
          </div>

          <div className="by_artist">
            <div className="by_category_inner">
                <p>By artist</p>
                <img src="../../assets/arrow_top.png" alt="" />
            </div>

            <div className="by_artist_body">
              <h2>All</h2>
              <p>Below $100.00</p>
              <p>$100.00 - $150.00</p>
              <p>$150.00 - $200.00</p>
              <p>Above $200.00</p>
            </div>
          </div>

          <div className="by_colllection_year">
              <div className="by_category_inner">
                <p>Collection year</p>
                <img src="../../assets/arrow_down.png" alt="" />
            </div>
          </div>
        </div>

       

       
       
      </div>

      <div className="marketplace_two">
       <div className="market_two_body">
          <div className="result_sort">
            <p>See 1-6 of 15 results</p>

            <select name="" id="">
              <option value="">Sort by</option>
              <option value="price">Price</option>
              <option value="new">New</option>
            </select>
          </div>

          <div className="marketplace_heading_title">
            <h2>Home/ <span>Marketplace</span> </h2>
            <p>Showing 1-5  of 18 results</p>
          </div>

          <div className="filter_mobile">
            <select name="" id="">
              <option value="">Filters</option>
              <option value="editorials">Editorials</option>
              <option value="fashion">Fashion</option>
              <option value="optics">Optics</option>
              <option value="artsandmuseum">Arts & Museum</option>
              <option value="nature">Nature</option>
            </select>

            <select name="" id="">
              <option value="">Sort by</option>
              <option value="price">By Price</option>
              <option value="new">New</option>
            </select>
          </div>

          <div className="all_arts">
            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 251.png" alt="" />
                <div className="art_item_text">
                  <p>PHILOMENA ‘22</p>
                  <h3>$3.90</h3>
                </div>
              </div>
              
            </div>

            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 299 (4).png" alt="" />
                <p>BOOLEAN EGYPTIAN</p>
                <h3>$3.90</h3>
              </div>
              
            </div>

            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 49 (1).png" alt="" />
                <p>BLANC</p>
                <h3>$3.90</h3>
              </div>
              
            </div>


            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 53.png" alt="" />
                <p>ELLIPSIA</p>
                <h3>$3.90</h3>
              </div>
              
            </div>


            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 54.png" alt="" />
                <p>THE LAWMAKERS </p>
                <h3>$3.90</h3>
              </div>
              
            </div>


            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 50.png" alt="" />
                <p>VEIL</p>
                <h3>$3.90</h3>
              </div>
              
            </div>

            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 48.png" alt="" />
                <p>ALTERNATING</p>
                <h3>$3.90</h3>
              </div>
              
            </div>

            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 52 (5).png" alt="" />
                <p>ROSEMARY ‘22</p>
                <h3>$3.90</h3>
              </div>
              
            </div>

            <div className="art_item">
              <div className="art_item_body">
                <img src="../../assets/Rectangle 55.png" alt="" />
                <p>BEVERLY</p>
                <h3>$3.90</h3>
              </div>
              
            </div>
          </div>

          <div className="see_more">
            <button>See more</button>
          </div>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Marketplace