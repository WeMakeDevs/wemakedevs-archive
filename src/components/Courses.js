import React from 'react'
import '../styles/Courses.css';
import course from '../assests/course.png'

const Courses = () => {
  return (
    <div className="courses">
    <div className="courses_text">
      <h2>Boost your career with our <br /> Complete Hands On Courses</h2>
      <ul className="courses_ul">
        <li>We believe that every student, irrespective of their college or <br/> branch, can make it big. Community Classroom is an <br/> initiative built on this thought.</li>
        <li>We provide hands-on training, mentorship for FREE and have <br/> an inclusive community.</li>
        <li>Get expert guidance with career, Open Source, and <br/> internships, jobs around the world.</li>
      </ul>
      <a href="https://discord.gg/Wydusp72AB" target="_blank" rel="noreferrer">
        <button id="bt_discord">Join our Discord</button>
      </a>
    </div>
    <img className="courses_img" src={course} alt="" />
   </div>
  )
}

export default Courses