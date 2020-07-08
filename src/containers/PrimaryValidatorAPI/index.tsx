import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Introduction from './Introduction';

import './PrimaryValidatorAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'introduction':
      return <Introduction />;
    default:
      return <Introduction />;
  }
};

const PrimaryValidatorAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="API PrimaryValidatorAPI">{pageContent}</div>;
};

export default PrimaryValidatorAPI;
