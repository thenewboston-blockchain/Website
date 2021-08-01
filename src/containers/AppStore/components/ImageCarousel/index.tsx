import React, {FC, useState} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {Carousel} from 'react-responsive-carousel';

import {useWindowDimensions} from 'hooks';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.scss';

type Props = {
  imageUrls: string[];
};

const ImageCarousel: FC<Props> = ({imageUrls}) => {
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const {width} = useWindowDimensions();

  const iconSize = width > 992 ? 32 : 24;

  return (
    <div className="ImageCarousel">
      <Carousel
        className="ImageCarousel__carousel"
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        swipeable
        renderArrowNext={(onClickHandler, hasNext) =>
          width > 480 ? (
            <Icon
              className={clsx('ImageCarousel__arrow', 'ImageCarousel__arrow--right', {
                'ImageCarousel__arrow--disabled': !hasNext,
              })}
              icon={IconType.arrowRight}
              onClick={onClickHandler}
              size={iconSize}
              totalSize={iconSize}
            />
          ) : null
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          width > 480 ? (
            <Icon
              className={clsx('ImageCarousel__arrow', 'ImageCarousel__arrow--left', {
                'ImageCarousel__arrow--disabled': !hasPrev,
              })}
              icon={IconType.arrowLeft}
              onClick={onClickHandler}
              size={iconSize}
              totalSize={iconSize}
            />
          ) : null
        }
        selectedItem={selectedThumbnailIndex}
        onChange={(index) => setSelectedThumbnailIndex(index)}
      >
        {imageUrls.map((imageUrl, index) => {
          return <img alt="App" className="ImageCarousel__image" key={index} src={imageUrl} />;
        })}
      </Carousel>
      <div className="ImageCarousel__thumbnail">
        {imageUrls.map((imageUrl, index) => {
          return (
            <img
              alt="App"
              className={clsx('ImageCarousel__thumbnail-image', {
                'ImageCarousel__thumbnail-image--selected': index === selectedThumbnailIndex,
              })}
              key={index}
              onClick={() => setSelectedThumbnailIndex(index)}
              src={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
