import React, {FC, useEffect, useState} from 'react';

import {getAllApps} from 'apis/app-store';
import {Container, Loader} from 'components';
import {ApiProgress} from 'constants/api-progress';
import {App} from 'types/app-store';
import AppCard from '../../../components/AppCard';
import './ListOfApps.scss';

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
    return <Loader className="ListOfApps__loader" />;
  }

  if (progress === ApiProgress.Error) {
    return <div className="ListOfApps__error">Error while fetching apps. Please try again later.</div>;
  }

  return (
    <Container className="ListOfApps">
      {apps.map((app) => {
        return (
          <AppCard
            key={app.pk}
            bannerUrl={''} // TODO: add image when api is ready
            id={app.pk}
            description={app.description}
            title={app.name}
            websiteUrl={app.website}
          />
        );
      })}
    </Container>
  );
};

export default ListOfApps;
