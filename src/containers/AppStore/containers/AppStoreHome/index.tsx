import React, {FC} from 'react';

import AppStoreHero from './AppStoreHero';
import ListOfApps from './ListOfApps';

const AppStoreHome: FC = () => {
  return (
    <>
      <AppStoreHero />
      <ListOfApps />
    </>
  );
};

export default AppStoreHome;
