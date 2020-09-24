import React, {FC} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {getCustomClassNames} from 'utils/components';

import GitHubLogo from './GitHubLogo.png';
import RedditLogo from './RedditLogo.png';
import SlackLogo from './SlackLogo.png';
import './MarketingButton.scss';

interface ComponentProps {
  className?: string;
  website: 'github' | 'reddit' | 'slack';
}

const MarketingButton: FC<ComponentProps> = ({className, website}) => {
  const images = {
    github: (
      <img
        alt={website}
        className={clsx('MarketingButton__img', {...getCustomClassNames(className, '__img', true)})}
        src={GitHubLogo}
      />
    ),
    reddit: (
      <img
        alt={website}
        className={clsx('MarketingButton__img', {...getCustomClassNames(className, '__img', true)})}
        src={RedditLogo}
      />
    ),
    slack: (
      <img
        alt={website}
        className={clsx('MarketingButton__img', {...getCustomClassNames(className, '__img', true)})}
        src={SlackLogo}
      />
    ),
  };

  const urls = {
    github: 'https://github.com/thenewboston-developers',
    reddit: 'https://www.reddit.com/r/thenewboston/',
    slack: 'https://join.slack.com/t/thenewboston/shared_invite/zt-hkw1b98m-X3oe6VPX6xenHvQeaXQbfg',
  };

  return (
    <A className={clsx('MarketingButton', className)} href={urls[website]}>
      {images[website]}
    </A>
  );
};

export default MarketingButton;
