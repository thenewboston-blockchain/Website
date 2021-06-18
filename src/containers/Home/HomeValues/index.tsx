import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import {Button} from 'components';
import {useWindowDimensions} from 'hooks';
import HomeValuesCard from './HomeValuesCard';
import ValuesIllustrationWebP from './ValuesIllustration.webp';
import ValuesIllustrationSvg from './ValuesIllustration.svg';
import './HomeValues.scss';

const HomeValues: FC = () => {
  const {width} = useWindowDimensions();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  let iconSize;
  if (width < 600) {
    iconSize = {height: 188, width: 235};
  } else if (width < 768) {
    iconSize = {height: 211, width: 288};
  } else {
    iconSize = {height: 376, width: 456};
  }

  return (
    <div className="HomeValues">
      <HomeValuesCard />
      <div className="HomeValues__main">
        <div className="HomeValues__illustration-container" style={{height: iconSize.height, width: iconSize.width}}>
          <img
            alt="HomeValuesIllustration"
            className={clsx('HomeValues__illustration HomeValues__illustration-placeholder', {
              'HomeValues__illustration-placeholder--loaded': isImageLoaded,
            })}
            width={iconSize.width}
            height={iconSize.height}
            src={ValuesIllustrationWebP}
          />
          <img
            alt="HomeValuesIllustration"
            className={clsx('HomeValues__illustration HomeValues__illustration-real', {
              'HomeValues__illustration-real--loaded': isImageLoaded,
            })}
            loading="lazy"
            width={iconSize.width}
            height={iconSize.height}
            src={ValuesIllustrationSvg}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        <div className="HomeValues__main-right">
          <div className="HomeValues__main-title">The value comes from you</div>
          <div className="HomeValues__main-description">
            Coins are minted when utility is added to the platform through DApp creation or contributions. This Proof of
            Value system gives everyone a chance to participate, not just coin or hardware owners.
          </div>
          <div className="HomeValues__main-buttons">
            <Link className="HomeValues__main-buttons--create" tabIndex={-1} to="/projects/overview">
              <Button>Create Projects</Button>
            </Link>
            <Link className="HomeValues__main-buttons--earn" tabIndex={-1} to="/tasks/All">
              <Button>Complete Bounties</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValues;
