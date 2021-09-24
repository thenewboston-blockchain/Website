/* eslint-disable react/jsx-props-no-spreading */

import React, {Suspense, useEffect, useState} from 'react';
import {useImage} from 'react-image';

import DefaultUserAvatar from 'assets/images/default-avatar.png';
import {SFC} from 'types/generic';

import * as S from './Styles';

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

export type Shape = 'circle' | 'square';

export interface AvatarProps {
  bordered?: boolean;
  size: number;
  src: string;
  shape?: Shape;
  onClick?(): void;
}

const AvatarImgWithFallback: SFC<AvatarProps> = ({bordered, className, onClick, shape = 'circle', size, src}) => {
  const [srcPrimary, setSrcPrimary] = useState<string>('');
  const {src: srcWithFallback} = useImage({srcList: [srcPrimary, DefaultUserAvatar]});

  useEffect(() => {
    setSrcPrimary(getFormattedSrc(src, size));
  }, [src, size]);

  return (
    <S.Avatar
      alt="Avatar"
      bordered={bordered}
      className={className}
      clickable={!!onClick}
      data-testid="Avatar"
      height={size}
      key={srcWithFallback}
      shape={shape}
      src={srcWithFallback}
      onClick={onClick}
      width={size}
    />
  );
};

const Avatar: SFC<AvatarProps> = ({className, size, shape, ...props}) => {
  return (
    <Suspense
      fallback={
        <S.Placeholder
          className={className}
          data-testid="Avatar--placeholder"
          shape={shape}
          style={{height: size, width: size}}
        />
      }
    >
      <AvatarImgWithFallback className={className} size={size} shape={shape} {...props} />
    </Suspense>
  );
};

export default Avatar;
