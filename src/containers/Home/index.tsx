import React, {FC} from 'react';

import {PageTitle} from 'components';
import HomeHero from './HomeHero';
import LearnToDevelop from './LearnToDevelop';

const Home: FC = () => (
  <>
    <PageTitle title="Home" />
    <HomeHero />
    <LearnToDevelop />
  </>
);

export default Home;
