import React, {FC} from 'react';

import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';
import HomeSteps from './HomeSteps';

const Home: FC = () => (
  <>
    <HomeHero />
    <HomeSteps />
    <HomeInstantTransactions />
  </>
);

export default Home;
