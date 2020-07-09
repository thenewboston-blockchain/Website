import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Banks from './Banks';
import Validators from './Validators';

import './DeploymentGuides.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'banks':
      return <Banks />;
    case 'validators':
      return <Validators />;
    default:
      return <Banks />;
  }
};

const DeploymentGuides = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Documentation DeploymentGuides">{pageContent}</div>;
};

export default DeploymentGuides;
