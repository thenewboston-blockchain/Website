import React, {FC, useState} from 'react';
import {IconType} from '@thenewboston/ui';

import {useWindowDimensions} from 'hooks';

import * as S from './Styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
  imageUrls: string[];
};

const ImageCarousel: FC<Props> = ({imageUrls}) => {
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const {width} = useWindowDimensions();

  const iconSize = width > 992 ? 32 : 24;

  return (
    <S.Container>
      <S.Carousel
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        swipeable
        renderArrowNext={(onClickHandler, hasNext) =>
          // eslint-disable-next-line no-nested-ternary
          width > 480 ? (
            hasNext ? (
              <S.RightArrow icon={IconType.arrowRight} onClick={onClickHandler} size={iconSize} totalSize={iconSize} />
            ) : (
              <S.DisabledRightArrow
                icon={IconType.arrowRight}
                onClick={onClickHandler}
                size={iconSize}
                totalSize={iconSize}
              />
            )
          ) : null
        }
        renderArrowPrev={(onClickHandler, hasPrev) =>
          // eslint-disable-next-line no-nested-ternary
          width > 480 ? (
            hasPrev ? (
              <S.LeftArrow icon={IconType.arrowLeft} onClick={onClickHandler} size={iconSize} totalSize={iconSize} />
            ) : (
              <S.DisabledLeftArrow
                icon={IconType.arrowLeft}
                onClick={onClickHandler}
                size={iconSize}
                totalSize={iconSize}
              />
            )
          ) : null
        }
        selectedItem={selectedThumbnailIndex}
        onChange={(index) => setSelectedThumbnailIndex(index)}
      >
        {imageUrls.map((imageUrl, index) => {
          return <S.MainImage alt="App" key={index} src={imageUrl} />;
        })}
      </S.Carousel>
      <S.ThumbnailContainer>
        {imageUrls.map((imageUrl, index) => {
          return (
            <S.Thumbnail
              alt="App"
              isSelected={index === selectedThumbnailIndex}
              key={index}
              onClick={() => setSelectedThumbnailIndex(index)}
              src={imageUrl}
            />
          );
        })}
      </S.ThumbnailContainer>
    </S.Container>
  );
};

export default ImageCarousel;
