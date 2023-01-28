import React from 'react'

function Nav() {
  return (
    <nav>
      <p>artsy.</p>

      <ul>
        <li>home</li>
        <li>marketplace</li>
        <li>auctions</li>
        <li>drop</li>
      </ul>

      <div className="nav__icons">
        <img src="./public/assets/Search icon.png" alt="" />
        <img src="./public/assets/Cart icon.png" alt="" />
        <img src="./public/assets/Vector (1).png" alt="" />
      </div>
    </nav>
  )
}

export default Nav