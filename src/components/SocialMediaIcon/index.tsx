import React, {FC} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {A} from 'components';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

interface ComponentProps {
  className?: string;
  iconSize: number;
  totalSize: number;
  website: SocialMedia;
}

const SocialMediaIcon: FC<ComponentProps> = ({className, iconSize, totalSize, website}) => {
  return (
    <A className={clsx('SocialMediaIcon', className)} href={socialMediaUrls[website]}>
      <Icon icon={IconType[website]} size={iconSize} totalSize={totalSize} />
    </A>
  );
};

export default SocialMediaIcon;
