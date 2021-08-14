import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Button, ProgressiveImage} from 'components';
import {useWindowDimensions} from 'hooks';
import HomeValuesCard from './HomeValuesCard';
import ValuesIllustrationPlaceholder from './ValuesIllustrationPlaceholder.webp';
import ValuesIllustration from './ValuesIllustration.webp';
import './HomeValues.scss';

const HomeValues: FC = () => {
  const {width} = useWindowDimensions();

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
        <ProgressiveImage
          alt="Illustration about TNBC's Values"
          containerClassName="HomeValues__illustration-container"
          placeholderImageClassName="HomeValues__illustration"
          realImageClassName="HomeValues__illustration"
          height={iconSize.height}
          placeholderSrc={ValuesIllustrationPlaceholder}
          realSrc={ValuesIllustration}
          width={iconSize.width}
        />
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
