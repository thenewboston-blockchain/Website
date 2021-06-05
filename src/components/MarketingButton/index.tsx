import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

import DiscordLogo from './logos/DiscordLogo.png';
import FacebookLogo from './logos/FacebookLogo.png';
import GitHubLogo from './logos/GitHubLogo.png';
import InstagramLogo from './logos/InstagramLogo.png';
import LinkedInLogo from './logos/LinkedInLogo.png';
import RedditLogo from './logos/RedditLogo.png';
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
      className={clsx('MarketingButton__img', {...bemify(className, '__img')})}
      data-testid="MarketingButton__img"
      src={src}
    />
  );

  const images = {
    discord: renderImage(DiscordLogo),
    facebook: renderImage(FacebookLogo),
    github: renderImage(GitHubLogo),
    instagram: renderImage(InstagramLogo),
    linkedin: renderImage(LinkedInLogo),
    reddit: renderImage(RedditLogo),
    twitch: renderImage(TwitchLogo),
    twitter: renderImage(TwitterLogo),
    youtube: renderImage(YouTubeLogo),
  };

  return (
    <A
      className={clsx('MarketingButton', className)}
      dataTestId="MarketingButton"
      href={customLink || socialMediaUrls[website]}
    >
      {images[website]}
    </A>
  );
};

export default MarketingButton;
