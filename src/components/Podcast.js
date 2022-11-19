import React from 'react'
import Podcast from '../assets/podcast.png'
import '../styles/Podcast.css'


const Event = () => {
  return (
    <div id="podcast" className="podcast">
      <div className="podcast_text">
        <h2 className="courses_title"> Open Source Cafe Podcast </h2>
        <p className="podcast_para"> 
          The Open Source Cafe, Out of Syllabus, KlassTime with Karuna, AMA session on Discord is an initiative to highlight the stories, journeys, tips & tricks of some of the amazing community leaders and members. Learn from their experiences and get mentored on your journey by folks from around the world.
        </p>
         <a href='https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr'><button className="podcast_redirect"> See all episodes </button></a>
      </div>
      
      <img className="podcast_img" src={Podcast} alt="Podcast" />
      
      
     </div>
  )
}

export default Event
