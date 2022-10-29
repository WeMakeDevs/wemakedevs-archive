import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { roadmapsData as data } from "./data";
import "./Roadmap.css";

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
        </a>
      </div>
    </header>
  );
};

export default Header;
