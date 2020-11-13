import {PageTitle} from 'components';
import React, {FC} from 'react';

import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';
import HomeSteps from './HomeSteps';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <HomeSteps />
    <HomeInstantTransactions />
  </>
);

export default Home;
