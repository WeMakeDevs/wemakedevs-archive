import React from 'react'
import '../styles/Mentorship.css';
import mentor from '../assets/mentor.png'
import Arrowright from "../assets/Arrowright.png";
import {Link} from 'react-router-dom'

const Mentorship = () => {
  return (
    <div id="roadmap" className="mentor">
    <div className="mentor_text">
      <h2><span className="header_free">Mentorship</span></h2>
      <h2 className="courses_title">by best in the industry</h2>
      <ul className="mentor_ul">
        <li>A comprehensive answer to all of your mentoring needs, <br /> including educational materials, communities to join, <br /> opportunities, and much more.</li>
        <li>Roadmaps to help you stay on track, including those for <br /> open-source, full-stack, devrel, and more.</li>
      </ul>
      <Link to="/commclassroom/roadmaps">
        <button id="bt_mentor">Explore all Roadmaps <img className="arrowright" src={Arrowright} alt="arrowup" /></button>
      </Link>
    </div>
    <img className="mentor_img" src={mentor} alt="Mentor" />
   </div>
  )
}

export default Mentorship
