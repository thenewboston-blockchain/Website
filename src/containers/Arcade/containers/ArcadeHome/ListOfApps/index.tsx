import React, {FC, useEffect, useState} from 'react';

import DefaultLogoSrc from 'assets/images/logo.png';
import {getAllApps} from 'apis/arcade';
import {ApiProgress} from 'constants/api-progress';
import {useWindowDimensions} from 'hooks';
import {App} from 'types/arcade';

import AppCard from '../../../components/AppCard';

import * as S from './Styles';

const ListOfApps: FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  const {width} = useWindowDimensions();

  const thumbnailSize = React.useMemo(() => {
    if (width >= 992) {
      return 280;
    }
    if (width >= 768) {
      return 208;
    }
    if (width >= 414) {
      return 360;
    }
    return 280;
  }, [width]);

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
    <S.Wrapper>
      <S.Container>
        <S.Heading>Recent</S.Heading>
        <S.Grid>
          {apps.map((app) => {
            const bannerUrl = app.logo || DefaultLogoSrc;
            return (
              <AppCard
                key={app.pk}
                thumbnailUrl={bannerUrl}
                id={app.pk}
                title={app.name}
                category={app.category?.name ?? '-'}
                thumbnailSize={thumbnailSize}
              />
            );
          })}
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
};

export default ListOfApps;
