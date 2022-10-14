import React from 'react'
import "../styles/Header.css"

const Header = () => {
  return (
    <>
    <section className="header_cont_1">
    <div className="header_cont_1_a">
      <button className="header_button"> Check out our most recent podcast </button>
      <p className="header_free_community"> 
       The <span className="header_free">Free</span> Community for Modern Learning.
    </p>
    <p className="header_para_about">
        This is a community which provides free hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.
    </p>
    </div>
    <div className="header_cont_2_b">
      <button className="header_cont_2_b_courses"> See Courses </button>
      <button className="header_cont_2_b_youtube"> Visit Youtube </button>
    </div>
    </section>
    </>
  )
}

export default Header