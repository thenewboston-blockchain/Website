import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import AccountRegistrations from './AccountRegistrations';
import BankRegistrations from './BankRegistrations';
import ConfirmationBlocks from './ConfirmationBlocks';
import Introduction from './Introduction';

import './BankAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'account-registrations':
      return <AccountRegistrations />;
    case 'bank-registrations':
      return <BankRegistrations />;
    case 'confirmation-blocks':
      return <ConfirmationBlocks />;
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
