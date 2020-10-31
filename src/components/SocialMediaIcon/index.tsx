import React, {FC} from 'react';
import clsx from 'clsx';

import {A, Icon, IconType} from 'components';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

interface ComponentProps {
  className?: string;
  website: SocialMedia;
  iconSize: number;
}

const SocialMediaIcon: FC<ComponentProps> = ({className, website, iconSize}) => {
  return (
    <A className={clsx('SocialMediaIcon', className)} href={socialMediaUrls[website]}>
      <Icon icon={IconType[website]} size={iconSize} />
    </A>
  );
};

export default SocialMediaIcon;
