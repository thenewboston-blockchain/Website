import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import {Button} from 'components';
import SocialMediaIcon from 'components/SocialMediaIcon';
import {AnimationState} from 'constants/animation';
import {useAnimationState, useShuffle, useWindowDimensions} from 'hooks';
import {SocialMedia} from 'types/social-media';

import HelloWorld, {defaultHelloWorld, HelloWorldKeys} from './hello-world';
import HeroV2Svg from './HeroV2.svg';
import HeroV2WebP from './HeroV2.webp';
import './HomeHero.scss';

const HelloFadeClass = {
  [AnimationState.ONE]: 'HomeHero__hello-world--fade-in',
  [AnimationState.ZERO]: 'HomeHero__hello-world--fade-out',
};

const HomeHero: FC = () => {
  const animationState = useAnimationState(AnimationState.ONE, 1000, 4000);
  const shouldShuffle = useRef(false);
  const helloText = useShuffle(defaultHelloWorld, HelloWorld, HelloWorldKeys, shouldShuffle.current);
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);
  const {width} = useWindowDimensions();

  useEffect(() => {
    shouldShuffle.current = animationState === AnimationState.ZERO;
  }, [animationState]);

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
            <span className={clsx('HomeHero__hello-world', HelloFadeClass[animationState])}>{helloText}</span>
            <h1 className="HomeHero__title">We're Building a Better Economy</h1>
            <h2 className="HomeHero__subtitle">
              thenewboston is a blockchain platform for everyone. We are an open source community developing
              decentralized apps with the goal of helping the whole world move into the cryptocurrency era.
            </h2>
            <div className="HomeHero__buttons">
              <Link className="HomeHero__buttons--learn-more" tabIndex={-1} to="/guide/introduction">
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
          <div className="HomeHero__right">
            <img
              alt="hero"
              className={clsx('HomeHero__image HomeHero__image-placeholder', {
                'HomeHero__image-placeholder--loaded': isHeroImageLoaded,
              })}
              src={HeroV2WebP}
            />
            <img
              alt="hero"
              className={clsx('HomeHero__image HomeHero__image-real', {
                'HomeHero__image-real--loaded': isHeroImageLoaded,
              })}
              src={HeroV2Svg}
              onLoad={() => {
                setIsHeroImageLoaded(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeHero;
