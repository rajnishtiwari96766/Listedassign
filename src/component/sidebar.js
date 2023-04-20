import React from 'react'

function Sidebar() {
  return (
      <div className='sidebar'>
    <div className='sidebar_top'>
        Board.
   </div>

    <div className='sidebar_mid'>
    <p><i class="fa-solid fa-chart-pie"></i>    Dashboard</p>
    <p><i class="fa-solid fa-tags"></i>   Transactions</p>
    <p><i class="fa-solid fa-calendar"></i>      Schedules</p>
    <p> <i className="fa-solid fa-user"></i>  Users</p>
    <p><i className="fa-solid fa-gear"></i>   settings</p>
    </div>

    <div className='sidebar_bottom'>
    <p>Help</p>
    <p>Contact us</p>
    </div>

    </div>
  )
}

export default Sidebar;