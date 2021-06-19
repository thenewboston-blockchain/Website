import React, {useState} from 'react';
import clsx from 'clsx';

import './ImageWithBlurredPlaceholder.scss';

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

const ImageWithBlurredPlaceholder = ({
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
    <div className={clsx('ImageWithBlurredPlaceholder', containerClassName)} style={{height, width}}>
      <img
        alt={alt}
        className={clsx(
          'ImageWithBlurredPlaceholder-placeholder',
          {
            'ImageWithBlurredPlaceholder-placeholder--loaded': isLoaded,
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
          'ImageWithBlurredPlaceholder-real',
          {
            'ImageWithBlurredPlaceholder-real--loaded': isLoaded,
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

export default ImageWithBlurredPlaceholder;
