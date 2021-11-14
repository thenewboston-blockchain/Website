import React, {FC, useState} from 'react';

import * as S from './Styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Props = {
  imageUrls: string[];
};

const ImageCarousel: FC<Props> = ({imageUrls}) => {
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  return (
    <S.Container>
      <S.Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        swipeable
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
