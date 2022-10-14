import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import Youtube from '../../assets/youtube.png'
import '../../styles/navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='navbar_cont'>
      <div className='navbar_logo'>
       <img src={ Logo } alt="logo" />
    </div>
    <ul className={click ? 'navbar-menu active': 'navbar-menu'}>
        <li className='navbar-item'><a href="/">Home</a></li>
        <li className='navbar-item'><a href="/">Courses</a></li>
        <li className='navbar-item'><a href="/">Podcasts</a></li>
        <li className='navbar-item'><a href="/">Events</a></li>
        <li className='navbar-item'><a href="/">Roadmaps</a></li>
        <li className='navbar-item'><a href="/">About</a></li>
        <li className='navbar-item'><button className="navbar_youtube"> Youtube <img src={Youtube} alt="youtube" /> </button></li>
        
    </ul>
    
   
    <div className="navbar_hamburger" onClick={handleClick}>
    {click ? (<FaTimes size={30} style={{color: "black"}} />) : (<FaBars size={30} style={{color: "black"}} />)
    }
  </div>
  </div>
  )
}

export default Navbar