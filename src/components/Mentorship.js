import React from 'react'
import '../styles/Mentorship.css'
import mentor from '../assets/mentor.png'


const Mentorship = () => {
  return (
    <div className="mentor">
    <div className="mentor_text">
      <h2>Roadmaps & Mentorship made </h2>
      <h2>by best in the industry</h2>
      <ul className="mentor_ul">
        <li>A comprehensive answer to all of your mentoring needs, <br /> including educational materials, communities to join, <br /> opportunities, and much more.</li>
        <li>Roadmaps to help you stay on track, including those for <br /> open-source, full-stack, devrel, and more.</li>
      </ul>
      <a href="" target="_blank" rel="noreferrer">
        <button id="bt_mentor"><a href="https://github.com/commclassroom/roadmaps"></a>Explore all Roadmaps</button>
      </a>
    </div>
    <img className="mentor_img" src={mentor} alt="Mentor" />
   </div>
  )
}

export default Mentorship