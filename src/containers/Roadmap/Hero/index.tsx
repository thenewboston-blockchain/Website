import React from 'react';

import ArrowImage from '../assets/Arrow.svg';

import * as S from './Styles';

const Hero: React.FC = () => {
  return (
    <S.Container>
      <S.TNBText>thenewboston's</S.TNBText>
      <S.RoadmapTextContainer>
        <S.RoadmapText>2022 Roadmap</S.RoadmapText>
        <S.RoadmapArrow alt="Roadmap Arrow" src={ArrowImage} />
      </S.RoadmapTextContainer>
    </S.Container>
  );
};

export default Hero;
