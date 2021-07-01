import React from 'react';

import {Link} from 'react-router-dom';
import Particles from '../Particles';
import developerPortalImage from './Portal.webp';

import './DeveloperPortalHero.scss';

// TODO: update links when ready
export default function DeveloperPortalHero() {
  return (
    <div className="DeveloperPortalHero">
      <div className="DeveloperPortalHero__links-container">
        <Link to="/" className="DeveloperPortalHero__link">
          Home
        </Link>
        <Link to="/" className="DeveloperPortalHero__link">
          Living Whitepaper
        </Link>
        <Link to="/projects" className="DeveloperPortalHero__link">
          Projects
        </Link>
      </div>
      <Particles />
      <img alt="Developer Portal" src={developerPortalImage} className="DeveloperPortalHero__main-image" />
    </div>
  );
}
