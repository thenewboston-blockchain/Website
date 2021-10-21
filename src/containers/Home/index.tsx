import React, {FC} from 'react';

import {PageTitle} from 'components';
import HomeHero from './HomeHero';
import HomeSpeed from './HomeSpeed';
import DownloadWallet from './DownloadWallet';
import Links from './Links';
import LearnToDevelop from './LearnToDevelop';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <LearnToDevelop />
    <HomeSpeed />
    <DownloadWallet />
    <Links />
  </>
);

export default Home;
