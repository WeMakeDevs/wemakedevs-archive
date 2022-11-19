import React from 'react'
import '../styles/Courses.css';
import course from '../assets/course.png'
import Arrowright from "../assets/Arrowright.png";
import {Link} from 'react-router-dom'

const Courses = () => {
  return (
    <div id="course" className="courses">
    <div className="courses_text">
      <h2 className="courses_title">Boost your career with </h2>
      <h2 className="courses_title"><span className="header_free">Hands On Courses</span></h2>
      <ul className="courses_ul">
        <li>All courses are FREE while never compromising on quality.</li>
        <li>We cover every topic in detail with a hands-on approach and <br /> mentor you to stand out to get opportunities by breaking all <br /> the barriers.</li>
        <li>Explore a wide range of courses including Data Structures & <br /> Algorithms, Web Development, DevOps, Machine Learning, <br />  and more!</li>
      </ul>
      <Link to="/course">
        <button id="bt_discord">Explore Courses <img className="arrowright" src={Arrowright} alt="arrowup" /></button>
      </Link>
    </div>
    <img className="courses_img" src={course} alt="course" />
   </div>
  )
}

export default Courses
