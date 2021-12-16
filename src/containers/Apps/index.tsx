import React, {FC} from 'react';

import {useParams} from 'react-router-dom';
import {AppUrlParams} from 'types/apps';

import AppsHome from './containers/AppsHome';
import AppDetails from './containers/AppDetails';

const AppStore: FC = () => {
  const {slug} = useParams<AppUrlParams>();

  if (slug) {
    return <AppDetails slug={slug} />;
  }

  return <AppsHome />;
};

export default AppStore;
