import React from 'react'
import '../styles/Footer.css'
import CC from '../assets/community-classroom-logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div class="container">
  	 	<div class="row">
       <div class="footer-col1">
  	 			<img src={CC} alt="CC" />
           <ul>
           <li><br/></li>
  	 				<li><br/></li>
  	 				<li><br/></li>
  	 				<li><br/></li>
            <li><br/></li>
            <li><br/></li>
            <li>© 2022 Community Classroom · All rights reserved.</li>
            </ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Sitemap</h4>
  	 			<ul>
  	 				<li><a href="#">Home</a></li>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">Blog</a></li>
  	 				<li><a href="#">Courses</a></li>
             <li><a href="#">Roadmaps</a></li>
             <li><a href="#">Events</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Community</h4>
  	 			<ul>
  	 				<li><a href="#">YouTube</a></li>
  	 				<li><a href="#">Discord</a></li>
  	 				<li><a href="#">Telegram</a></li>
  	 				<li><a href="#">Twitter</a></li>
  	 				<li><a href="#">Instagram</a></li>
                    <li><a href="#">GitHub</a></li>
  	 			</ul>
  	 		</div>
  	 	</div>
  	 </div>
    </div>
  )
}

export default Footer