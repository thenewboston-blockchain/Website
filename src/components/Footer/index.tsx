import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {SocialMedia} from 'types/social-media';

import Logo from 'assets/svgs/thenewboston-white.svg';

import './Footer.scss';
import SocialMediaIcon from './SocialMediaIcon';

const Footer: FC = () => {
  const renderSocialMediaLinks = () =>
    [
      SocialMedia.slack,
      SocialMedia.github,
      SocialMedia.youtube,
      SocialMedia.reddit,
      SocialMedia.linkedin,
      SocialMedia.facebook,
      SocialMedia.twitter,
    ].map((website) => <SocialMediaIcon className="Footer__social-media-link" website={website} />);

  return (
    <div className="Footer">
      <div className="Footer__left">
        <Link to="/">
          <img className="Footer__logo" src={Logo} alt="thenewboston logo" />
        </Link>
        <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
      </div>
      <div className="Footer__right">Nav</div>
    </div>
  );
};

export default Footer;
