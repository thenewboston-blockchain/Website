import React, {useState} from 'react';
import clsx from 'clsx';

import './ProgressiveImage.scss';

type Props = {
  alt: string;
  placeholderSrc: string; // src to a much smaller version of the real image
  realSrc: string;
  width?: number;
  height?: number;
  containerClassName?: string;
  placeholderImageClassName?: string;
  realImageClassName?: string;
};

const ProgressiveImage = ({
  alt,
  containerClassName,
  height,
  placeholderImageClassName,
  placeholderSrc,
  realImageClassName,
  realSrc,
  width,
}: Props) => {
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
