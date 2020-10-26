import React, {FC} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {SocialMediaIcons} from 'types/social-media';
import {getCustomClassNames} from 'utils/components';

import GitHubIcon from './icons/GitHubIcon.png';
import SlackIcon from './icons/SlackIcon.png';
import YoutubeIcon from './icons/YoutubeIcon.png';

import './MarketingButtonCircular.scss';

interface ComponentProps {
  className?: string;
  customLink?: string;
  website: SocialMediaIcons;
}

const MarketingButtonCircular: FC<ComponentProps> = ({className, customLink, website}) => {
  const renderImage = (src: any) => (
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
    [SocialMediaIcons.githubIcon]: 'https://github.com/thenewboston-developers',
    [SocialMediaIcons.slackIcon]:
      'https://join.slack.com/t/thenewboston/shared_invite/zt-hkw1b98m-X3oe6VPX6xenHvQeaXQbfg',
    [SocialMediaIcons.youtubeIcon]: 'https://www.youtube.com/thenewboston',
  };

  return (
    <A className={clsx('MarketingButtonCircular', className)} href={customLink || urls[website]}>
      {images[website]}
    </A>
  );
};

export default MarketingButtonCircular;
