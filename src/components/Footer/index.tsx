import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom';

import Logo from 'assets/svgs/thenewboston-white.svg';

import {SocialMedia} from 'types/social-media';

import FooterNavList from './FooterNavList';
import SocialMediaIcon from './SocialMediaIcon';

import './Footer.scss';

const navLists = [
  {
    header: 'Get Started',
    links: [
      {
        title: 'Documentation',
        url: '/guide/introduction',
      },
      {
        title: 'Tasks',
        url: '/tasks/All',
      },
      {
        title: 'Download',
        url: '/download',
      },
    ],
  },
  {
    header: 'Community',
    links: [
      {
        title: 'Openings',
        url: '/openings',
      },
      {
        title: 'Leaderboard',
        url: '/leaderboard/All',
      },
    ],
  },
  {
    header: 'Community',
    links: [
      {
        title: 'FAQ',
        url: '/faq',
      },
    ],
  },
];

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

  const renderNavLists = () => navLists.map((list) => <FooterNavList header={list.header} links={list.links} />);

  return (
    <div className="Footer__wrapper">
      <footer className="Footer">
        <div className="Footer__left">
          <Link to="/">
            <img src={Logo} alt="thenewboston logo" />
          </Link>
          <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
        </div>
        <div className="Footer__right">{renderNavLists()}</div>
      </footer>
    </div>
  );
};

export default memo(Footer);
