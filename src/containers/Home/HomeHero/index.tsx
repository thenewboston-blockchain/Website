import React, {FC, useEffect, useRef} from 'react';
import clsx from 'clsx';

import {AnimationState} from 'constants/animation';
import SocialMediaIcon from 'components/SocialMediaIcon';
import {SocialMedia} from 'types/social-media';
import useAnimationState from 'hooks/useAnimationState';
import useShuffle from 'hooks/useShuffle';

import HelloWorld, {defaultHelloWorld, HelloWorldKeys} from './hello-world';
import Hero from './Hero.png';
import './HomeHero.scss';

const HelloFadeClass = {
  [AnimationState.ONE]: 'HomeHero__hello-world--fade-in',
  [AnimationState.ZERO]: 'HomeHero__hello-world--fade-out',
};

const HomeHero: FC = () => {
  const animationState = useAnimationState(AnimationState.ONE, 1000, 4000);
  const shouldShuffle = useRef(false);
  const helloText = useShuffle(defaultHelloWorld, HelloWorld, HelloWorldKeys, shouldShuffle.current);

  useEffect(() => {
    shouldShuffle.current = animationState === AnimationState.ZERO;
  }, [animationState]);

  const renderSocialMediaLinks = () =>
    [SocialMedia.slack, SocialMedia.github, SocialMedia.youtube].map((website) => (
      <SocialMediaIcon className="HomeHero__SocialMediaLink" iconSize={30} key={website} website={website} />
    ));

  return (
    <div className="HomeHero">
      <div className="HomeHero__wrapper">
        <div className="HomeHero__left">
          <div className="HomeHero__left-content-container">
            <span className={clsx('HomeHero__hello-world', HelloFadeClass[animationState])}>{helloText}</span>
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
