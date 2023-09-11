import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import '../css/Thankyou.css';
// import {toggle} from '../func/sidebarToggle';

function Thank_you() {
  // toggle()
  useEffect(()=>{
    
  })
  return (
    <div className='thank_you'>
      <Nav />
      <div className="thank_you_body">
        <img src="../../assets/Thankyou/Woman get online delivery.png" alt="" />
        <h2>Hey Celestina, thank you for your purchase. </h2>
        <small>You are amazing. Cheers to being <span>ARTSY!</span> <img src="../../assets/Thankyou/Illustration.png" alt="" /> </small>
      </div>
    </div>
  )
}

export default Thank_you