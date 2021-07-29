import React, {FC, useCallback} from 'react';
import {Link} from 'react-router-dom';

import {Button, ProgressiveImage} from 'components';
import SocialMediaIcon from 'components/SocialMediaIcon';
import {useWindowDimensions} from 'hooks';
import {SocialMedia} from 'types/social-media';

import HeroV2 from './HeroV2.png';
import HeroV2Placeholder from './HeroV2Placeholder.webp';
import './HomeHero.scss';

const HomeHero: FC = () => {
  const {width} = useWindowDimensions();

  const renderSocialMediaLinks = useCallback(
    () =>
      [SocialMedia.discord, SocialMedia.github, SocialMedia.youtube].map((website) => (
        <SocialMediaIcon
          className={`HomeHero__SocialMediaLink HomeHero__SocialMediaLink--${website}`}
          iconSize={40}
          key={website}
          totalSize={42}
          website={website}
        />
      )),
    [],
  );

  return (
    <div className="HomeHero">
      <div className="HomeHero__wrapper">
        <div className="HomeHero__left">
          <div className="HomeHero__left-content-container">
            <span className="HomeHero__hello-world">Hello World</span>
            <h1 className="HomeHero__title">We're Building a Better Economy</h1>
            <h2 className="HomeHero__subtitle">
              thenewboston is a blockchain platform for everyone. We are an open source community developing
              decentralized apps with the goal of helping the whole world move into the cryptocurrency era.
            </h2>
            <div className="HomeHero__buttons">
              <Link className="HomeHero__buttons--learn-more" tabIndex={-1} to="/developer/whitepaper">
                <Button>Learn More</Button>
              </Link>
              <Link className="HomeHero__buttons--earn-coins" tabIndex={-1} to="/tasks/All">
                <Button>Earn Coins</Button>
              </Link>
            </div>
            <div className="HomeHero__social-media-links">{renderSocialMediaLinks()}</div>
          </div>
        </div>
        {width > 414 && (
          <ProgressiveImage
            alt="Home Hero Image"
            containerClassName="HomeHero__right"
            placeholderSrc={HeroV2Placeholder}
            realSrc={HeroV2}
          />
        )}
      </div>
    </div>
  );
};

export default HomeHero;
