import React from 'react'
import Podcast from '../assets/podcast.png'
import '../styles/Podcast.css'
import Right from '../assets/Rightarrowblack.png'

const Event = () => {
  return (
    <div className="podcast">
      
      <div className="podcast_text">
        <h6 className="podcast_heading_6">Podcast</h6>
        <h2 className="podcast_heading_2"> Open Source Cafe Podcast </h2>
        <p className="podcast_para"> 
          The Open Source Cafe, Out of Syllabus, KlassTime with Karuna, AMA session on Discord is an initiative to highlight the stories, journeys, tips & tricks of some of the amazing community leaders and members. Learn from their experiences and get mentored on your journey by folks from around the world.
        </p>
         <p className="podcast_para_2">
          Watch now 
          <img className="podcast_right" src={Right} alt="right" />
         </p>
      </div>
      <div className="podcast_img_cont">
      <img className="podcast_img" src={Podcast} alt="Podcast" />
       <a href='https://www.youtube.com/watch?v=cl0zMen43E4&list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr'><button className="podcast_redirect"> See all episodes </button></a>
      </div>
     </div>
  )
}

export default Event
