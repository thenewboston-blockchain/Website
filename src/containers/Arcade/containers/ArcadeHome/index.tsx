import React, {FC} from 'react';

import ArcadeHero from './ArcadeHero';
import ListOfApps from './ListOfApps';
import CreateGames from './CreateGames';

const ArcadeHome: FC = () => {
  return (
    <>
      <ArcadeHero />
      <ListOfApps />
      <CreateGames />
    </>
  );
};

export default ArcadeHome;
