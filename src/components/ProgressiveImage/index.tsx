import clsx from 'clsx';
import React, {useState} from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

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
  className,
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
    <S.ProgressiveImage className={clsx(containerClassName, className)} style={{height, width}}>
      <S.ProgressiveImagePlaceholder
        isLoaded={isLoaded}
        alt={alt}
        className={placeholderImageClassName}
        src={placeholderSrc}
        height={height}
        width={width}
      />
      <S.ProgressiveImageReal
        isLoaded={isLoaded}
        alt={alt}
        className={realImageClassName}
        src={realSrc}
        loading="lazy"
        height={height}
        width={width}
        onLoad={() => setIsLoaded(true)}
      />
    </S.ProgressiveImage>
  );
};

export default ProgressiveImage;
