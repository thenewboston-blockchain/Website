import React from 'react';
import clsx from 'clsx';
import {Icon} from '@thenewboston/ui';

import {A} from 'components';
import {SFC} from 'types/generic';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls, socialMediaFooterIcons} from 'utils/social-media';

interface ComponentProps {
  iconSize: number;
  totalSize: number;
  website: SocialMedia;
}

const SocialMediaIcon: SFC<ComponentProps> = ({className, iconSize, totalSize, website}) => {
  return (
    <A className={clsx('SocialMediaIcon', className)} href={socialMediaUrls[website]}>
      <Icon icon={socialMediaFooterIcons[website]} size={iconSize} totalSize={totalSize} />
    </A>
  );
};

export default SocialMediaIcon;
