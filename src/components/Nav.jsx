import React from 'react'
import '../css/Nav.css'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Nav() {
  return (
    <nav>
      <div className="mobile_icon">
        <MenuIcon  className='menu'/>
      </div>
      <p>artsy.</p>

      <ul>
        <NavLink to="/" className={({isActive}) =>(isActive)?'active':'toggle'}>home</NavLink> 
        <NavLink to="/marketplace" className={({isActive}) =>(isActive)?'active':'toggle'}>marketplace</NavLink> 
        <NavLink to="/auctions" className={({isActive}) =>(isActive)?'active':'toggle'}>auctions</NavLink> 
        <NavLink to="/drops" className={({isActive}) =>(isActive)?'active':'toggle'}>drop</NavLink> 
      
      </ul>

      <div className="nav__icons">
        <SearchIcon className='search'/>
        <ShoppingCartOutlinedIcon className='cart'/>
        <NotificationsNoneIcon className='bell' />
      </div>
    </nav>
  )
}

export default Nav