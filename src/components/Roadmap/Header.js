import React from "react";
import "../../styles/Header.css";
import { roadmapsData as data } from "./data";
import "./Roadmap.css";
import ArrowDown from "../../assets/ArrowDown.png";

const Header = ({ scrollRoadmapRef }) => {
  return (
    <header className="roadmaps-header">
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <a
          href="#roadmaps"
          onClick={() =>
            scrollRoadmapRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore roadmaps
          <img src={ArrowDown} alt={"Arrow down"} className="arrow-down"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
