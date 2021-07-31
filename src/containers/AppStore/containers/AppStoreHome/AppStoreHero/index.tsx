import React, {FC} from 'react';

import {Container, ProgressiveImage} from 'components';
import AppStoreHeroImage from '../../../assets/AppStoreHero.png';
import AppStoreHeroImagePlaceholder from '../../../assets/AppStoreHero.webp';
import './AppStoreHero.scss';

const AppStoreHero: FC = () => {
  return (
    <div className="AppStoreHero">
      <Container className="AppStoreHero__container">
        <div className="AppStoreHero__left">
          <h1 className="AppStoreHero__left-title">App Store</h1>
          <h2 className="AppStoreHero__left-subtitle">Download the apps from thenewboston App Store</h2>
        </div>
        <ProgressiveImage
          alt="App Store Hero Image"
          containerClassName="AppStoreHero__right"
          placeholderImageClassName="AppStoreHero__right-image"
          placeholderSrc={AppStoreHeroImagePlaceholder}
          realImageClassName="AppStoreHero__right-image"
          realSrc={AppStoreHeroImage}
          width={394}
          height={231}
        />
      </Container>
    </div>
  );
};

export default AppStoreHero;
