import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import AccountRegistration from './AccountRegistration';
import BankRegistration from './BankRegistration';
import Introduction from './Introduction';

import './BankAPI.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'account-registration':
      return <AccountRegistration />;
    case 'bank-registration':
      return <BankRegistration />;
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
