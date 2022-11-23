import React from "react";
import { mentorshipData as data } from "./data";
import Arrowright from "../../assets/Arrowright.png";

const Mentorship = () => {
  return (
    <section className="mentorship-section">
      <div className="mentorship-card">
        <div className="details">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Watch video
            <img
              src={Arrowright}
              alt={"Arrow right"}
              className="arrow-right"
            ></img>
          </a>
        </div>
        <img src={data.image} alt={"Mentorship"} className="thumbnail" />
      </div>
    </section>
  );
};

export default Mentorship;
