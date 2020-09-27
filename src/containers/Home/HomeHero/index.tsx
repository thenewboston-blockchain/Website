import React, {FC} from 'react';

import {MarketingButton} from 'components';
import {SocialMedia} from 'types/social-media';

import DesktopUI from './DesktopUI.jpg';
import SendPointsModal from './SendPointsModal.jpg';

import './HomeHero.scss';

const HomeHero: FC = () => {
  return (
    <div className="HomeHero">
      <svg className="HomeHero__background-graphic" viewBox="0 0 1366 396">
        <path fill="#F6F9FC" fillRule="nonzero" d="M0 395.5L1366 106V0H0v395.5z" />
      </svg>
      <div className="HomeHero__wrapper">
        <div className="HomeHero__left">
          <div className="HomeHero__left-content-container">
            <h1 className="HomeHero__title">
              <span>Build software.</span>
              <br />
              <span>Earn digital currency.</span>
            </h1>
            <h2 className="HomeHero__subtitle">
              Join our development community and start earning points, our open source digital currency.
            </h2>
            <div className="HomeHero__marketing-buttons">
              <MarketingButton className="HomeHero__MarketingButton" website={SocialMedia.slack} />
              <MarketingButton className="HomeHero__MarketingButton" website={SocialMedia.github} />
            </div>
          </div>
        </div>
        <div className="HomeHero__right">
          <img alt="desktop" className="HomeHero__desktop-ui" src={DesktopUI} />
          <img alt="send points modal" className="HomeHero__send-points-modal" src={SendPointsModal} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
