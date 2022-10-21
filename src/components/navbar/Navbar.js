import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import Youtube from '../../assets/youtube.png'
import '../../styles/navbar.css'


import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <div className='navbar_cont'>
      <div className='navbar_logo'>
         <img className='nabar_logo_1' src={ Logo } alt="logo" />
      </div>
    <ul className={click ? 'navbar-menu active': 'navbar-menu'}>
        <li className='navbar-item'><a href="/">Home</a></li>
       

        <li className='navbar-item'><a href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr">Podcasts</a></li>
        <li className='navbar-item'><a href="/">Events</a></li>
        <li className='navbar-item'><a href="https://github.com/commclassroom/roadmaps">Roadmaps</a></li>
        <li className='navbar-item'><a href="/">About</a></li>
        <li className='navbar-item'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <h1>Courses</h1>
              </Dropdown.Toggle>
              

              <Dropdown.Menu>
                <Dropdown.Item href="https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ">DSA + JAVA + Interview Preparation</Dropdown.Item> 
                <br/>
                <Dropdown.Item href="https://www.youtube.com/watch?v=ZbG0c87wcM8&list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak"> DevOps</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
        </li>

        <a className="navbar_youtube_1" href="https://www.youtube.com/c/KunalKushwaha"><button className="navbar_youtube"> Youtube <img src={Youtube} alt="youtube" /> </button>
       </a>
     </ul>
        <div className="navbar_hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={30} style={{color: "black"}} />) : (<FaBars size={30} style={{color: "black"}} />)
            }
        </div>

        <courseList/>
     </div>
  )
}

export default Navbar
