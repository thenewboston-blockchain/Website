import React, {FC} from 'react';

import {PageTitle} from 'components';
import HomeHero from './HomeHero';
import HomeSpeed from './HomeSpeed';
import DownloadWallet from './DownloadWallet';
import Links from './Links';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <HomeSpeed />
    <DownloadWallet />
    <Links />
  </>
);

export default Home;
