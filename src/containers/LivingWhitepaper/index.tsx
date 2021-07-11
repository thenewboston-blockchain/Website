import React from 'react';

import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import LivingWhitepaperIcon from './assets/LivingWhitepaperIcon.webp';

import './LivingWhitepaper.scss';

const LivingWhitepaper = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper">
      <div className="LivingWhitepaper__hero">
        <div className="LivingWhitepaper__hero-title">
          <div className="LivingWhitepaper__hero-title-living">L I V I N G</div>
          <div className="LivingWhitepaper__hero-title-whitepaper">Whitepaper</div>
        </div>
        <img alt="Living whitepaper icon" className="LivingWhitepaper__hero-icon" src={LivingWhitepaperIcon} />
      </div>
    </DeveloperPortalLayout>
  );
};

export default LivingWhitepaper;
