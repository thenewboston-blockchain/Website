import React, {FC} from 'react';

import {PageTitle} from 'components';

import AppsHero from './AppsHero';
import ListOfApps from './ListOfApps';
import CreateApps from './CreateApps';

const AppsHome: FC = () => {
  return (
    <>
      <PageTitle title="Apps" />

      <AppsHero />
      <ListOfApps />
      <CreateApps />
    </>
  );
};

export default AppsHome;
