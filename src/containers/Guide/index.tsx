import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {guideNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GuideAccountLock from './GuideAccountLock';
import GuideAccounts from './GuideAccounts';
import GuideBestPractices from './GuideBestPractices';
import GuideBlockchainArchitecture from './GuideBlockchainArchitecture';
import GuideBlocks from './GuideBlocks';
import GuideBlockStructure from './GuideBlockStructure';
import GuideComponents from './GuideComponents';
import GuideFees from './GuideFees';
import GuideFlows from './GuideFlows';
import GuideForkPrevention from './GuideForkPrevention';
import GuideIntroduction from './GuideIntroduction';
import GuideNetworkInitialization from './GuideNetworkInitialization';
import GuideNodeIdentifier from './GuideNodeIdentifier';
import GuideNodes from './GuideNodes';
import GuideRootAccountFile from './GuideRootAccountFile';
import GuideScheduleAdjustments from './GuideScheduleAdjustments';
import GuideScheduling from './GuideScheduling';

const defaultPageData: PageData = {
  content: <Redirect to="/guide/introduction" />,
  name: '',
};

const pageData: PageDataObject = {
  'account-lock': {
    content: <GuideAccountLock />,
    name: 'Account Lock',
  },
  accounts: {
    content: <GuideAccounts />,
    name: 'Accounts',
  },
  'best-practices': {
    content: <GuideBestPractices />,
    name: 'Best Practices',
  },
  'block-structure': {
    content: <GuideBlockStructure />,
    name: 'Block Structure',
  },
  'blockchain-architecture': {
    content: <GuideBlockchainArchitecture />,
    name: 'Blockchain Architecture',
  },
  blocks: {
    content: <GuideBlocks />,
    name: 'Blocks',
  },
  components: {
    content: <GuideComponents />,
    name: 'Components',
  },
  fees: {
    content: <GuideFees />,
    name: 'Fees',
  },
  flows: {
    content: <GuideFlows />,
    name: 'Flows',
  },
  'fork-prevention': {
    content: <GuideForkPrevention />,
    name: 'Fork Prevention',
  },
  introduction: {
    content: <GuideIntroduction />,
    name: 'Introduction',
  },
  'network-initialization': {
    content: <GuideNetworkInitialization />,
    name: 'Network Initialization',
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
  'schedule-adjustments': {
    content: <GuideScheduleAdjustments />,
    name: 'Schedule Adjustments',
  },
  scheduling: {
    content: <GuideScheduling />,
    name: 'scheduling',
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
