/* eslint-disable react/jsx-props-no-spreading */

import React, {FC, Suspense, useEffect, useState} from 'react';
import {useImage} from 'react-image';
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

export const getFormattedSrc = (src: string, size: number): string => {
  try {
    const updatedSize = getImageSizeBasedOnDeviceRatio(size);
    if (src.includes('github')) {
      const [path] = src.split('?');
      return `${path}?s=${updatedSize}`;
    }

    return src;
  } catch (error) {
    return '';
  }
};

const AvatarImgWithFallback: FC<AvatarProps> = ({className, size, src}) => {
  const [srcPrimary, setSrcPrimary] = useState<string>('');
  const {src: srcWithFallback} = useImage({srcList: [srcPrimary, DefaultUserAvatar]});

  useEffect(() => {
    setSrcPrimary(getFormattedSrc(src, size));
  }, [src, size]);

  return (
    <img
      alt="Avatar"
      className={clsx('Avatar', className)}
      crossOrigin="anonymous"
      data-testid="Avatar"
      height={size}
      key={srcWithFallback}
      src={srcWithFallback}
      width={size}
    />
  );
};

const Avatar: FC<AvatarProps> = ({className, size, ...props}) => {
  return (
    <Suspense
      fallback={
        <div
          className={clsx('Avatar', 'Avatar--placeholder', className)}
          data-testid="Avatar--placeholder"
          style={{minHeight: size, minWidth: size}}
        />
      }
    >
      <AvatarImgWithFallback className={className} size={size} {...props} />
    </Suspense>
  );
};

export default Avatar;
