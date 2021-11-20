import React, {FC, ReactElement} from 'react';
import {useHistory} from 'react-router-dom';

import {getApps} from 'apis/apps';
import {Button, Loader} from 'components';
import {ROUTES, URLS} from 'constants/routes';
import {ApiProgress} from 'constants/api-progress';
import {useWindowDimensions} from 'hooks';

import DefaultLogoSrc from 'assets/images/logo.png';

import * as S from './Styles';

type AppThumbnail = {
  name: string;
  thumbnail: string;
  pk: string;
};

const HEADING_HIGHLIGHT_DELAY = 2000;
const APP_COUNT_MAX = 9;
const APP_COUNT_1366 = 7;
const APP_COUNT_768 = 5;

const HomeHero: FC = () => {
  const history = useHistory();
  const {width} = useWindowDimensions();
  const [highlightedHeading, setHighlightedHeading] = React.useState<0 | 1 | 2>(0);
  const [progress, setProgress] = React.useState<ApiProgress>(ApiProgress.Init);
  const [apps, setApps] = React.useState<AppThumbnail[]>([]);
  // eslint-disable-next-line no-nested-ternary
  const numberOfAppsToDisplay = width > 1366 ? APP_COUNT_MAX : width > 768 ? APP_COUNT_1366 : APP_COUNT_768;

  React.useLayoutEffect(() => {
    const headingInterval = setInterval(() => {
      setHighlightedHeading((curr) => ((curr + 1) % 3) as 0 | 1 | 2);
    }, HEADING_HIGHLIGHT_DELAY);

    return () => clearInterval(headingInterval);
  }, []);

  React.useEffect(() => {
    try {
      (async () => {
        setProgress(ApiProgress.Requesting);
        const appResponse = await getApps(APP_COUNT_MAX);
        const appList = appResponse.map((app) => ({name: app.name, pk: app.pk, thumbnail: app.logo || DefaultLogoSrc}));
        setApps(appList);
        setProgress(ApiProgress.Success);
      })();
    } catch (err) {
      setProgress(ApiProgress.Error);
    } finally {
      setProgress(ApiProgress.Ok);
    }
  }, []);

  const navigateToProjects = (): void => {
    window.open(URLS.developerPortal.projects, '_blank', 'noreferrer noopener');
  };

  const renderShowcase = (): ReactElement => {
    if (progress === ApiProgress.Requesting) {
      return <Loader />;
    }
    return (
      <S.Showcase>
        {apps.slice(0, numberOfAppsToDisplay).map((app) => (
          <S.App key={app.pk} role="button" tabIndex={0} onClick={() => history.push(`${ROUTES.apps}/${app.pk}`)}>
            <S.AppImage src={app.thumbnail} alt={app.name} />
          </S.App>
        ))}
      </S.Showcase>
    );
  };

  return (
    <S.Container>
      <S.Heading>
        <S.HeadingSegment highlighted={highlightedHeading === 0}>Learn,</S.HeadingSegment>{' '}
        <S.HeadingSegment highlighted={highlightedHeading === 1}>Develop,</S.HeadingSegment> and{' '}
        <S.HeadingSegment highlighted={highlightedHeading === 2}>Earn TNBC.</S.HeadingSegment>
      </S.Heading>
      <S.Paragraph>
        Learn how to develop apps, propose an app idea, and get your app funded. Join thousands of developers in the
        community developing on our open source blockchain network.
      </S.Paragraph>
      <S.Actions>
        <Button
          variant="contained"
          color="quaternary"
          onClick={() => {
            window.location.href = URLS.developerPortal.tutorials;
          }}
        >
          Watch Tutorials
        </Button>
        <Button variant="outlined" onClick={navigateToProjects}>
          How To Earn
        </Button>
      </S.Actions>
      {renderShowcase()}
    </S.Container>
  );
};

export default HomeHero;
