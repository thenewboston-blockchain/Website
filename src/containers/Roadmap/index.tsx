import React from 'react';

import Quarters from './Quarters';
import Teams from './Teams';

import './Roadmap.scss';

const Roadmap = () => {
  return (
    <div className="Roadmap">
      <Quarters />
      <Teams />
    </div>
  );
};

export default Roadmap;
