import React, {FC} from 'react';

import AppsHero from './AppsHero';
import ListOfApps from './ListOfApps';
import CreateApps from './CreateApps';

const AppsHome: FC = () => {
  return (
    <>
      <AppsHero />
      <ListOfApps />
      <CreateApps />
    </>
  );
};

export default AppsHome;
