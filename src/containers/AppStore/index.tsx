import React, {FC} from 'react';

import {useParams} from 'react-router-dom';
import {AppStoreUrlParams} from 'types/app-store';

import AppStoreHome from './containers/AppStoreHome';
import AppDetails from './containers/AppDetails';

const AppStore: FC = () => {
  const {appId} = useParams<AppStoreUrlParams>();

  if (appId) {
    return <AppDetails appId={appId} />;
  }

  return (
    <>
      <AppStoreHome />
    </>
  );
};

export default AppStore;
