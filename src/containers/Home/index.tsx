import React, {FC} from 'react';

import {PageTitle} from 'components';
import HomeHero from './HomeHero';
import HomeValues from './HomeValues';
import GetStarted from './GetStarted';
import HomeFaq from './HomeFaq';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <HomeValues />
    <GetStarted />
    <HomeFaq />
  </>
);

export default Home;
