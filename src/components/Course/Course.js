import React from 'react'
import './course.css'
import Learning from '../../assets/Learning.png'
import Notes from '../../assets/Notes.png'
import Assignment from '../../assets/Assignment.png'
import DoubtSupport from '../../assets/DoubtSupport.png'
import Guidance from '../../assets/Guidance.png'
import Projects from '../../assets/Project.png'
import Dsa from '../../assets/DSA.png'
import Github from '../../assets/Github.png'
import MachineLearning from '../../assets/MachineLearning.png'
import SystemDesign from '../../assets/SystemDesign.png'
import FullStack from '../../assets/FullStack.png'
import DevOps from '../../assets/DevOps.png'
import Python from '../../assets/Python.png'

const course = () => {
  return (
    <>
    <div className="course_cont_1">
        <div className="course_cont_a">
            <p className="course_cont_para">
            Boost your career with our free hands-on courses.
            </p>
        </div>
        <div className="course_cont_b">
          <div className="course_cont_b_1">
              <div className="course_cont_b_1_frame_1">
                  <img  src={Learning} alt="Learning" /> 
                  <p> Structured Learning </p>
              </div>
              <div className="course_cont_b_1_frame_2">
                  <img src={Notes} alt="Learning" /> 
                  <p> Notes </p>
                </div>
              <div className="course_cont_b_1_frame_3">
                  <img src={Assignment} alt="Learning" /> 
                  <p> Assignments </p>
              </div>
           </div>
          <div className="course_cont_b_2">
              <div className="course_cont_b_1_frame_4">
                <img src={DoubtSupport} alt="Learning" /> 
                <p> Doubt Support </p>
               </div>
              <div className="course_cont_b_1_frame_5">
                <img  src={Guidance} alt="Learning" /> 
                <p> Guidance </p>
              </div>
              <div className="course_cont_b_1_frame_6">
                <img  src={Projects} alt="Learning" /> 
                 <p> Projects </p>
              </div>
          </div>
      </div>
      </div>
    <div className="course_cont_2">
    <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={Dsa} />
        <p className="course_cont_2_card_1_heading"> Data Structures and Algorithm in Java </p>
        <p className="course_cont_2_card_1_para_1"> 
        Got no programming knowledge ? No worries. Become an expert at solving simple to complex LeetCode problems with ease and become interview-ready.
        </p>
     </div>
   <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={Github} />
        <p className="course_cont_2_card_1_heading">Develop your knowledge of Git and GitHub. </p>
        <p className="course_cont_2_card_1_para_1">
        Start out your exploration of open source with the comprehensive Git & GitHub tutorial, which covers both basic and advanced concepts.
        </p>
    </div>
  <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={DevOps} />
        <p className="course_cont_2_card_1_heading">Beginner to Advanced DevOps </p>
        <p className="course_cont_2_card_1_para_1">
          DevOps engineer is without a doubt the most in-demand position on the market right now, particularly with the rise of high-paying remote possibilities. Learn DevOps from scratch here.
      </p>
  </div>
  <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={FullStack} />
        <p className="course_cont_2_card_1_heading"> Web Development</p>
        <p className="course_cont_2_card_1_para_1">
          Build credible, work-like projects to gain proficiency in React, NodeJS, MongoDB, Javascript, and other technologies to launch a successful career as a developer.
        </p>
  </div>
   <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={Python} />
        <p className="course_cont_2_card_1_heading"> Learn Python from A to Z </p>
        <p className="course_cont_2_card_1_para_1">
          Get introduced to all of the Python developer skills in this course and construct practical projects along the way to add to your portfolio.
        </p>
  </div>
  <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={MachineLearning} />
        <p className="course_cont_2_card_1_heading"> Master Machine Learning </p>
        <p className="course_cont_2_card_1_para_1">
            Become the cool kid in town. Without any prerequisites, master Machine Learning from scratch to an advanced level.
        </p>
  </div>
  <div className="course_cont_2_card">
        <img className="course_cont_2_card_1" src={SystemDesign} />
        <p className="course_cont_2_card_1_heading"> System Design Fundamentals </p>
        <p className="course_cont_2_card_1_para_1">
            Your ability to develop scalable systems will improve as an engineer. Prepare for system design interviews by learning how to build complex systems.
       </p>
  </div>
  </div>
  </>
)
}

export default course