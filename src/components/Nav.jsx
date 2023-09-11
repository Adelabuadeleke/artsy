import React, { useEffect } from 'react';
import '../css/Nav.css';
import '../css/SideBar.css';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';


function Nav() {
  useEffect(()=>{
    const sidebar = document.querySelector('.sidebar')
    const menuBtn = document.querySelector('.menu')
    const closeBtn = document.querySelector('.sidebar_cancel')

    menuBtn.addEventListener('click', ()=>{
      sidebar.classList.add('show_toggle')
    })

    closeBtn.addEventListener('click', ()=> {
      sidebar.classList.remove('show_toggle')
    })
  })
  return (
    <div className="nav">
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
    <aside className="sidebar">
      <div className="sidebar_top">
        <h2>artsy.</h2>
        <ClearOutlinedIcon className='sidebar_cancel'/>
      </div>

      <div className="sidebar_list">
        <a href="/">
          <p>Home</p>
        </a>

        <a href="/auctions">
          <p>Auctions</p>
        </a>

        <a href="/marketplace">
          <p>Marketplace</p>
        </a>

        <a href="/drops">
          <p>Drops</p>
        </a>

      </div>

      <div className="sidebar_chat">
        <img src="../../assets/chat.svg" alt="" />
      </div>
   </aside>
  </div>
   
  )
}

export default Nav