import React from 'react'
import '../styles/Footer.css'
import CC from '../assets/community-classroom-logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col1">
  	 		<img src={CC} alt="CC" />
          <p className="footer-p" >© 2022 Community Classroom · All rights reserved.</p>
  	 	</div>

      <div className="footer-col2">
          <div className="footer-col2-1">
            <h4>Sitemap</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/hashnode">Blog</Link></li>
              <li><Link to="/course">Courses</Link></li>
              <li><Link to="/roadmaps">Roadmaps</Link></li>
              <li><Link to="/event">Events</Link></li>
            </ul>
          </div>
          <div className="footer-col2-2">
            <h4>Community</h4>
            <ul>
              <li><a href="https://www.youtube.com/c/KunalKushwaha/" target="_blank">YouTube</a></li>
              <li><a href="https://discord.io/commclassroom" target="_blank">Discord</a></li>
              <li><a href="https://t.me/commclassroom" target="_blank">Telegram</a></li>
              <li><a href="https://twitter.com/commclassroom/" target="_blank">Twitter</a></li>
              <li><a href="https://www.instagram.com/commclassroom/" target="_blank">Instagram</a></li>
              <li><a href="https://github.com/commclassroom" target="_blank">GitHub</a></li>
            </ul>
          </div>
      </div>
		</div>
  )
}

export default Footer