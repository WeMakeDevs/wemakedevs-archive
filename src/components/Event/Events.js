import React from 'react'
import './Events.css'
import events_sema from '../../assets/events_sema.png'
import events_hashnode from '../../assets/events_hashnode.png'
import events_coding from '../../assets/events_coding.png'
import events_kubescape from '../../assets/events_kubescape.png'

const Events = () => {
  return (
    <>
    <div className="events">
    <div className="events_cont_1">
    <div className="events_cont_a">
        <p className="events_cont_para">
        Events that inspire
        </p>
        <p className="events_cont_para1">
        Explore events in various domains to upskill yourself, network with industry experts, and <br /> win amazing prizes by showcasing your knowledge.
        </p>
    </div>
  </div>
  </div>
<div className="events_cont_2">
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={events_sema} />
    <p className="events_cont_2_card_1_head">🟢 On-Going </p>
    <p className="events_cont_2_card_1_heading"> Sema mentorship series </p>
    <p className="events_cont_2_card_1_para_1"> 
    Learn how to utilise open source with some of the best practices, networking, resume tips, and more!
    </p>
    <p className="events_cont_2_card_1_date">2022</p>
 </div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={events_hashnode} />
    <p className="events_cont_2_card_1_head">🟢 On-Going </p>
    <p className="events_cont_2_card_1_heading">Hashnode Blogging Challenges </p>
    <p className="events_cont_2_card_1_para_1">
    Build your personal brand via theme-based blogging & win amazing prizes every week!
    </p>
    <p className="events_cont_2_card_1_date">Monthly</p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={events_coding} />
    <p className="events_cont_2_card_1_head1">🔴 Completed </p>
    <p className="events_cont_2_card_1_heading">Practice Your Coding Skills with Wilco </p>
    <p className="events_cont_2_card_1_para_1">
    Join Wilco to practice and acquire new dev skills in a “flight simulator”. Complete Wilco quests during August to win awesome prizes!
  </p>
  <p className="events_cont_2_card_1_date">5Sep-15Sep 2022</p>
</div>
<div className="events_cont_2_card">
    <img className="events_cont_2_card_1" src={events_kubescape} />
    <p className="events_cont_2_card_1_head1">🔴 Completed </p>
    <p className="events_cont_2_card_1_heading"> Open Source Fest with Kubescape</p>
    <p className="events_cont_2_card_1_para_1">
    The Open Source Fest with Kubescape where you’ll get to contribute to real-world open source projects, get mentored, build your profile, enhance your skills and much more.
    </p>
    <p className="events_cont_2_card_1_date">Aug 2022</p>
</div>
</div>
</>
  )
}

export default Events