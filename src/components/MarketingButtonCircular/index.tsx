import React, {FC, memo} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {SocialMediaIcon} from 'types/social-media';
import {getCustomClassNames} from 'utils/components';

import GitHubIcon from './icons/GitHubIcon.png';
import SlackIcon from './icons/SlackIcon.png';
import YoutubeIcon from './icons/YoutubeIcon.png';

import './MarketingButtonCircular.scss';

interface ComponentProps {
  className?: string;
  customLink?: string;
  website: SocialMediaIcon;
}

const MarketingButtonCircular: FC<ComponentProps> = ({className, customLink, website}) => {
  const renderImage = (src: string) => (
    <img
      alt={website}
      className={clsx('MarketingButtonCircular__img', {...getCustomClassNames(className, '__img', true)})}
      src={src}
    />
  );

  const images = {
    githubIcon: renderImage(GitHubIcon),
    slackIcon: renderImage(SlackIcon),
    youtubeIcon: renderImage(YoutubeIcon),
  };

  const urls = {
    [SocialMediaIcon.github]: 'https://github.com/thenewboston-developers',
    [SocialMediaIcon.slack]: 'https://join.slack.com/t/thenewboston/shared_invite/zt-hkw1b98m-X3oe6VPX6xenHvQeaXQbfg',
    [SocialMediaIcon.youtube]: 'https://www.youtube.com/thenewboston',
  };

  return (
    <A className={clsx('MarketingButtonCircular', className)} href={customLink || urls[website]}>
      {images[website]}
    </A>
  );
};

export default memo(MarketingButtonCircular);
