import React, {FC, useEffect, useState} from 'react';
import clsx from 'clsx';
import shuffle from 'lodash/shuffle';

import SocialMediaIcon from 'components/SocialMediaIcon';
import {SocialMedia} from 'types/social-media';

import HelloWorld, {HelloWorldKeys, defaultHelloWorld} from './hello-world';
import Hero from './Hero.png';
import './HomeHero.scss';

const shuffledHelloKeys = shuffle(HelloWorldKeys);

enum HelloFadeClass {
  fadeIn = 'HomeHero__hello-world--fade-in',
  fadeOut = 'HomeHero__hello-world--fade-out',
}

const HomeHero: FC = () => {
  const [helloFadeClass, setHelloFadeClass] = useState<HelloFadeClass>(HelloFadeClass.fadeIn);
  const [helloText, setHelloText] = useState<string>(defaultHelloWorld);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setHelloFadeClass(HelloFadeClass.fadeOut);

      setTimeout(() => {
        const key = shuffledHelloKeys[i];
        setHelloText(HelloWorld[key]);
        i += 1;
        if (i === shuffledHelloKeys.length) {
          i = 0;
        }
        setHelloFadeClass(HelloFadeClass.fadeIn);
      }, 1000);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [setHelloFadeClass]);

  const renderSocialMediaLinks = () =>
    [SocialMedia.slack, SocialMedia.github, SocialMedia.youtube].map((website) => (
      <SocialMediaIcon className="HomeHero__SocialMediaLink" iconSize={30} key={website} website={website} />
    ));

  return (
    <div className="HomeHero">
      <div className="HomeHero__wrapper">
        <div className="HomeHero__left">
          <div className="HomeHero__left-content-container">
            <span className={clsx('HomeHero__hello-world', helloFadeClass)}>{helloText}</span>
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
