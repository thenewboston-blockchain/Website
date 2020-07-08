import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import ConfirmationBlocks from './ConfirmationBlocks';
import ConnectionRequests from './ConnectionRequests';
import Introduction from './Introduction';

import './BankAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'confirmation-blocks':
      return <ConfirmationBlocks />;
    case 'connection-requests':
      return <ConnectionRequests />;
    case 'introduction':
      return <Introduction />;
    default:
      return <Introduction />;
  }
};

const BankAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="API BankAPI">{pageContent}</div>;
};

export default BankAPI;
