import React from "react";
import { mentorshipData as data } from "./data";

const Mentorship = () => {
  return (
    <section className="mentorship-section">
      <div className="mentorship-card">
        <div className="details">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Watch video
          </a>
        </div>
        <img src={data.image} alt={"Mentorship"} />
      </div>
    </section>
  );
};

export default Mentorship;
