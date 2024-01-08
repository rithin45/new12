import React from 'react'
import './Navbar.css'
import navprofileIcon from '../Assets/nav-profile.svg'
import logo from '../Assets/log.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navlog">
      {/* <img src={logo} alt="logo" /> */}
        <p>G-Mart</p>
        </div>
      {/* <img src={navprofileIcon} className='nav-profile' alt="" /> */}
    </div>
  )
}

export default Navbar
