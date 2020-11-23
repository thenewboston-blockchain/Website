import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import Logo from 'assets/svgs/thenewboston-white.svg';
import SocialMediaIcon from 'components/SocialMediaIcon';
import {SocialMedia} from 'types/social-media';

import FooterNavList from './FooterNavList';
import './Footer.scss';

interface ComponentProps {
  className?: string;
}

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
        url: '/tasks',
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
        url: '/social',
      },
      {
        title: 'Openings',
        url: '/openings',
      },
      {
        title: 'Team',
        url: '/teams',
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
        title: 'Project Proposals',
        url: '/project-proposals/overview',
      },
      {
        title: 'Assets',
        url: '/assets',
      },
      {
        title: 'FAQ',
        url: '/faq',
      },
      {
        title: 'Donate',
        url: '/donate',
      },
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
  const renderSocialMediaLinks = () =>
    [
      SocialMedia.slack,
      SocialMedia.github,
      SocialMedia.youtube,
      SocialMedia.reddit,
      SocialMedia.linkedin,
      SocialMedia.facebook,
      SocialMedia.twitter,
    ].map((website) => (
      <SocialMediaIcon className="Footer__SocialMediaLink" iconSize={28} key={website} website={website} />
    ));

  const renderNavLists = () =>
    navLists.map((list) => <FooterNavList header={list.header} key={list.header} links={list.links} />);

  return (
    <footer className={clsx('Footer', className)}>
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

export default memo(Footer);
