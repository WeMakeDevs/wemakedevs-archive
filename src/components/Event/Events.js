import React from 'react'
import './Events.css'
import events_sema from '../../assets/events_sema.png'

const Events = () => {
  return (
    <div className="events">
    <div className="events_cont_1">
    <div className="events_cont_a">
        <p className="events_cont_para">
        Events that inspire
        </p>
        <p>
        Explore events in various domains to upskill yourself, network with industry experts, and <br /> win amazing prizes by showcasing your knowledge.
        </p>
    </div>
  </div>
  </div>
<div className="events_cont_2">
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={events_sema} />
    <p className="events_cont_2_card_1_heading"> Data Structures and Algorithm in Java </p>
    <p className="events_cont_2_card_1_para_1"> 
    Got no programming knowledge ? No worries. Become an expert at solving simple to complex LeetCode problems with ease and become interview-ready.
    </p>
 </div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={Github} />
    <p className="events_cont_2_card_1_heading">Develop your knowledge of Git and GitHub. </p>
    <p className="events_cont_2_card_1_para_1">
    Start out your exploration of open source with the comprehensive Git & GitHub tutorial, which covers both basic and advanced concepts.
    </p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={DevOps} />
    <p className="events_cont_2_card_1_heading">Beginner to Advanced DevOps </p>
    <p className="events_cont_2_card_1_para_1">
      DevOps engineer is without a doubt the most in-demand position on the market right now, particularly with the rise of high-paying remote possibilities. Learn DevOps from scratch here.
  </p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={FullStack} />
    <p className="events_cont_2_card_1_heading"> Web Development</p>
    <p className="events_cont_2_card_1_para_1">
      Build credible, work-like projects to gain proficiency in React, NodeJS, MongoDB, Javascript, and other technologies to launch a successful career as a developer.
    </p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={Python} />
    <p className="events_cont_2_card_1_heading"> Learn Python from A to Z </p>
    <p className="events_cont_2_card_1_para_1">
      Get introduced to all of the Python developer skills in this events and construct practical projects along the way to add to your portfolio.
    </p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={MachineLearning} />
    <p className="events_cont_2_card_1_heading"> Master Machine Learning </p>
    <p className="events_cont_2_card_1_para_1">
        Become the cool kid in town. Without any prerequisites, master Machine Learning from scratch to an advanced level.
    </p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={SystemDesign} />
    <p className="events_cont_2_card_1_heading"> System Design Fundamentals </p>
    <p className="events_cont_2_card_1_para_1">
        Your ability to develop scalable systems will improve as an engineer. Prepare for system design interviews by learning how to build complex systems.
   </p>
</div>
</div></div>
  )
}

export default Events