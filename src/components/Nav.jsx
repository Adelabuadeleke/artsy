import React from 'react'
import '../css/Nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <p>artsy.</p>

      <ul>
        <NavLink to="/" className={({isActive}) =>(isActive)?'active':'toggle'}>home</NavLink> 
        <NavLink to="/marketplace" className={({isActive}) =>(isActive)?'active':'toggle'}>marketplace</NavLink> 
        <NavLink to="/auctions" className={({isActive}) =>(isActive)?'active':'toggle'}>auctions</NavLink> 
        <NavLink to="/drops" className={({isActive}) =>(isActive)?'active':'toggle'}>drop</NavLink> 
      
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