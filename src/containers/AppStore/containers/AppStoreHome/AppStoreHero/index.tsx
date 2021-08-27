import React, {FC} from 'react';

import {Container} from 'components';
import {useWindowDimensions} from 'hooks';
import AppStoreHero1366 from '../../../assets/AppStoreHero1366.png';
import AppStoreHero768 from '../../../assets/AppStoreHero768.png';
import AppStoreHero480 from '../../../assets/AppStoreHero480.png';
import './AppStoreHero.scss';

const AppStoreHero: FC = () => {
  const {width} = useWindowDimensions();
  return (
    <div className="AppStoreHero">
      <Container className="AppStoreHero__container">
        <div className="AppStoreHero__left">
          <h3 className="AppStoreHero__left-tnb">thenewboston</h3>
          <h1 className="AppStoreHero__left-title">App Store</h1>
          <h2 className="AppStoreHero__left-subtitle">Download the apps from thenewboston App Store</h2>
        </div>
        {width < 1366 && (
          <img
            alt="App Store Hero"
            className="AppStoreHero__right"
            src={width > 768 ? AppStoreHero768 : AppStoreHero480}
          />
        )}
      </Container>
      {width >= 1366 && <img alt="App Store Hero" className="AppStoreHero__outside" src={AppStoreHero1366} />}
      <div className="AppStoreHero__circle-yellow">
        <div className="AppStoreHero__circle-yellow--inner" />
      </div>
      <div className="AppStoreHero__circle-orange" />
    </div>
  );
};

export default AppStoreHero;
