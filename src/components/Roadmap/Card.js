import React from "react";

const Card = ({ roadmap }) => {
  return (
    <a
      key={Math.random()}
      href={roadmap.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card"
    >
      <section>
        <img src={roadmap.image} alt={roadmap.title + "banner"} />
        <div className="details">
          <h2>{roadmap.title}</h2>
          <p>{roadmap.description}</p>
        </div>
      </section>
    </a>
  );
};

export default Card;
