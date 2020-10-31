import React, {FC} from 'react';
import clsx from 'clsx';

import {A, Icon, IconType} from 'components';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

interface ComponentProps {
  className?: string;
  website: SocialMedia;
}

const SocialMediaIcon: FC<ComponentProps> = ({className, website}) => {
  return (
    <A className={clsx('SocialMediaIcon', className)} href={socialMediaUrls[website]}>
      <Icon icon={IconType[website]} size={28} />
    </A>
  );
};

export default SocialMediaIcon;
