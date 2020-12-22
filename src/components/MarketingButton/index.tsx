import React, {FC} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {getCustomClassNames} from 'utils/components';
import {socialMediaUrls} from 'utils/social-media';

import DiscordLogo from './logos/DiscordLogo.png';
import FacebookLogo from './logos/FacebookLogo.png';
import GitHubLogo from './logos/GitHubLogo.png';
import LinkedInLogo from './logos/LinkedInLogo.png';
import RedditLogo from './logos/RedditLogo.png';
import SlackLogo from './logos/SlackLogo.png';
import TwitchLogo from './logos/TwitchLogo.png';
import TwitterLogo from './logos/TwitterLogo.png';
import YouTubeLogo from './logos/YouTubeLogo.png';

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
    discord: renderImage(DiscordLogo),
    facebook: renderImage(FacebookLogo),
    github: renderImage(GitHubLogo),
    linkedin: renderImage(LinkedInLogo),
    reddit: renderImage(RedditLogo),
    slack: renderImage(SlackLogo),
    twitch: renderImage(TwitchLogo),
    twitter: renderImage(TwitterLogo),
    youtube: renderImage(YouTubeLogo),
  };

  return (
    <A className={clsx('MarketingButton', className)} href={customLink || socialMediaUrls[website]}>
      {images[website]}
    </A>
  );
};

export default MarketingButton;
