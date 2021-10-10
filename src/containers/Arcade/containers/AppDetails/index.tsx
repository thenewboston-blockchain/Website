import React, {FC, useEffect, useState} from 'react';

import {getAppById} from 'apis/arcade';
import {ApiProgress} from 'constants/api-progress';
import {App} from 'types/arcade';

import AppDetailsTopSection from './AppDetailsTopSection';

import * as S from './Styles';

type Props = {
  appId: string;
};

const AppDetails: FC<Props> = ({appId}) => {
  const [app, setApp] = useState<App | null>(null);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  useEffect(() => {
    (async function getApp() {
      try {
        setProgress(ApiProgress.Requesting);
        const appResponse = await getAppById(appId);
        setApp(appResponse);
        setProgress(ApiProgress.Success);
      } catch (err) {
        setProgress(ApiProgress.Error);
      }
    })();
  }, [appId]);

  if (progress === ApiProgress.Error) {
    return <S.ErrorContainer>App is unavailable.</S.ErrorContainer>;
  }

  if (progress === ApiProgress.Requesting || progress === ApiProgress.Init || !app) {
    return <S.Loader className="AppDetails__loader" />;
  }

  return (
    <>
      <AppDetailsTopSection description={app.tagline} logoUrl={app.logo} title={app.name} websiteUrl={app.website} />
      <S.Slider imageUrls={app.images.map((image) => image.image)} />
      <S.Overview className="AppDetails__overview" description={app.description} />
    </>
  );
};

export default AppDetails;
