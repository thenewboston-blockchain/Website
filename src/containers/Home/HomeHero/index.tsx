import React, {FC} from 'react';

import SocialMediaIcon from 'components/SocialMediaIcon';
import {SocialMedia} from 'types/social-media';

import Hero from './Hero.svg';

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
            <h1 className="HomeHero__title">Open-source community for creators</h1>
            <h2 className="HomeHero__subtitle">
              Learn to code, collaborate on projects, gain experience, build a community, and earn coins by
              contributing.
            </h2>
            <div className="HomeHero__social-media-links">{renderSocialMediaLinks()}</div>
          </div>
        </div>
        <div className="HomeHero__right">
          <img alt="hero" className="HomeHero__image" src={Hero} />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
