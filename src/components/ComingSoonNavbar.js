import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LinkedIn from '../assets/Linkedin.png'
import Twitter from '../assets/Twitter.png'
import Website from '../assets/Website.png'
import Instagram from '../assets/Instagram.png'
import Logo from '../assets/logo.png'

const ComingSoon = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='navbar_cont'>
      <div className='navbar_logo'>
       <img src={ Logo } alt="logo" />
    </div>
    <ul className={click ? 'navbar-menu active': 'navbar-menu'}>
        <li className='navbar-item'><img src={Twitter} alt="twitter" /></li>
        <li className='navbar-item'><img src={LinkedIn} alt="linkedin" /></li>
        <li className='navbar-item'><img src={Website} alt="website" /></li>
        <li className='navbar-item'><img src={Instagram} alt="instagram" /></li>
    </ul>
    
   <div className="navbar_hamburger" onClick={handleClick}>
    {click ? (<FaTimes size={30} style={{color: "black"}} />) : (<FaBars size={30} style={{color: "black"}} />)
    }
  </div>
  </div>
  )
}


export default ComingSoon