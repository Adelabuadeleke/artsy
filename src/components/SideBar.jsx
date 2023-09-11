import React from 'react';
import '../css/SideBar.css';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function SideBar() {
  return (
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
   </aside>
  )
}

export default SideBar