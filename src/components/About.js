import React from 'react'
import '../styles/About.css';
import About_us from '../assets/about-us.png'
import Arrowright from "../assets/Arrowright.png";

const About = () => {
  return (
    <div id="about" className="about">
      <img className="about_img" src={About_us} alt="About" />
      <div className="about_text">
        <h2><span className="header_free">About</span> Us</h2>
        <ul className="about_ul">
          <li>We believe that every student, irrespective of their college or <br/> branch, can make it big. Community Classroom is an <br/> initiative built on this thought.</li>
          <li>We provide hands-on training, mentorship for FREE and have <br/> an inclusive community.</li>
          <li>Get expert guidance with career, Open Source, and <br/> internships, jobs around the world.</li>
        </ul>
        <a href="https://discord.io/commclassroom" target="_blank">
          <button id="bt_discord">Join our Discord <img className="arrowright" src={Arrowright} alt="arrowup" /> </button>
        </a>
      </div>
     </div>
  )
}

export default About