import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import NodeApiConnectionRequests from 'containers/NodeApi/NodeApiConnectionRequests';

import Accounts from './Accounts';
import BankConfirmationServices from './BankConfirmationServices';
import Banks from './Banks';
import Config from './Config';
import ConfirmationBlocks from './ConfirmationBlocks';
import Validators from './Validators';

import './ConfirmationValidatorAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'accounts':
      return <Accounts />;
    case 'bank-confirmation-services':
      return <BankConfirmationServices />;
    case 'banks':
      return <Banks />;
    case 'config':
      return <Config />;
    case 'confirmation-blocks':
      return <ConfirmationBlocks />;
    case 'connection-requests':
      return <NodeApiConnectionRequests />;
    case 'validators':
      return <Validators />;
    default:
      return <Accounts />;
  }
};

const ConfirmationValidatorAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Documentation ConfirmationValidatorAPI">{pageContent}</div>;
};

export default ConfirmationValidatorAPI;
