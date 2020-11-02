import React, {FC} from 'react';

import Footer from 'components/Footer';

import HomeHero from './HomeHero';
import HomeInstantTransactions from './HomeInstantTransactions';
import HomeSteps from './HomeSteps';

const Home: FC = () => (
  <>
    <HomeHero />
    <HomeSteps />
    <HomeInstantTransactions />
    <Footer />
  </>
);

export default Home;
