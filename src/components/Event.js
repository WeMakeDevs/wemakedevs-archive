import React from 'react'
import event from '../assests/event.png'
import '../styles/Event.css'

const Event = () => {
  return (
    <div className="event">
      <img className="event_img" src={event} alt="" />
      <div className="event_text">
        <h2>Join our free and exciting events</h2>
        <ul className="event_ul">
          <li>All of our events are completely free and open for everyone. <br/> Fun-filled events with no compromise on quality.</li>
          <li>Events conducted will help develop various skills of students <br /> in co-curricular activities and to expose them to the current <br /> trends in the technical and professional fields.</li>
          <li>Explore the plethora of events & have the opportunity to grab <br /> amazing prizes & goodies!</li>
        </ul>
        <a href="" target="_blank" rel="noreferrer">
          <button id="bt_discord">Explore our Events</button>
        </a>
      </div>
     </div>
  )
}

export default Event