import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Button} from 'components';
import {useWindowDimensions} from 'hooks';
import HomeValuesModal from './HomeValuesModal';
import ValuesIllustration from './ValuesIllustration';
import './HomeValues.scss';

const HomeValues: FC = () => {
  const {width} = useWindowDimensions();
  let iconSize = {height: 376, width: 456};
  if (width < 600) {
    iconSize = {height: 188, width: 235};
  } else if (width < 768) {
    iconSize = {height: 211, width: 288};
  } else {
    iconSize = {height: 376, width: 456};
  }
  return (
    <div className="HomeValues">
      <HomeValuesModal />
      <div className="HomeValues__main">
        <ValuesIllustration className="HomeValues__illustration" width={iconSize.width} height={iconSize.height} />
        <div className="HomeValues__main-right">
          <div className="HomeValues__main-title">The value comes from you</div>
          <div className="HomeValues__main-description">
            Coins are minted when utility is added to the platform through DApp creation or contributions. This Proof of
            Value system gives everyone a chance to participate, not just coin or hardware owners.
          </div>
          <div className="HomeValues__main-buttons">
            <Link className="HomeValues__main-buttons--create" tabIndex={-1} to="/projects/overview">
              <Button rounded>Create Projects</Button>
            </Link>
            <Link className="HomeValues__main-buttons--earn" tabIndex={-1} to="/tasks/All">
              <Button rounded>Complete Bounties</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValues;
