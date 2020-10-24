import React from 'react';

import Facebook from 'assets/svgs/facebook.svg';
import Linkedin from 'assets/svgs/linkedin.svg';
import Reddit from 'assets/svgs/reddit.svg';
import Slack from 'assets/svgs/slack.svg';
import Twitter from 'assets/svgs/twitter.svg';

import './HomeFooter.scss';

const HomeFooter = () => {
  return (
    <div className="HomeFooter">
      <div className="HomeFooter__social-media-container">
        <img alt="logo" className="HomeFooter__social-media-logo" src={Slack} />
        <img alt="logo" className="HomeFooter__social-media-logo" src={Linkedin} />
        <img alt="logo" className="HomeFooter__social-media-logo" src={Facebook} />
        <img alt="logo" className="HomeFooter__social-media-logo" src={Twitter} />
        <img alt="logo" className="HomeFooter__social-media-logo" src={Reddit} />
      </div>
    </div>
  );
};

export default HomeFooter;
