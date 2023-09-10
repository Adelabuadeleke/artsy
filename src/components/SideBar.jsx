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
   </aside>
  )
}

export default SideBar