import React from 'react'
import '../styles/Blog.css'
import blog from '../assets/blog.png'
import Arrowright from "../assets/Arrowright.png";
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <div id="blog" className="blog">
    <div className="blog_text">
      <h2 className="courses_title">Write <span className="header_free">Blogs</span> to win</h2>
      <h2>amazing prizes</h2>
      <ul className="blog_ul">
        <li>Participate in monthly blog events and win <br/> exciting swags and prizes.</li>
        <li>Read the blogs written or curated specially by the <br /> Community Classroom team.</li>
        <li>These blogs are written with the present in mind, <br /> all of these blogs are up to date.</li>
      </ul>
      <Link to='/hashnode'>
        <button id="bt_blog">Explore Blogs <img className="arrowright" src={Arrowright} alt="arrowup" /> </button>
      </Link>
    </div>
    <img className="blog_img" src={blog} alt="blog" />
   </div>
  )
}

export default Blog