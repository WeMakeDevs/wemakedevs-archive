import React from 'react'
import event from '../assets/event.png'
import '../styles/Event.css'
import Arrowright from "../assets/Arrowright.png";
import {Link} from 'react-router-dom'

const Event = () => {
  return (
    <div id="event" className="event">
      <img className="event_img" src={event} alt="" />
      <div className="event_text">
        <h2 className="courses_title">Join our <span className="header_free">free and exciting</span> events</h2>
        <ul className="event_ul">
          <li>All of our events are completely free and open for everyone. <br/> Fun-filled events with no compromise on quality.</li>
          <li>Events conducted will help develop various skills of students <br /> in co-curricular activities and to expose them to the current <br /> trends in the technical and professional fields.</li>
          <li>Explore the plethora of events & have the opportunity to grab <br /> amazing prizes & goodies!</li>
        </ul>
        <Link to="/event">
          <button id="bt_discord">Explore our Events <img className="arrowright" src={Arrowright} alt="arrowup" /></button>
        </Link>
      </div>
     </div>
  )
}

export default Event
