import {PageTitle} from 'components';
import React, {FC} from 'react';

import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';
import HomeValues from './HomeValues';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <HomeValues />
    <HomeInstantTransactions />
  </>
);

export default Home;
