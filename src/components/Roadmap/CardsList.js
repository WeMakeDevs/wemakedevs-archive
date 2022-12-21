import React from 'react';
import Card from './Card';
import { roadmapsData as data } from './data';
import './Roadmap.css';

const CardsList = ({ scrollRoadmapRef }) => {
  return (
    <div className='roadmaps-container' id='#roadmaps' ref={scrollRoadmapRef}>
      {data.roadmaps.map((roadmap) => (
        <Card roadmap={roadmap} />
      ))}
    </div>
  );
};

export default CardsList;
