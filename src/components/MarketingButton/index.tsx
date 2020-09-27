import React, {FC} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {getCustomClassNames} from 'utils/components';

import FacebookLogo from './logos/FacebookLogo.png';
import GitHubLogo from './logos/GitHubLogo.png';
import LinkedInLogo from './logos/LinkedInLogo.png';
import RedditLogo from './logos/RedditLogo.png';
import SlackLogo from './logos/SlackLogo.png';
import TwitterLogo from './logos/TwitterLogo.png';

import './MarketingButton.scss';

interface ComponentProps {
  className?: string;
  customLink?: string;
  website: SocialMedia;
}

const MarketingButton: FC<ComponentProps> = ({className, customLink, website}) => {
  const renderImage = (src: any) => (
    <img
      alt={website}
      className={clsx('MarketingButton__img', {...getCustomClassNames(className, '__img', true)})}
      src={src}
    />
  );

  const images = {
    facebook: renderImage(FacebookLogo),
    github: renderImage(GitHubLogo),
    linkedin: renderImage(LinkedInLogo),
    reddit: renderImage(RedditLogo),
    slack: renderImage(SlackLogo),
    twitter: renderImage(TwitterLogo),
  };

  const urls = {
    [SocialMedia.facebook]: 'https://www.facebook.com/TheNewBoston-464114846956315/',
    [SocialMedia.github]: 'https://github.com/thenewboston-developers',
    [SocialMedia.linkedin]: 'https://www.linkedin.com/company/thenewboston-developers/',
    [SocialMedia.reddit]: 'https://www.reddit.com/r/thenewboston/',
    [SocialMedia.slack]: 'https://join.slack.com/t/thenewboston/shared_invite/zt-hkw1b98m-X3oe6VPX6xenHvQeaXQbfg',
    [SocialMedia.twitter]: 'https://twitter.com/bucky_roberts',
  };

  return (
    <A className={clsx('MarketingButton', className)} href={customLink || urls[website]}>
      {images[website]}
    </A>
  );
};

export default MarketingButton;
