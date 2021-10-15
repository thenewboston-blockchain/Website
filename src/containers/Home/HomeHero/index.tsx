import React, {FC, ReactElement} from 'react';
import {useHistory} from 'react-router-dom';

import {getApps} from 'apis/arcade';
import {Button, Loader} from 'components';
import {ROUTES} from 'constants/routes';
import {ApiProgress} from 'constants/api-progress';
import {useWindowDimensions} from 'hooks';

import DefaultLogoSrc from 'assets/images/logo.png';

import * as S from './Styles';

type AppThumbnail = {
  name: string;
  thumbnail: string;
  pk: string;
};

const HomeHero: FC = () => {
  const history = useHistory();
  const {width} = useWindowDimensions();

  const [progress, setProgress] = React.useState<ApiProgress>(ApiProgress.Init);
  const [apps, setApps] = React.useState<AppThumbnail[]>([]);

  React.useEffect(() => {
    try {
      (async () => {
        setProgress(ApiProgress.Requesting);
        const count = width <= 768 ? 5 : 7;
        const appResponse = await getApps(count);
        const appList = appResponse.map((app) => ({name: app.name, pk: app.pk, thumbnail: app.logo || DefaultLogoSrc}));
        setApps(appList);
        setProgress(ApiProgress.Success);
      })();
    } catch (err) {
      setProgress(ApiProgress.Error);
    } finally {
      setProgress(ApiProgress.Ok);
    }
  }, [setProgress, width]);

  const renderShowcase = (): ReactElement => {
    if (progress === ApiProgress.Requesting) {
      return <Loader />;
    }
    return (
      <S.Showcase>
        {apps.map((app) => (
          <S.App key={app.pk} role="button" tabIndex={0} onClick={() => history.push(`${ROUTES.arcade}/${app.pk}`)}>
            <S.AppImage src={app.thumbnail} alt={app.name} />
          </S.App>
        ))}
      </S.Showcase>
    );
  };

  return (
    <S.Container>
      <S.Heading>Learn, Develop, & Earn TNB Coins.</S.Heading>
      <S.Paragraph>
        Learn how to develop apps, propose an app idea, and get your app funded. Join thousands of developers in the
        community developing on our open source blockchain platform.
      </S.Paragraph>
      <S.Actions>
        <Button variant="contained" color="quaternary" onClick={() => history.push(ROUTES.tutorials)}>
          Watch Tutorials
        </Button>
        <Button variant="outlined" onClick={() => history.push(ROUTES.bounties)}>
          How To Earn
        </Button>
      </S.Actions>
      {renderShowcase()}
    </S.Container>
  );
};

export default HomeHero;
