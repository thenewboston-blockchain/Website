import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Accounts from './Accounts';
import Introduction from './Introduction';
import Overview from './Overview';
import Transactions from './Transactions';
import TransactionFees from './TransactionFees';
import './Docs.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'accounts':
      return <Accounts />;
    case 'introduction':
      return <Introduction />;
    case 'overview':
      return <Overview />;
    case 'transactions':
      return <Transactions />;
    case 'transaction-fees':
      return <TransactionFees />;
    default:
      return <Introduction />;
  }
};

const Docs = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Docs">{pageContent}</div>;
};

export default Docs;
