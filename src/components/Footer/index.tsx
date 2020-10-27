import React, {FC} from 'react';
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
        title: 'Tutorials',
        url: '/tutorials',
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
        title: 'Join the Community!',
        url: '/community',
      },
      {
        title: 'Openings',
        url: '/openings',
      },
      {
        title: 'Team',
        url: '/team',
      },
      {
        title: 'Leaderboard',
        url: '/leaderboard/All',
      },
    ],
  },
  {
    header: 'More',
    links: [
      {
        title: 'FAQ',
        url: '/',
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
    <footer className="Footer">
      <div className="Footer__left">
        <Link to="/">
          <img src={Logo} alt="thenewboston logo" />
        </Link>
        <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
      </div>
      <div className="Footer__right">{renderNavLists()}</div>
    </footer>
  );
};

export default Footer;
