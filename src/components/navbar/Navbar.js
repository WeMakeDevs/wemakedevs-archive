import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Youtube from "../../assets/youtube.png";
import "../../styles/navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="navbar_cont">
      <div className="navbar_logo">
        <img className="nabar_logo_1" src={Logo} alt="logo" />
      </div>
      <ul className={click ? "navbar-menu active" : "navbar-menu"}>
        <li className="navbar-item">
          <a className="item" href="/">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a className="item" href="/">
            Courses
          </a>
        </li>
        <li className="navbar-item">
          <a
            className="item"
            href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr"
          >
            Podcasts
          </a>
        </li>
        <li className="navbar-item">
          <a className="item" href="/">
            Events
          </a>
        </li>
        <li className="navbar-item">
          <a className="item" href="https://github.com/commclassroom/roadmaps">
            Roadmaps
          </a>
        </li>
        <li className="navbar-item">
          <a className="item" href="/">
            About
          </a>
        </li>
        <a
          className="navbar_youtube_1"
          href="https://www.youtube.com/c/KunalKushwaha"
        >
          <button className="navbar_youtube">
            {" "}
            Youtube <img src={Youtube} alt="youtube" />{" "}
          </button>
        </a>
      </ul>
      <div className="navbar_hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "black" }} />
        ) : (
          <FaBars size={30} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
