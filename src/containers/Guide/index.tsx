import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {guideNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GuideAccounts from './GuideAccounts';
import GuideBestPractices from './GuideBestPractices';
import GuideBlockchainArchitecture from './GuideBlockchainArchitecture';
import GuideBlocks from './GuideBlocks';
import GuideForkPrevention from './GuideForkPrevention';
import GuideIntroduction from './GuideIntroduction';
import GuideNodeIdentifier from './GuideNodeIdentifier';
import GuideNodes from './GuideNodes';
import GuideRootAccountFile from './GuideRootAccountFile';
import GuideSchedule from './GuideSchedule';
import GuideScheduleAdjustments from './GuideScheduleAdjustments';
import GuideTransactionFees from './GuideTransactionFees';

const defaultPageData: PageData = {
  content: <Redirect to="/guide/introduction" />,
  name: '',
};

const pageData: PageDataObject = {
  accounts: {
    content: <GuideAccounts />,
    name: 'Accounts',
  },
  'best-practices': {
    content: <GuideBestPractices />,
    name: 'Best Practices',
  },
  'blockchain-architecture': {
    content: <GuideBlockchainArchitecture />,
    name: 'Blockchain Architecture',
  },
  blocks: {
    content: <GuideBlocks />,
    name: 'Blocks',
  },
  'fork-prevention': {
    content: <GuideForkPrevention />,
    name: 'Fork Prevention',
  },
  introduction: {
    content: <GuideIntroduction />,
    name: 'Introduction',
  },
  'node-identifier': {
    content: <GuideNodeIdentifier />,
    name: 'Node Identifier',
  },
  nodes: {
    content: <GuideNodes />,
    name: 'Nodes',
  },
  'root-account-file': {
    content: <GuideRootAccountFile />,
    name: 'Root Account File',
  },
  schedule: {
    content: <GuideSchedule />,
    name: 'Schedule',
  },
  'schedule-adjustments': {
    content: <GuideScheduleAdjustments />,
    name: 'Schedule Adjustments',
  },
  'transaction-fees': {
    content: <GuideTransactionFees />,
    name: 'Transaction Fees',
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
