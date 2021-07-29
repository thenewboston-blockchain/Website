import React, {FC, memo, useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import clsx from 'clsx';

import Logo from 'assets/svgs/thenewboston-white.svg';
import {Button, SocialMediaIcon} from 'components';
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
        title: 'Tasks',
        url: '/tasks',
      },
      {
        title: 'Projects',
        url: '/projects/overview',
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
        title: 'Weekly Progress',
        url: '/progress',
      },
      {
        title: 'Openings',
        url: '/openings',
      },
      {
        title: 'Community Guidelines',
        url: '/guidelines',
      },
      {
        isExternal: true,
        title: 'Blog',
        url: 'https://blog.thenewboston.com',
      },
    ],
  },
  {
    header: 'Developer',
    links: [
      {
        title: 'Developer',
        url: '/developer',
      },
      {
        title: 'Living Whitepaper',
        url: '/developer/whitepaper',
      },
      {
        title: 'Projects',
        url: '/projects',
      },
    ],
  },
  {
    header: 'Resources',
    links: [
      {
        title: 'Documentation',
        url: '/wallet',
      },
      {
        title: 'Tutorials',
        url: '/tutorials',
      },
      {
        title: 'Media Kit',
        url: '/assets',
      },
    ],
  },
  {
    header: 'About',
    links: [
      {
        title: 'Team',
        url: '/teams',
      },
      {
        title: 'Donate',
        url: '/donate',
      },
      {
        title: 'Terms of Use',
        url: '/terms-of-use',
      },
      {
        title: 'Privacy Policy',
        url: '/privacy-policy',
      },
    ],
  },
  {
    header: 'FAQ',
    links: [
      {
        title: 'FAQ',
        url: '/faq',
      },
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
  const history = useHistory();

  const renderSocialMediaLinks = useCallback(
    () =>
      [
        SocialMedia.github,
        SocialMedia.youtube,
        SocialMedia.reddit,
        SocialMedia.linkedin,
        SocialMedia.facebook,
        SocialMedia.instagram,
        SocialMedia.twitter,
        SocialMedia.discord,
        SocialMedia.twitch,
        SocialMedia.pinterest,
      ].map((website) => (
        <SocialMediaIcon
          className="Footer__SocialMediaLink"
          iconSize={28}
          key={website}
          totalSize={28}
          website={website}
        />
      )),
    [],
  );

  const renderNavLists = useCallback(
    () => navLists.map((list) => <FooterNavList header={list.header} key={list.header} links={list.links} />),
    [],
  );

  return (
    <footer className={clsx('Footer', className)} data-testid="Footer">
      <div className="Footer__left">
        <div className="Footer__left-brand-details">
          <Link to="/">
            <img src={Logo} alt="thenewboston logo" />
          </Link>
          <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
        </div>
        <Button className="Footer__download-button" onClick={() => history.push('/download')} variant="outlined">
          Download Wallet
        </Button>
      </div>
      <div className="Footer__right">{renderNavLists()}</div>
    </footer>
  );
};

export default memo(Footer);
