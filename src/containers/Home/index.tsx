import React, {FC} from 'react';

import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';
import HomeSteps from './HomeSteps';

import './Home.scss';

const Home: FC = () => (
  <div className="Home">
    <HomeHero />
    <HomeSteps />
    <HomeInstantTransactions />
  </div>
);

export default Home;
