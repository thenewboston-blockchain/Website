import React, {FC} from 'react';

import ImageCarousel from '../../../components/ImageCarousel';

import * as S from './Styles';

type Props = {
  className?: string;
  imageUrls: string[];
};

const AppDetailsSlider: FC<Props> = ({className, imageUrls}) => {
  return (
    <S.Container className={className}>
      <S.Main>
        <ImageCarousel imageUrls={imageUrls} />
      </S.Main>
    </S.Container>
  );
};

export default AppDetailsSlider;
