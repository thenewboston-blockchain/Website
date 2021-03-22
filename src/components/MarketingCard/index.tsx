import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls, socialMediaHandles, socialMediaDescriptions} from 'utils/social-media';

import DiscordLogo from 'assets/logos/Discord.png';
import FacebookLogo from 'assets/logos/Facebook.png';
import GitHubLogo from 'assets/logos/GitHub.png';
import InstagramLogo from 'assets/logos/Instagram.png';
import LinkedInLogo from 'assets/logos/LinkedIn.png';
import RedditLogo from 'assets/logos/Reddit.png';
import TwitchLogo from 'assets/logos/Twitch.png';
import TwitterLogo from 'assets/logos/Twitter.png';
import YouTubeLogo from 'assets/logos/YouTube.png';

import './MarketingCard.scss';

export interface MarketingCardProps {
  className?: string;
  customLink?: string;
  website: SocialMedia;
}

const MarketingCard: FC<MarketingCardProps> = ({className, customLink, website}) => {
  const renderImage = (src: any) => (
    <img
      alt={website}
      className={clsx('MarketingCard__img', {...bemify(className, '__img')})}
      data-testid="MarketingCard__img"
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
    <A className={clsx('MarketingCard', className)} href={customLink || socialMediaUrls[website]}>
      {images[website]}
      <div
        className={clsx('MarketingCard__handle', {...bemify(className, '__handle')})}
        data-testid="MarketingCard__handle"
      >
        {socialMediaHandles[website]}
      </div>
      <div
        className={clsx('MarketingCard__description', {...bemify(className, '__description')})}
        data-testid="MarketingCard__description"
      >
        <div
          className={clsx('MarketingCard__description__handle', {...bemify(className, '__description__handle')})}
          data-testid="MarketingCard__description__handle"
        >
          {socialMediaHandles[website]}
        </div>{' '}
        {socialMediaDescriptions[website]}
      </div>
    </A>
  );
};

export default MarketingCard;
