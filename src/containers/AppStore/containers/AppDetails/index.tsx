import React, {FC, useEffect, useState} from 'react';

import {getAppById} from 'apis/app-store';
import {Loader} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {App} from 'types/app-store';

import AppDetailsTopSection from './AppDetailsTopSection';
import AppDetailsSlider from './AppDetailsSlider';
import AppDetailsOverview from './AppDetailsOverview';

import SampleAppLogo from '../../assets/SampleAppLogo.png';
import SampleAppBanner from '../../assets/SampleAppBg.png';

import './AppDetails.scss';

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
    return <div className="AppDetails__error">App is unavailable.</div>;
  }

  if (progress === ApiProgress.Requesting || progress === ApiProgress.Init || !app) {
    return <Loader className="AppDetails__loader" />;
  }

  return (
    <>
      <AppDetailsTopSection
        description={app.description} // TODO: change this to tagline when ready
        logoUrl={app.logo}
        title={app.name}
        websiteUrl={app.website}
      />
      <AppDetailsSlider
        className="AppDetails__slider"
        imageUrls={[SampleAppBanner, SampleAppLogo, SampleAppBanner, SampleAppBanner, SampleAppBanner]} // TODO: change this to app.images when ready
      />
      <AppDetailsOverview className="AppDetails__overview" description={app.description} />
    </>
  );
};

export default AppDetails;
