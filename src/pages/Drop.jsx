import React from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import'../css/Drop.css'

function Drop() {
 return (
  <div className='drop'>
    <SideBar />
   <Nav />
   <div className="drop_body">
    <h2>Home/ Auctions/ Live bid/ <span>Drop</span></h2>
    <div className="drop_intro">
      <h1>Upcoming drops</h1>
       <p>Turn on notifications so that no drops will miss you.</p>
       <button className="notify">
        Notify me
       </button>
    </div>
    <div className="drop_items">

     {/* drop item start */}
     <div className="drops_item">
      <div className="item_first" style={{backgroundImage:`url("../assets/Drops/Rectangle 82.png")`}}>
      <div className="drop_item_tag_div">
         <div className="second_tag upcoming">
            upcoming
          </div>
      </div>
       <div className="drop_timer">
        <small>Time remaining</small>
        <div className="time_details">
         <p>06  hrs : 45 min : 22 s</p>
         <button>Join</button>
        </div>
       </div>
      </div> 
      <div className="item_second">
       <div className="second_tag upcoming">
        upcoming
       </div>

       <p>November 21 at 11 am WAT</p>

       <h2>Eyo : Eko For Show</h2>

       <small>
        Lorem ipsum dolor sit amet consectetur. 
        Amet odio a aenean quis vitae tempus. 
        Sed nunc tempus aliquet lectus ut vulputate.
       </small>

       <h2 className='creator'>Creator : <span>Aliya Minat</span></h2>

       <a href="">Get Notified</a>
      </div>
     </div>
     {/* drop item ends */}


      {/* drop item start */}
     <div className="drops_item">
      <div className="item_first" style={{backgroundImage:`url("../assets/Drops/Rectangle 84.png")`}}>
        <div className="drop_item_tag_div">
          <div className="second_tag live_drop">
            live now
          </div>
        </div>
       <div className="drop_timer">
        <small>Time remaining</small>
        <div className="time_details">
         <p>06  hrs : 45 min : 22 s</p>
         <button>Join</button>
        </div>
       </div>
      </div> 
      <div className="item_second">
       <div className="second_tag live_drop">
        live now
       </div>

       <p>November 21 at 11 am WAT</p>

       <h2>Ginger Suburbs</h2>

       <small>
        Lorem ipsum dolor sit amet consectetur. 
        Amet odio a aenean quis vitae tempus. 
        Sed nunc tempus aliquet lectus ut vulputate.
       </small>

       <h2 className='creator'>Creator : <span>Aliya Minat</span></h2>

       <a href="">Join Now</a>
      </div>
     </div>
     {/* drop item ends */}


      {/* drop item start */}
     <div className="drops_item">
      <div className="item_first" style={{backgroundImage:`url("../assets/Drops/Rectangle 87.png")`}}>
        <div className="drop_item_tag_div">
          <div className="second_tag ended">
            ended
          </div>
        </div>
       <div className="drop_timer">
        <small>Time remaining</small>
        <div className="time_details">
         <p>06  hrs : 45 min : 22 s</p>
         <button>Join</button>
        </div>
       </div>
      </div> 
      <div className="item_second">
       <div className="second_tag ended">
        ended
       </div>

       <p>November 21 at 11 am WAT</p>

       <h2>Sink</h2>

       <small>
        Lorem ipsum dolor sit amet consectetur. 
        Amet odio a aenean quis vitae tempus. 
        Sed nunc tempus aliquet lectus ut vulputate.
       </small>

       <h2 className='creator'>Creator : <span>Aliya Minat</span></h2>

       <a href="">View</a>
      </div>
     </div>
     {/* drop item ends */}


      {/* drop item start */}
     <div className="drops_item">
      <div className="item_first" style={{backgroundImage:`url("../assets/Drops/Rectangle 232.png")`}}>
        <div className="drop_item_tag_div">
          <div className="second_tag ended">
            ended
          </div>
        </div>
       <div className="drop_timer">
        <small>Time remaining</small>
        <div className="time_details">
         <p>06  hrs : 45 min : 22 s</p>
         <button>Join</button>
        </div>
       </div>
      </div> 
      <div className="item_second">
       <div className="second_tag ended">
        ended
       </div>

       <p>November 21 at 11 am WAT</p>

       <h2>Warped ‘99</h2>

       <small>
        Lorem ipsum dolor sit amet consectetur. 
        Amet odio a aenean quis vitae tempus. 
        Sed nunc tempus aliquet lectus ut vulputate.
       </small>

       <h2 className='creator'>Creator : <span>Aliya Minat</span></h2>

       <a href="">View</a>
      </div>
     </div>
     {/* drop item ends */}

    </div>
    
    <div className="see_more_drops">
     <button>See more</button>
    </div>
   </div>
   <section className="newsletter">
      <div className="newsletter_inner">
        <h2>NewsLetter</h2>
        <p>Subscribe to get daily updates on new drops & exciting deals </p>
        <div className="newsletter_input">
          <input type="email" name="" id="" placeholder='Enter your Email'/>
          <button>Subscribe</button>
        </div>
      </div>
     
    </section>
    <footer>
      <div className="footer__inner">
        <div className="footer_inner_one">
          <h1>
            ARTSY.
          </h1>
        </div>

        <div className="footer_inner_two">
          <p>Home</p>
          <p>Marketplace</p>
          <p>Auctions</p>
          <p>Drops</p>
        </div>

        <div className="footer_inner_three">
          <p>Blog</p>
          <p>Wallets</p>
          <p>Rates</p>
          <p>High bids</p>
        </div>

        <div className="footer_inner_four">
          <p> <img src="../../assets/email_icon.png" alt="" /> artsystudios@gmail.com</p>
          <p> <img src="../../assets/location_icon.png" alt="" /> Lagos, Nigeria</p>
        </div>
      </div>
      <div className="footer_end">
        <p>Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
 )
}

export default Drop