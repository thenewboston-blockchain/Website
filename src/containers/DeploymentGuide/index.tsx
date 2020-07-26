import React, {FC, ReactNode, useMemo} from 'react';
import {useParams} from 'react-router-dom';

import DeploymentGuideBank from './DeploymentGuideBank';
import DeploymentGuideValidator from './DeploymentGuideValidator';

const getPageContent = (chapter: string): ReactNode => {
  switch (chapter) {
    case 'bank':
      return <DeploymentGuideBank />;
    case 'validator':
      return <DeploymentGuideValidator />;
    default:
      return <DeploymentGuideBank />;
  }
};

const DeploymentGuide: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <>{pageContent}</>;
};

export default DeploymentGuide;
