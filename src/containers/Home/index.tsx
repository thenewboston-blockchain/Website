import React, {FC} from 'react';

import {PageTitle} from 'components';
import HomeHero from './HomeHero';
import HomeSpeed from './HomeSpeed';
import DownloadWallet from './DownloadWallet';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <HomeSpeed />
    <DownloadWallet />
  </>
);

export default Home;
