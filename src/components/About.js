import React from 'react'
import '../styles/About.css';
import About_us from '../assets/about-us.png'

const About = () => {
  return (
    <div className="about">
      <img className="about_img" src={About_us} alt="About" />
      <div className="about_text">
        <h2>About Us</h2>
        <ul className="about_ul">
          <li>We believe that every student, irrespective of their college or <br/> branch, can make it big. Community Classroom is an <br/> initiative built on this thought.</li>
          <li>We provide hands-on training, mentorship for FREE and have <br/> an inclusive community.</li>
          <li>Get expert guidance with career, Open Source, and <br/> internships, jobs around the world.</li>
        </ul>
        <a href="https://discord.gg/Wydusp72AB" target="_blank" rel="noreferrer">
          <button id="bt_discord">Join our Discord</button>
        </a>
      </div>
     </div>
  )
}

export default About