import React from 'react'
import '../styles/Blog.css'
import blog from '../assests/event.png'

const Blog = () => {
  return (
    <div className="blog">
    <div className="blog_text">
      <h2>Read and write Blogs to win</h2>
      <h2>amazing prizes</h2>
      <ul className="blog_ul">
        <li>Participate in monthly blog events and win <br/> exciting swags and prizes.</li>
        <li>Read the blogs written or curated specially by the <br /> Community Classroom team.</li>
        <li>These blogs are written with the present in mind, <br /> all of these blogs are up to date.</li>
      </ul>
      <a href="" target="_blank" rel="noreferrer">
        <button id="bt_blog">Explore Blogs</button>
      </a>
    </div>
    <img className="blog_img" src={blog} alt="" />
   </div>
  )
}

export default Blog