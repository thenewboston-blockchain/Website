import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import ConnectionRequests from 'containers/NodeAPI/ConnectionRequests';

import Accounts from './Accounts';
import BankTransactions from './BankTransactions';
import Banks from './Banks';
import Blocks from './Blocks';
import Config from './Config';
import ConfirmationBlocks from './ConfirmationBlocks';
import Introduction from './Introduction';
import ValidatorConfirmationServices from './ValidatorConfirmationServices';
import Validators from './Validators';

import './BankAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'accounts':
      return <Accounts />;
    case 'bank-transactions':
      return <BankTransactions />;
    case 'banks':
      return <Banks />;
    case 'blocks':
      return <Blocks />;
    case 'config':
      return <Config />;
    case 'confirmation-blocks':
      return <ConfirmationBlocks />;
    case 'connection-requests':
      return <ConnectionRequests />;
    case 'introduction':
      return <Introduction />;
    case 'validator-confirmation-services':
      return <ValidatorConfirmationServices />;
    case 'validators':
      return <Validators />;
    default:
      return <Introduction />;
  }
};

const BankAPI = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Documentation BankAPI">{pageContent}</div>;
};

export default BankAPI;
