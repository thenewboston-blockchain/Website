import {PageTitle} from 'components';
import React, {FC} from 'react';

import HomeHero from './HomeHero';
import HomeValues from './HomeValues';
import GetStarted from './GetStarted';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <HomeValues />
    <GetStarted />
  </>
);

export default Home;
