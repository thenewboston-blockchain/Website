import React from 'react';

import RoadmapUI from './RoadmapUI.png';

import './Roadmap.scss';

const Roadmap = () => {
  return (
    <div className="Roadmap">
      <h2>Coming soon!</h2>
      <div className="img-container">
        <img alt="roadmap" className="roadmap" src={RoadmapUI} />
      </div>
    </div>
  );
};

export default Roadmap;
