import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {useHistory} from 'react-router';

import Logo from 'assets/svgs/thenewboston-white.svg';
import SocialMediaIcon from 'components/SocialMediaIcon';
import Button from 'components/Button';
import {useWindowDimensions} from 'hooks';
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
    ],
  },
  {
    header: 'Resources',
    links: [
      {
        title: 'Documentation',
        url: '/guide/introduction',
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
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
  const renderSocialMediaLinks = () =>
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
    ].map((website) => (
      <SocialMediaIcon
        className="Footer__SocialMediaLink"
        iconSize={28}
        key={website}
        totalSize={28}
        website={website}
      />
    ));

  const renderNavLists = () =>
    navLists.map((list) => <FooterNavList header={list.header} key={list.header} links={list.links} />);

  const history = useHistory();
  const {width} = useWindowDimensions();
  const shouldRenderDownloadWithNavlists = width < 1400 && width > 480;
  return (
    <footer className={clsx('Footer', className)} data-testid="Footer">
      <div className="Footer__left">
        <Link to="/">
          <img src={Logo} alt="thenewboston logo" />
        </Link>
        <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
      </div>
      {shouldRenderDownloadWithNavlists && (
        <Button rounded className="Footer__download-button" onClick={() => history.push('/download')}>
          Download Wallet
        </Button>
      )}
      <div className="Footer__right">
        {renderNavLists()}
        {!shouldRenderDownloadWithNavlists && (
          <Button rounded className="Footer__download-button" onClick={() => history.push('/download')}>
            Download Wallet
          </Button>
        )}
      </div>
    </footer>
  );
};

export default memo(Footer);
