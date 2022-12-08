import React from 'react'
import "../styles/Header.css"
import ChevronRight from "../assets/Chevron_right.png";
import ArrowUp from "../assets/ArrowUp.png";
import Arrowright from "../assets/Arrowright.png";

const Header = () => {
  return (
      <div>
      <section className="header_cont_1">
          <div className="header_cont_1_a">
                <a href="#podcast"><button className="header_button"> Check out our most recent podcast 
                  <img className="chevronright" src={ChevronRight} alt="chevron" />
                </button>
                </a>
                <p className="header_free_community"> 
                  The <span className="header_free">Free</span> Community for <br />Modern Learning.
                </p>
                <p className="header_para_about">
                This is a community which provides <span className="header_para_span">free hands-on training </span> in various fields of computer science and have an inclusive community focussing on a <span className="header_para_span"> learn by doing </span> approach.
              </p>
          </div>
          <div className="header_cont_2_b">
              <a href="#course">
              <button className="header_cont_2_b_courses"> See Courses 
                <img className="arrowright" src={Arrowright} alt="arrowup" /> 
              </button>
              </a>
              <a href="https://www.youtube.com/c/KunalKushwaha">
              <button className="header_cont_2_b_youtube"> Visit YouTube 
                <img className="arrowup" src={ ArrowUp} alt="arrowup" />
              </button>
              </a>
          </div>
      </section>
      </div>
  )
}

export default Header