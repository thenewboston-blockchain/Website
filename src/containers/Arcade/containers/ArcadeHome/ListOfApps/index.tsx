import React, {FC, useEffect, useState} from 'react';

import DefaultLogoSrc from 'assets/images/logo.png';
import {getAllApps} from 'apis/arcade';
import {ApiProgress} from 'constants/api-progress';
import {App} from 'types/arcade';
import AppCard from '../../../components/AppCard';

import * as S from './Styles';

const ListOfApps: FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  useEffect(() => {
    (async function getListOfApps() {
      try {
        setProgress(ApiProgress.Requesting);
        const appResponse = await getAllApps();
        setApps(appResponse);
        setProgress(ApiProgress.Success);
      } catch (err) {
        setProgress(ApiProgress.Error);
      }
    })();
  }, []);

  if (progress === ApiProgress.Requesting || progress === ApiProgress.Init || !apps) {
    return <S.Loader />;
  }

  if (progress === ApiProgress.Error) {
    return <S.ErrorContainer>Error while fetching apps. Please try again later.</S.ErrorContainer>;
  }

  return (
    <S.Container>
      {apps.map((app) => {
        const bannerUrl = app.images.length > 0 ? app.images[0].image : DefaultLogoSrc;
        return (
          <AppCard
            key={app.pk}
            bannerUrl={bannerUrl}
            id={app.pk}
            description={app.description}
            title={app.name}
            websiteUrl={app.website}
          />
        );
      })}
    </S.Container>
  );
};

export default ListOfApps;
