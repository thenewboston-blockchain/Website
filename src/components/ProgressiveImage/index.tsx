import React, {useState} from 'react';
import {SFC} from 'types/generic';
// import {type} from 'os';
import * as S from './Styles';

// import './ProgressiveImage.scss';

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
    <S.ProgressiveImage className={containerClassName} style={{height, width}}>
      <S.ProgressiveImagePlaceholder
        IsLoaded={isLoaded}
        alt={alt}
        className={placeholderImageClassName}
        src={placeholderSrc}
        height={height}
        width={width}
      />
      <S.ProgressiveImageReal
        IsLoaded={isLoaded}
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
