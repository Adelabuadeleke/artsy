import React, { useRef, useState } from 'react';
import Nav from '../components/Nav';
import SideBar from '../components/SideBar';
import '../css/Auctions.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


function Auctions() {
 return (
  <div className='auctions'>
   <SideBar />
   <Nav />
   <div className="auctions_body">
    <h1>Home/<span>Auctions</span>  </h1>
    <h2>Here’s an overview of products actively on auction, explore!</h2>

    <div className="swiper_div">
      <Swiper
        // slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'  >
          <div className="outer" style={{backgroundImage:`url("../assets/Auctions/Rectangle 247.png")`}}>
            <div className="timer">
              <span className="hr">6</span>hr : <span className="min">40</span>mins : <span className="sec">15</span>s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide' >
          <div className="outer" style={{backgroundImage:`url("../assets/Auctions/Rectangle 245.png")`}}>
            <div className="timer">
              <span className="hr">6</span>hr : <span className="min">40</span>mins : <span className="sec">15</span>s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide' >
          <div className="outer" style={{backgroundImage:`url("../assets/Auctions/Rectangle 247.png")`}}>
            <div className="timer">
              <span className="hr">6</span>hr : <span className="min">40</span>mins : <span className="sec">15</span>s
            </div>
          </div>     
        </SwiperSlide>
        <SwiperSlide className='slide' >
          <div className="outer" style={{backgroundImage:`url("../assets/Auctions/Rectangle 245.png")`}}>
            <div className="timer">
              <span className="hr">6</span>hr : <span className="min">40</span>mins : <span className="sec">15</span>s
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide' >
          <div className="outer" style={{backgroundImage:`url("../assets/Auctions/Rectangle 247.png")`}}>
            <div className="timer">
              <span className="hr">6</span>hr : <span className="min">40</span>mins : <span className="sec">15</span>s
            </div>
          </div>
        </SwiperSlide >
      </Swiper>
      <div className="swiper-custom-pagination"/>
    </div>

    <h2 className='top-bids'>Top bids from popular creators</h2>
    
    <div className="auction_top_bids">
      <div className="top_bid_item">
        <div className="top_bid_display">
          <div className="top_bid_heart">
            <img src="../assets/Auctions/auction_heart.png" alt="" />
          </div>
          <div className="top_bid_img">
            <img src="../assets/Auctions/Rectangle 57.png" alt="" />
          </div>
          <div className="top_bid_title">
            <h2>Out of the box</h2>
          </div>
        </div>
        <div className="top_bid_texts">
          <p>Creator <span> : Dan Murray</span></p>
          <p>Date <span> : 12/08/2022</span></p>
          <p>Highest Bid<span>: 0.57</span> <span>ETH </span> </p>

          <div className="current_bid">
            <div className="current_bid_one">
              <div className="current_bid_text">
                Current bid
              </div>
              <div className="current_bid_eth">
                0.987 <span>ETH</span>
              </div>
            </div>
            <div className="current_bid_two">
             <button>Place bid</button>
            </div>
          </div>
        </div>
      </div>

       <div className="top_bid_item">
        <div className="top_bid_display">
          <div className="top_bid_heart">
            <img src="../assets/Auctions/auction_heart_2.png" alt="" />
          </div>
          <div className="top_bid_img">
            <img src="../assets/Auctions/Rectangle 58.png" alt="" />
          </div>
          <div className="top_bid_title">
            <h2>Falling apart</h2>
          </div>
        </div>
        <div className="top_bid_texts">
          <p>Creator <span> : Jacob Banks</span></p>
          <p>Date <span> : 12/08/2022</span></p>
          <p>Highest Bid<span>: 0.34</span> <span>ETH </span> </p>

          <div className="current_bid">
            <div className="current_bid_one">
              <div className="current_bid_text">
                Current bid
              </div>
              <div className="current_bid_eth">
                0.99 <span>ETH</span>
              </div>
            </div>
            <div className="current_bid_two">
             <button>Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>

   </div>
  </div>
)
}

export default Auctions