import React, {FC} from 'react';
import clsx from 'clsx';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {getCustomClassNames} from 'utils/components';
import {socialMediaUrls, socialMediaHandles, socialMediaDescriptions} from 'utils/social-media';

import FacebookLogo from 'assets/logos/Facebook.png';
import GitHubLogo from 'assets/logos/GitHub.png';
import LinkedInLogo from 'assets/logos/LinkedIn.png';
import RedditLogo from 'assets/logos/Reddit.png';
import SlackLogo from 'assets/logos/Slack.png';
import TwitterLogo from 'assets/logos/Twitter.png';
import YouTubeLogo from 'assets/logos/YouTube.png';

import './MarketingCard.scss';

interface ComponentProps {
  className?: string;
  customLink?: string;
  website: SocialMedia;
}

const MarketingCard: FC<ComponentProps> = ({className, customLink, website}) => {
  const renderImage = (src: any) => (
    <img
      alt={website}
      className={clsx('MarketingCard__img', {...getCustomClassNames(className, '__img', true)})}
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
    youtube: renderImage(YouTubeLogo),
  };

  return (
    <A className={clsx('MarketingCard', className)} href={customLink || socialMediaUrls[website]}>
      {images[website]}
      <div className="MarketingCard__handle">{socialMediaHandles[website]}</div>
      <div className="MarketingCard__description">
        <div className="MarketingCard__description__handle">{socialMediaHandles[website]}</div>{' '}
        {socialMediaDescriptions[website]}
      </div>
    </A>
  );
};

export default MarketingCard;
