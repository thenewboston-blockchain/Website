import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Introduction from './Introduction';

import './ConfirmationValidatorAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'introduction':
      return <Introduction />;
    default:
      return <Introduction />;
  }
};

const ConfirmationValidatorAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="API ConfirmationValidatorAPI">{pageContent}</div>;
};

export default ConfirmationValidatorAPI;
