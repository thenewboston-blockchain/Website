import React, {FC, useEffect, useState} from 'react';
import clsx from 'clsx';

import DefaultUserAvatar from 'assets/images/default-avatar.png';

import './Avatar.scss';

export interface AvatarProps {
  className?: string;
  size: number;
  src: string;
}

export const getImageSizeBasedOnDeviceRatio = (size: number): number => {
  const {devicePixelRatio} = window;
  return size * devicePixelRatio;
};

const Avatar: FC<AvatarProps> = ({className, size, src}) => {
  const [source, setSource] = useState<string>('');

  useEffect(() => {
    try {
      const updatedSize = getImageSizeBasedOnDeviceRatio(size);
      if (src.includes('github')) {
        const [path] = src.split('?');
        setSource(`${path}?s=${updatedSize}`);
      } else if (src.includes('slack')) {
        const srcSplitArr = src.split('-');
        srcSplitArr.pop();
        const path = srcSplitArr.join('-');
        setSource(`${path}-${updatedSize}`);
      } else {
        setSource(src);
      }
    } catch (error) {
      setSource('');
    }
  }, [src, size]);

  return source?.length ? (
    <img
      alt="Avatar"
      className={clsx('Avatar', className)}
      data-testid="Avatar"
      height={size}
      loading="lazy"
      src={source}
      width={size}
    />
  ) : (
    <img
      alt="Avatar"
      className={clsx('Avatar', 'Avater--placeholder', className)}
      data-testid="Avatar--placeholder"
      height={size}
      loading="lazy"
      src={DefaultUserAvatar}
      width={size}
    />
  );
};

export default Avatar;
