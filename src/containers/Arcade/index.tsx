import React, {FC} from 'react';

import {useParams} from 'react-router-dom';
import {ArcadeUrlParams} from 'types/arcade';

import ArcadeHome from './containers/ArcadeHome';
import AppDetails from './containers/AppDetails';

const AppStore: FC = () => {
  const {appId} = useParams<ArcadeUrlParams>();

  if (appId) {
    return <AppDetails appId={appId} />;
  }

  return <ArcadeHome />;
};

export default AppStore;
