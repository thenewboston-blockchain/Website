import React, {useState} from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './ProgressiveImage.scss';

type Props = {
  alt: string;
  containerClassName?: string;
  height?: number;
  placeholderImageClassName?: string;
  placeholderSrc: string; // src to a much smaller version of the real image
  realImageClassName?: string;
  realSrc: string;
  width?: number;
};

const ProgressiveImage: SFC<Props> = ({
  alt,
  containerClassName,
  height,
  placeholderImageClassName,
  placeholderSrc,
  realImageClassName,
  realSrc,
  width,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={clsx('ProgressiveImage', containerClassName)} style={{height, width}}>
      <img
        alt={alt}
        className={clsx(
          'ProgressiveImage-placeholder',
          {
            'ProgressiveImage-placeholder--loaded': isLoaded,
          },
          placeholderImageClassName,
        )}
        src={placeholderSrc}
        height={height}
        width={width}
      />
      <img
        alt={alt}
        className={clsx(
          'ProgressiveImage-real',
          {
            'ProgressiveImage-real--loaded': isLoaded,
          },
          realImageClassName,
        )}
        src={realSrc}
        loading="lazy"
        height={height}
        width={width}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ProgressiveImage;
