import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';
import AppStoreHero1366 from '../../../assets/AppStoreHero1366.png';
import AppStoreHero768 from '../../../assets/AppStoreHero768.png';
import AppStoreHero480 from '../../../assets/AppStoreHero480.png';
import * as S from './Styles';

const AppStoreHero: FC = () => {
  const {width} = useWindowDimensions();
  return (
    <S.Background>
      <S.Container>
        <S.LeftContainer>
          <S.TnbText>thenewboston</S.TnbText>
          <S.Title>App Store</S.Title>
          <S.SubTitle>Download the apps from thenewboston App Store</S.SubTitle>
        </S.LeftContainer>
        {width < 1366 && <S.RightImage alt="App Store Hero" src={width > 768 ? AppStoreHero768 : AppStoreHero480} />}
      </S.Container>
      {width >= 1366 && <S.ImageOuter alt="App Store Hero" src={AppStoreHero1366} />}
      <S.YellowCircleBorder>
        <S.YellowCircle />
      </S.YellowCircleBorder>
      <S.OrangeCircle />
    </S.Background>
  );
};

export default AppStoreHero;
