import React, {FC} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {getCustomClassNames} from 'utils/components';

import GitHubLogo from './GitHubLogo.png';
import LinkedInLogo from './LinkedInLogo.png';
import RedditLogo from './RedditLogo.png';
import SlackLogo from './SlackLogo.png';

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
    github: renderImage(GitHubLogo),
    linkedin: renderImage(LinkedInLogo),
    reddit: renderImage(RedditLogo),
    slack: renderImage(SlackLogo),
  };

  const urls = {
    [SocialMedia.github]: 'https://github.com/thenewboston-developers',
    [SocialMedia.linkedin]: 'https://www.linkedin.com/company/thenewboston-developers/',
    [SocialMedia.reddit]: 'https://www.reddit.com/r/thenewboston/',
    [SocialMedia.slack]: 'https://join.slack.com/t/thenewboston/shared_invite/zt-hkw1b98m-X3oe6VPX6xenHvQeaXQbfg',
  };

  return (
    <A className={clsx('MarketingButton', className)} href={customLink || urls[website]}>
      {images[website]}
    </A>
  );
};

export default MarketingButton;
