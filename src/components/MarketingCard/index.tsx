import React from 'react';

import {SFC} from 'types/generic';
import {SocialMedia} from 'types/social-media';
import {socialMediaDescriptions, socialMediaHandles, socialMediaUrls} from 'utils/social-media';

import DiscordLogo from 'assets/logos/Discord.png';
import FacebookLogo from 'assets/logos/Facebook.png';
import GitHubLogo from 'assets/logos/GitHub.png';
import InstagramLogo from 'assets/logos/Instagram.png';
import LinkedInLogo from 'assets/logos/LinkedIn.png';
import PinterestLogo from 'assets/logos/Pinterest.png';
import RedditLogo from 'assets/logos/Reddit.png';
import TNBGamingLogo from 'assets/logos/TNBGaming.png';
import TwitchLogo from 'assets/logos/Twitch.png';
import TwitterLogo from 'assets/logos/Twitter.png';
import YouTubeLogo from 'assets/logos/YouTube.png';

import * as S from './Styles';

export interface MarketingCardProps {
  customLink?: string;
  website: SocialMedia;
}

const MarketingCard: SFC<MarketingCardProps> = ({customLink, website}) => {
  const renderImage = (src: any) => <S.Image alt={website} data-testid="MarketingCard__img" src={src} />;

  const images = {
    discord: renderImage(DiscordLogo),
    facebook: renderImage(FacebookLogo),
    gaming: renderImage(TNBGamingLogo),
    github: renderImage(GitHubLogo),
    instagram: renderImage(InstagramLogo),
    linkedin: renderImage(LinkedInLogo),
    pinterest: renderImage(PinterestLogo),
    reddit: renderImage(RedditLogo),
    twitch: renderImage(TwitchLogo),
    twitter: renderImage(TwitterLogo),
    youtube: renderImage(YouTubeLogo),
  };

  return (
    <S.LinkContainer href={customLink || socialMediaUrls[website]}>
      {images[website]}
      <S.Handle data-testid="MarketingCard__handle">{socialMediaHandles[website]}</S.Handle>
      <S.Description data-testid="MarketingCard__description">
        <S.DescriptionHandle data-testid="MarketingCard__description__handle">
          {socialMediaHandles[website]}
        </S.DescriptionHandle>{' '}
        {socialMediaDescriptions[website]}
      </S.Description>
    </S.LinkContainer>
  );
};

export default MarketingCard;
