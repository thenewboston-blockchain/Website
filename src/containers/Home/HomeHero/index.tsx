import React, {FC} from 'react';

import SocialMediaIcon from 'components/SocialMediaIcon';
import {SocialMedia} from 'types/social-media';

import DesktopUI from './DesktopUI.png';
import SendPointsModal from './SendPointsModal.png';

import './HomeHero.scss';

const HomeHero: FC = () => {
  const renderSocialMediaLinks = () =>
    [SocialMedia.slack, SocialMedia.github, SocialMedia.youtube].map((website) => (
      <SocialMediaIcon className="HomeHero__SocialMediaLink" iconSize={30} key={website} website={website} />
    ));

  return (
    <div className="HomeHero">
      <div className="HomeHero__wrapper">
        <div className="HomeHero__left">
          <div className="HomeHero__left-content-container">
            <h1 className="HomeHero__title">
              <strong>Build</strong> software
              <br />
              <span className="HomeHero__earn-text">
                <strong>Earn</strong>
              </span>{' '}
              digital currency
            </h1>
            <h2 className="HomeHero__subtitle">
              Join our development community and start earning points, our open source digital currency
            </h2>
            <div className="HomeHero__social-media-links">{renderSocialMediaLinks()}</div>
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
