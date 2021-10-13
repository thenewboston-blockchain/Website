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
    <S.ProgressiveImageContainer style={{height, width}} className={containerClassName}>
      <S.ProgressiveImagePlaceholder
        alt={alt}
        className={placeholderImageClassName}
        IsLoaded={isLoaded}
        src={placeholderSrc}
        height={height}
        width={width}
      />
      <S.ProgressiveImageReal
        alt={alt}
        className={realImageClassName}
        IsLoaded={isLoaded}
        src={realSrc}
        loading="lazy"
        height={height}
        width={width}
        onLoad={() => setIsLoaded(true)}
      />
    </S.ProgressiveImageContainer>
  );
};

export default ProgressiveImage;
