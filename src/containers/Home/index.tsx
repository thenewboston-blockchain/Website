import React, {FC, useEffect} from 'react';

import {GApageView} from 'utils/components';
import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';

import './Home.scss';

const Home: FC = () => {
  useEffect(() => {
    GApageView('Home');
  }, []);

  return (
    <div className="Home">
      <HomeHero />
      <HomeInstantTransactions />
    </div>
  );
};

export default Home;
