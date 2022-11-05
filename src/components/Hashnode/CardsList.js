import React from "react";
import Card from "./Card";
import {hashnodeData as data } from "./data";


const CardsList = ({scrollRoadmapRef}) => {
  return (
    <div className="hashnode-container" id="#roadmaps" ref={scrollRoadmapRef}>
      {data.hashnode.map((hashnode) => (
        <Card hashnode={hashnode} />
      ))}
    </div>
  );
};

export default CardsList;