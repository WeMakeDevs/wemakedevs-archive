import React from 'react'
import './Hashnode.css'
import Arrowright from '../../assets/Arrowright.png'
import ArrowUp from '../../assets/ArrowUp.png'

const Header = () => {
  return (
    <div className="course_cont_1">
        <div className="course_cont_a">
            <p className="course_cont_para">
            <span className="header_free">Blogging Challenges </span>
            by Community Classroom
            </p>
            <p className="hashnode_cont_para">
              Get a chance to win exciting prizes such as MacBooks, iPhones, iPads and more every month 🤩 
              Blogging is about being yourself and putting what you have into it.
            </p>
         </div>
         <div className="header_cont_2_b">
              <a href="https://hashnode.com/teams/invite/6832418d-abe3-456b-bb11-294ffe5c185d">
              <button className="header_cont_2_b_courses"> Write for us 
                <img src={Arrowright} className="arrowright"  alt="arrowup" /> 
              </button>
              </a>
              <a href="#tracks">
              <button className="header_cont_2_b_youtube"> Learn more
                <img src={ArrowUp} className="arrowup"  alt="arrowup" />
              </button>
              </a>
          </div>
          <div id="tracks" className="header_cont_3">
          <h3>
          Why participate in these challenges?
          </h3>
          <p>
          The motivation behind this series is to promote learning in public.
            Students will get hands on experience with new & interesting tools. Don't worry, we have got your back! We will be providing resources.
            Don't know how to create a personal brand? You have come to the right place.
            Get ready to win some swags & grand prizes.
            Four track-based blogging challenges every month. Every track will cover a variety of topics.
          </p>
          </div>
     </div>
  )
}

export default Header