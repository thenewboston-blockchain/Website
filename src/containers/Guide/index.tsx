import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {guideNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GuideAccounts from './GuideAccounts';
import GuideBestPractices from './GuideBestPractices';
import GuideBlockchainArchitecture from './GuideBlockchainArchitecture';
import GuideBlocks from './GuideBlocks';
import GuideIntroduction from './GuideIntroduction';
import GuideNodeIdentifier from './GuideNodeIdentifier';
import GuideNodes from './GuideNodes';
import GuideRootAccountFile from './GuideRootAccountFile';
import GuideTransactionFees from './GuideTransactionFees';
import GuideTrust from './GuideTrust';

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
  introduction: {
    content: <GuideIntroduction />,
    name: 'Introduction',
  },
  'node-identifiers': {
    content: <GuideNodeIdentifier />,
    name: 'Node Identifiers',
  },
  nodes: {
    content: <GuideNodes />,
    name: 'Nodes',
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
