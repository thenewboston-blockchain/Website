import React, {FC} from 'react';

import {PageTitle} from 'components';
import HomeHero from './HomeHero';
import DownloadWallet from './DownloadWallet';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <DownloadWallet />
  </>
);

export default Home;
