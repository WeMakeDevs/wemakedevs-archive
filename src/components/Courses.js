import React from 'react'
import '../styles/Courses.css';
import course from '../assets/course.png'

const Courses = () => {
  return (
    <div className="courses">
    <div className="courses_text">
      <h2>Boost your career with our </h2>
      <h2>Complete Hands On Courses</h2>
      <ul className="courses_ul">
        <li>All courses are FREE while never compromising on quality.</li>
        <li>We cover every topic in detail with a hands-on approach and <br /> mentor you to stand out to get opportunities by breaking all <br /> the barriers.</li>
        <li>Explore a wide range of courses including Data Structures & <br /> Algorithms, Web Development, DevOps, Machine Learning, <br />  and more!</li>
      </ul>
      <a href="" target="_blank" rel="noreferrer">
        <button id="bt_discord">Explore Courses</button>
      </a>
    </div>
    <img className="courses_img" src={course} alt="course" />
   </div>
  )
}

export default Courses