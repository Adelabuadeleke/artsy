import React from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import '../css/Thankyou.css'

function Thank_you() {
  return (
    <div className='thank_you'>
      <SideBar />
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