import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Accounts from './Accounts';
import Banks from './Banks';
import BestPractices from './BestPractices';
import Blocks from './Blocks';
import ConfirmationValidators from './ConfirmationValidators';
import Confirmations from './Confirmations';
import FutureDevelopment from './FutureDevelopment';
import InitialFunds from './InitialFunds';
import Introduction from './Introduction';
import Overview from './Overview';
import RootBalanceSheet from './RootBalanceSheet';
import TransactionFees from './TransactionFees';
import Transactions from './Transactions';
import Trust from './Trust';
import Validators from './Validators';

import './Docs.scss';

const getPageContent = (chapter: string) => {
  switch (chapter) {
    case 'accounts':
      return <Accounts />;
    case 'banks':
      return <Banks />;
    case 'best-practices':
      return <BestPractices />;
    case 'blocks':
      return <Blocks />;
    case 'confirmation-validators':
      return <ConfirmationValidators />;
    case 'confirmations':
      return <Confirmations />;
    case 'future-development':
      return <FutureDevelopment />;
    case 'initial-funds':
      return <InitialFunds />;
    case 'introduction':
      return <Introduction />;
    case 'overview':
      return <Overview />;
    case 'root-balance-sheet':
      return <RootBalanceSheet />;
    case 'transactions':
      return <Transactions />;
    case 'transaction-fees':
      return <TransactionFees />;
    case 'trust':
      return <Trust />;
    case 'validators':
      return <Validators />;
    default:
      return null;
  }
};

const Docs = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Docs">{pageContent}</div>;
};

export default Docs;
