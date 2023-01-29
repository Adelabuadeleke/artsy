import React from 'react'
import '../css/Nav.css'

function Nav() {
  return (
    <nav>
      <p>artsy.</p>

      <ul>
        <li className='active'>home</li>
        <li>marketplace</li>
        <li>auctions</li>
        <li>drop</li>
      </ul>

      <div className="nav__icons">
        <img src="../../assets/Vector (3).png" alt="" />
        <img src="../../assets/Vector (1).png" alt="" />
        <img src="../../assets/Vector (2).png" alt="" />
      </div>
    </nav>
  )
}

export default Nav