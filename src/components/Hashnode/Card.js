import React from "react";


const Card = ({hashnode}) => {
  return (
    <div
   className="hashnode-card"
  >
      <section>
        <img src={hashnode.image} alt={hashnode.title + "banner"} />
        <div className="hashnode-details">
          <p>{hashnode.description}</p>
        </div>
      </section>
  </div>
    
  );
};


export default Card;