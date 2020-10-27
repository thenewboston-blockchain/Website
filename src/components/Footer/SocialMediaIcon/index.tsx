import React, {FC} from 'react';

import FacebookLogo from 'assets/svgs/facebook.svg';
import GithubLogo from 'assets/svgs/github.svg';
import LinkedinLogo from 'assets/svgs/linkedin.svg';
import RedditLogo from 'assets/svgs/reddit.svg';
import SlackLogo from 'assets/svgs/slack.svg';
import TwitterLogo from 'assets/svgs/twitter.svg';
import YoutubeLogo from 'assets/svgs/youtube.svg';

import {A} from 'components';

import {SocialMedia} from 'types/social-media';

interface ComponentProps {
  className?: string;
  website: SocialMedia;
}

const SocialMediaIcon: FC<ComponentProps> = ({className, website}) => {
  const urls = {
    [SocialMedia.facebook]: 'https://www.facebook.com/TheNewBoston-464114846956315/',
    [SocialMedia.github]: 'https://github.com/thenewboston-developers',
    [SocialMedia.linkedin]: 'https://www.linkedin.com/company/thenewboston-developers/',
    [SocialMedia.reddit]: 'https://www.reddit.com/r/thenewboston/',
    [SocialMedia.slack]: 'https://join.slack.com/t/thenewboston/shared_invite/zt-hkw1b98m-X3oe6VPX6xenHvQeaXQbfg',
    [SocialMedia.twitter]: 'https://twitter.com/bucky_roberts',
    [SocialMedia.youtube]: 'https://www.youtube.com/user/thenewboston',
  };

  const images = {
    [SocialMedia.facebook]: FacebookLogo,
    [SocialMedia.github]: GithubLogo,
    [SocialMedia.linkedin]: LinkedinLogo,
    [SocialMedia.reddit]: RedditLogo,
    [SocialMedia.slack]: SlackLogo,
    [SocialMedia.twitter]: TwitterLogo,
    [SocialMedia.youtube]: YoutubeLogo,
  };

  return (
    <A className={className} href={urls[website]}>
      <img alt={`${website} link`} src={images[website]} />
    </A>
  );
};

export default SocialMediaIcon;
