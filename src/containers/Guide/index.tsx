import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {guideNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GuideAccounts from './GuideAccounts';
import GuideBanks from './GuideBanks';
import GuideBestPractices from './GuideBestPractices';
import GuideBlocks from './GuideBlocks';
import GuideConfirmationServices from './GuideConfirmationServices';
import GuideConfirmationValidators from './GuideConfirmationValidators';
import GuideFutureDevelopment from './GuideFutureDevelopment';
import GuideIntroduction from './GuideIntroduction';
import GuideNodeIdentifier from './GuideNodeIdentifier';
import GuideResyncProcess from './GuideResyncProcess';
import GuideResyncTriggers from './GuideResyncTriggers';
import GuideRootAccountFile from './GuideRootAccountFile';
import GuideTransactionFees from './GuideTransactionFees';
import GuideTrust from './GuideTrust';
import GuideValidators from './GuideValidators';

const defaultPageData: PageData = {
  content: <Redirect to="/guide/introduction" />,
  name: '',
};

const pageData: PageDataObject = {
  accounts: {
    content: <GuideAccounts />,
    name: 'Accounts',
  },
  banks: {
    content: <GuideBanks />,
    name: 'Banks',
  },
  'best-practices': {
    content: <GuideBestPractices />,
    name: 'Best Practices',
  },
  blocks: {
    content: <GuideBlocks />,
    name: 'Blocks',
  },
  'confirmation-services': {
    content: <GuideConfirmationServices />,
    name: 'Confirmation Services',
  },
  'confirmation-validators': {
    content: <GuideConfirmationValidators />,
    name: 'Confirmation Validators',
  },
  'future-development': {
    content: <GuideFutureDevelopment />,
    name: 'Future Development',
  },
  introduction: {
    content: <GuideIntroduction />,
    name: 'Introduction',
  },
  'node-identifiers': {
    content: <GuideNodeIdentifier />,
    name: 'Node Identifiers',
  },
  'resync-process': {
    content: <GuideResyncProcess />,
    name: 'Resync Process',
  },
  'resync-triggers': {
    content: <GuideResyncTriggers />,
    name: 'Resync Triggers',
  },
  'root-account-file': {
    content: <GuideRootAccountFile />,
    name: 'Root Account File',
  },
  'transaction-fees': {
    content: <GuideTransactionFees />,
    name: 'Transaction Fees',
  },
  trust: {
    content: <GuideTrust />,
    name: 'Trust',
  },
  validators: {
    content: <GuideValidators />,
    name: 'Validators',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const Guide: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Guide">
      {content}
      <Pagination navigationData={guideNavigationData} />
    </DashboardLayout>
  );
};

export default Guide;
