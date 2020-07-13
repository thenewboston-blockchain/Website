import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import ConnectionRequests from 'containers/NodeAPI/ConnectionRequests';

import Accounts from './Accounts';
import BankBlocks from './BankBlocks';
import Banks from './Banks';
import Config from './Config';
import ConfirmationBlocks from './ConfirmationBlocks';
import Validators from './Validators';

import './PrimaryValidatorAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'accounts':
      return <Accounts />;
    case 'bank-blocks':
      return <BankBlocks />;
    case 'banks':
      return <Banks />;
    case 'config':
      return <Config />;
    case 'confirmation-blocks':
      return <ConfirmationBlocks />;
    case 'connection-requests':
      return <ConnectionRequests />;
    case 'validators':
      return <Validators />;
    default:
      return <Accounts />;
  }
};

const PrimaryValidatorAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Documentation PrimaryValidatorAPI">{pageContent}</div>;
};

export default PrimaryValidatorAPI;
