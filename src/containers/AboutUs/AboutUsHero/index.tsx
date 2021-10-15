import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';

import HeroV2 from './HeroV2.png';
import HeroV2Placeholder from './HeroV2Placeholder.webp';

import * as S from './Styles';

const AboutUsHero: FC = () => {
  const {width} = useWindowDimensions();

  return (
    <S.Container>
      <S.LeftContainer>
        <S.AboutUsText>About Us</S.AboutUsText>
        <S.Title>We're Building a Better Economy</S.Title>
        <S.Subtitle>
          TheNewBoston is a blockchain platform for everyone. We are an open source community developing decentralized
          apps with the goal of helping the whole world move into the cryptocurrency era.
        </S.Subtitle>
      </S.LeftContainer>
      {width > 414 && (
        <S.HeroImage
          alt="About Us Hero Image"
          containerClassName="AboutUs__HeroImage"
          placeholderSrc={HeroV2Placeholder}
          realSrc={HeroV2}
        />
      )}
    </S.Container>
  );
};

export default AboutUsHero;
