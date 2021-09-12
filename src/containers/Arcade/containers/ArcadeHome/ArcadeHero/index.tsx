import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';
import ArcadeHero1366 from '../../../assets/ArcadeHero1366.png';
import ArcadeHero768 from '../../../assets/ArcadeHero768.png';
import ArcadeHero480 from '../../../assets/ArcadeHero480.png';
import * as S from './Styles';

const ArcadeHero: FC = () => {
  const {width} = useWindowDimensions();
  return (
    <S.Background>
      <S.Container>
        <S.LeftContainer>
          <S.TnbText>thenewboston</S.TnbText>
          <S.Title>Arcade</S.Title>
          <S.SubTitle>Download the apps from thenewboston Arcade</S.SubTitle>
        </S.LeftContainer>
        {width < 1366 && <S.RightImage alt="Arcade Hero" src={width > 768 ? ArcadeHero768 : ArcadeHero480} />}
      </S.Container>
      {width >= 1366 && <S.ImageOuter alt="Arcade Hero" src={ArcadeHero1366} />}
      <S.YellowCircleBorder>
        <S.YellowCircle />
      </S.YellowCircleBorder>
      <S.OrangeCircle />
    </S.Background>
  );
};

export default ArcadeHero;
