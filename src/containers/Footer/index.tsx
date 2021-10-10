import React, {FC, memo, useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import clsx from 'clsx';

import Logo from 'assets/svgs/thenewboston-white.svg';
import {Button, SocialMediaIcon} from 'components';
import {ROUTES, URLS} from 'constants/routes';
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
        title: 'Bounties',
        url: ROUTES.bounties,
      },
      {
        isExternal: true,
        title: 'Projects',
        url: URLS.developerPortal.projects,
      },
    ],
  },
  {
    header: 'Community',
    links: [
      {
        title: 'Join the Community!',
        url: ROUTES.social,
      },
      {
        title: 'Weekly Progress',
        url: ROUTES.progress,
      },
      {
        title: 'Openings',
        url: ROUTES.openings,
      },
      {
        title: 'Community Guidelines',
        url: ROUTES.guidelines,
      },
      {title: 'Analytics', url: ROUTES.analytics},
      {title: 'Beta Roadmap', url: ROUTES.roadmap},
      {
        isExternal: true,
        title: 'Blog',
        url: URLS.blog,
      },
    ],
  },
  {
    header: 'Developer',
    links: [
      {
        isExternal: true,
        title: 'Developer',
        url: URLS.developerPortal.home,
      },
      {
        isExternal: true,
        title: 'Living Whitepaper',
        url: URLS.developerPortal.whitepaper,
      },
      {
        isExternal: true,
        title: 'Projects',
        url: URLS.developerPortal.projects,
      },
    ],
  },
  {
    header: 'Resources',
    links: [
      {
        title: 'Documentation',
        url: ROUTES.wallet,
      },
      {
        title: 'Tutorials',
        url: ROUTES.tutorials,
      },
      {
        title: 'Media Kit',
        url: ROUTES.assets,
      },
    ],
  },
  {
    header: 'About',
    links: [
      {
        title: 'Team',
        url: ROUTES.teams,
      },
      {
        title: 'Donate',
        url: ROUTES.donate,
      },
      {
        title: 'Terms of Use',
        url: ROUTES.termsOfUse,
      },
      {
        title: 'Privacy Policy',
        url: ROUTES.privacyPolicy,
      },
    ],
  },
  {
    header: 'FAQ',
    links: [
      {
        title: 'FAQ',
        url: ROUTES.faq,
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
        SocialMedia.gaming,
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
        <Button className="Footer__download-button" onClick={() => history.push(ROUTES.download)} variant="outlined">
          Download Wallet
        </Button>
      </div>
      <div className="Footer__right">{renderNavLists()}</div>
    </footer>
  );
};

export default memo(Footer);
