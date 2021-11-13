import React from 'react';

import {SFC} from 'types/generic';
import ImageCarousel from '../../../components/ImageCarousel';

import * as S from './Styles';

type Props = {
  imageUrls: string[];
};

const AppDetailsSlider: SFC<Props> = ({className, imageUrls}) => {
  return (
    <S.Container className={className}>
      <S.Main>
        <ImageCarousel imageUrls={imageUrls} />
      </S.Main>
    </S.Container>
  );
};

export default AppDetailsSlider;
