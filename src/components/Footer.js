import React from 'react'
import '../styles/Footer.css'
import CC from '../assets/community-classroom-logo.png'

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
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#about">About</a></li>
  	 				<li><a href="#blog">Blog</a></li>
  	 				<li><a href="#course">Courses</a></li>
             		<li><a href="#roadmap">Roadmaps</a></li>
             		<li><a href="#event">Events</a></li>
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