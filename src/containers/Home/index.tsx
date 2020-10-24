import React, {FC} from 'react';

import HomeFooter from './HomeFooter';
import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';
import HomeSteps from './HomeSteps';

import './Home.scss';

const Home: FC = () => (
  <div className="Home">
    <HomeHero />
    <HomeSteps />
    <HomeInstantTransactions />
    <HomeFooter />
  </div>
);

export default Home;
