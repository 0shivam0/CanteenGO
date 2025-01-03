import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const[menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo'/>
      <ul className='navbar-menu'>
        <li className={menu==="home"?"active":""}>home</li>
        <li className={menu==="menu"?"active":""}>menu</li>
        <li className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li className={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className='navbar-right'>
        <img className="icon" src={assets.searchIcon} alt=''/>
        <div className='navbar-search-icon'>
            <img className="icon" src={assets.basket} alt='' />
            <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
