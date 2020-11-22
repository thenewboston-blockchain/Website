import React, {FC, useEffect, useState} from 'react';
import clsx from 'clsx';

import './Avatar.scss';

interface ComponentProps {
  alt: string;
  className?: string;
  size: number;
  src: string;
}

const getImageSizeBasedOnDeviceRatio = (size: number): number => {
  const {devicePixelRatio} = window;
  return size * devicePixelRatio;
};

const Avatar: FC<ComponentProps> = ({alt, className, size, src}) => {
  const [source, setSource] = useState<string>('');

  useEffect(() => {
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
  }, [src, size]);

  return source?.length ? (
    <img alt={alt} className={clsx('Avatar', className)} height={size} loading="lazy" src={source} width={size} />
  ) : (
    <div className={clsx('Avatar Placeholder', className)} style={{height: size, width: size}} />
  );
};

export default Avatar;
