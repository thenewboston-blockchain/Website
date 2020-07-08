import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import ConnectionRequests from 'containers/NodeAPI/ConnectionRequests';

import Accounts from './Accounts';
import BankConfirmationServices from './BankConfirmationServices';
import Banks from './Banks';
import Config from './Config';
import ConfirmationBlocks from './ConfirmationBlocks';
import Introduction from './Introduction';
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
      return <ConnectionRequests />;
    case 'introduction':
      return <Introduction />;
    case 'validators':
      return <Validators />;
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
