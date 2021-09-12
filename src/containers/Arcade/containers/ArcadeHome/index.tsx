import React, {FC} from 'react';

import ArcadeHero from './ArcadeHero';
import ListOfApps from './ListOfApps';

const ArcadeHome: FC = () => {
  return (
    <>
      <ArcadeHero />
      <ListOfApps />
    </>
  );
};

export default ArcadeHome;
