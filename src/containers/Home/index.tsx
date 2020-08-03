import React, {FC} from 'react';

import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';

import './Home.scss';

const Home: FC = () => (
  <div className="Home">
    <HomeHero />
    <HomeInstantTransactions />
  </div>
);

export default Home;
