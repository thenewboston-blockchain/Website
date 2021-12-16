import React, {FC, useEffect, useState} from 'react';

import DefaultLogoSrc from 'assets/images/logo.png';
import {getApps} from 'apis/apps';
import {ApiProgress} from 'constants/api-progress';
import * as breakpoints from 'constants/breakpoints';
import {useWindowDimensions} from 'hooks';
import {App} from 'types/apps';

import {THUMBNAIL_WIDTH_MAPPING} from './constants';
import AppCard from '../../../components/AppCard';

import * as S from './Styles';

const ListOfApps: FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [progress, setProgress] = useState<ApiProgress>(ApiProgress.Init);

  const {width} = useWindowDimensions();

  const thumbnailSize = React.useMemo(() => {
    if (width >= breakpoints.EXTRA_LARGE_DEVICE_WIDTH) {
      return THUMBNAIL_WIDTH_MAPPING[breakpoints.EXTRA_LARGE_DEVICE_WIDTH];
    }
    if (width >= breakpoints.LARGE_DEVICE_WIDTH) {
      return THUMBNAIL_WIDTH_MAPPING[breakpoints.LARGE_DEVICE_WIDTH];
    }
    if (width >= breakpoints.MEDIUM_DEVICE_WIDTH) {
      return THUMBNAIL_WIDTH_MAPPING[breakpoints.MEDIUM_DEVICE_WIDTH];
    }
    if (width >= breakpoints.SMALL_DEVICE_WIDTH) {
      return THUMBNAIL_WIDTH_MAPPING[breakpoints.SMALL_DEVICE_WIDTH];
    }
    return THUMBNAIL_WIDTH_MAPPING.default;
  }, [width]);

  useEffect(() => {
    (async function getListOfApps() {
      try {
        setProgress(ApiProgress.Requesting);
        const appResponse = await getApps();
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
                slug={app.slug}
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
