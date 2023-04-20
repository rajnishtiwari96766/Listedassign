import React from 'react'
import '../style.css'
function Navbar() {
  return (
      <div>

    <div className='navbar'>
        <div className='nav1'>
        <h2>Dashboard</h2>
        </div>

        <div className='nav2'>
        <input type={"text"} placeholder='Search'></input>
        &nbsp;
        &nbsp;
        &nbsp;
    

        <p><i class="fa-regular fa-bell"></i></p>
        &nbsp;
        &nbsp;
        &nbsp;
        <p><i class="fa-solid fa-circle-user"></i></p>
        </div>

    </div>
      </div>
  )
}

export default Navbar