import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Bank from './Bank';
import Validator from './Validator';

import './DeploymentGuides.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'bank':
      return <Bank />;
    case 'validator':
      return <Validator />;
    default:
      return <Bank />;
  }
};

const DeploymentGuides = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Documentation DeploymentGuides">{pageContent}</div>;
};

export default DeploymentGuides;
