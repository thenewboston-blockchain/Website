import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import Accounts from './Accounts';
import Banks from './Banks';
import BestPractices from './BestPractices';
import Blocks from './Blocks';
import ConfirmationServices from './ConfirmationServices';
import ConfirmationValidators from './ConfirmationValidators';
import FutureDevelopment from './FutureDevelopment';
import InitialFunds from './InitialFunds';
import Introduction from './Introduction';
import Resyncing from './Resyncing';
import RootAccountFile from './RootAccountFile';
import TransactionFees from './TransactionFees';
import Trust from './Trust';
import Validators from './Validators';

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
    case 'confirmation-services':
      return <ConfirmationServices />;
    case 'confirmation-validators':
      return <ConfirmationValidators />;
    case 'future-development':
      return <FutureDevelopment />;
    case 'initial-funds':
      return <InitialFunds />;
    case 'introduction':
      return <Introduction />;
    case 'resyncing':
      return <Resyncing />;
    case 'root-account-file':
      return <RootAccountFile />;
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

const Guide = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <div className="Documentation">{pageContent}</div>;
};

export default Guide;
