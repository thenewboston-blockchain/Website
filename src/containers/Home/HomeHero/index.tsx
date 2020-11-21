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
    // Setup the variables
    let i = 0;
    let fadeCount = 1;
    let timerId: ReturnType<typeof setTimeout>;

    // Text change functions
    function fadeInOut() {
      if (fadeCount === 0) {
        setHelloFadeClass(HelloFadeClass.fadeIn);
        fadeCount = 1;
      } else {
        setHelloFadeClass(HelloFadeClass.fadeOut);
        fadeCount = 0;
      }
    }
    function switchLang() {
      const newText = HelloWorld[shuffledHelloKeys[i]];
      setHelloText(newText);
      i += 1;
    }

    // Code that runs (or something)
    const interval = setInterval(() => {
      fadeInOut();
      timerId = setTimeout(() => {
        switchLang();
        fadeInOut();
      }, 1000);
    }, 5000);

    // Return the timeout and interval
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
      clearInterval(interval);
    };
  }, [setHelloFadeClass]);

  // Everything else
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
