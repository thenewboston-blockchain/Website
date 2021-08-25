import React from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {A} from 'components';
import {SFC} from 'types/generic';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

interface ComponentProps {
  iconSize: number;
  totalSize: number;
  website: SocialMedia;
}

const SocialMediaIcon: SFC<ComponentProps> = ({className, iconSize, totalSize, website}) => {
  return (
    <A className={clsx('SocialMediaIcon', className)} href={socialMediaUrls[website]}>
      <Icon icon={IconType[website] as IconType} size={iconSize} totalSize={totalSize} />
    </A>
  );
};

export default SocialMediaIcon;
