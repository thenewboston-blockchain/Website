import React, {FC} from 'react';

import {ProgressiveImage} from 'components';
import {useWindowDimensions} from 'hooks';
import {Link} from 'react-router-dom';
import Particles from '../Particles';
import developerPortalImage from './Portal.webp';
import developerPortalPlaceholderImage from './PortalPlaceholder.webp';

import './DeveloperPortalHero.scss';

const DeveloperPortalHero: FC = () => {
  const {width} = useWindowDimensions();

  let imageSize: number;
  if (width < 768) {
    imageSize = 280;
  } else if (width < 992) {
    imageSize = 412;
  } else {
    imageSize = 558;
  }

  return (
    <div className="DeveloperPortalHero">
      <div className="DeveloperPortalHero__links-container">
        <Link to="/developer" className="DeveloperPortalHero__link">
          Developer
        </Link>
        <Link to="/developer/whitepaper" className="DeveloperPortalHero__link">
          Living Whitepaper
        </Link>
        <Link to="/projects" className="DeveloperPortalHero__link">
          Projects
        </Link>
      </div>
      <Particles />
      <ProgressiveImage
        alt="Developer Portal"
        containerClassName="DeveloperPortalHero__main-image"
        height={imageSize}
        placeholderSrc={developerPortalPlaceholderImage}
        realSrc={developerPortalImage}
        width={imageSize}
      />
    </div>
  );
};

export default DeveloperPortalHero;
