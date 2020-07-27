import React, {FC, ReactNode, useMemo} from 'react';
import {useParams} from 'react-router-dom';

import GuideAccounts from './GuideAccounts';
import GuideBanks from './GuideBanks';
import GuideBestPractices from './GuideBestPractices';
import GuideBlocks from './GuideBlocks';
import GuideConfirmationServices from './GuideConfirmationServices';
import GuideConfirmationValidators from './GuideConfirmationValidators';
import GuideFutureDevelopment from './GuideFutureDevelopment';
import GuideInitialFunds from './GuideInitialFunds';
import GuideIntroduction from './GuideIntroduction';
import GuideNodeIdentifier from './GuideNodeIdentifier';
import GuideResyncing from './GuideResyncing';
import GuideRootAccountFile from './GuideRootAccountFile';
import GuideTransactionFees from './GuideTransactionFees';
import GuideTrust from './GuideTrust';
import GuideValidators from './GuideValidators';

const getPageContent = (chapter: string): ReactNode => {
  switch (chapter) {
    case 'accounts':
      return <GuideAccounts />;
    case 'banks':
      return <GuideBanks />;
    case 'best-practices':
      return <GuideBestPractices />;
    case 'blocks':
      return <GuideBlocks />;
    case 'confirmation-services':
      return <GuideConfirmationServices />;
    case 'confirmation-validators':
      return <GuideConfirmationValidators />;
    case 'future-development':
      return <GuideFutureDevelopment />;
    case 'initial-funds':
      return <GuideInitialFunds />;
    case 'introduction':
      return <GuideIntroduction />;
    case 'node-identifiers':
      return <GuideNodeIdentifier />;
    case 'resyncing':
      return <GuideResyncing />;
    case 'root-account-file':
      return <GuideRootAccountFile />;
    case 'transaction-fees':
      return <GuideTransactionFees />;
    case 'trust':
      return <GuideTrust />;
    case 'validators':
      return <GuideValidators />;
    default:
      return null;
  }
};

const Guide: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <>{pageContent}</>;
};

export default Guide;
