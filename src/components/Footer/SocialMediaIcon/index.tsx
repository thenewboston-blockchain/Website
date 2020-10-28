import React, {FC} from 'react';
import clsx from 'clsx';

import FacebookLogo from 'assets/svgs/facebook.svg';
import GithubLogo from 'assets/svgs/github.svg';
import LinkedinLogo from 'assets/svgs/linkedin.svg';
import RedditLogo from 'assets/svgs/reddit.svg';
import SlackLogo from 'assets/svgs/slack.svg';
import TwitterLogo from 'assets/svgs/twitter.svg';
import YoutubeLogo from 'assets/svgs/youtube.svg';

import {A} from 'components';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

interface ComponentProps {
  className?: string;
  website: SocialMedia;
}

const SocialMediaIcon: FC<ComponentProps> = ({className, website}) => {
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
    <A className={clsx('SocialMediaIcon', className)} href={socialMediaUrls[website]}>
      <img alt={`${website} link`} src={images[website]} />
    </A>
  );
};

export default SocialMediaIcon;
