import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {guideNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GuideAccounts from './GuideAccounts';
import GuideBestPractices from './GuideBestPractices';
import GuideBlockTypes from './GuideBlockTypes';
import GuideBlockchainArchitecture from './GuideBlockchainArchitecture';
import GuideComponents from './GuideComponents';
import GuideFees from './GuideFees';
import GuideForkPrevention from './GuideForkPrevention';
import GuideIntroduction from './GuideIntroduction';
import GuideNetworkInitialization from './GuideNetworkInitialization';
import GuideNetworkOverview from './GuideNetworkOverview';
import GuideNodeIdentifier from './GuideNodeIdentifier';
import GuideNodes from './GuideNodes';
import GuideRootAccountFile from './GuideRootAccountFile';
import GuideSchedule from './GuideSchedule';
import GuideScheduleAdjustments from './GuideScheduleAdjustments';
import GuideTransfers from './GuideTransfers';

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
  'block-types': {
    content: <GuideBlockTypes />,
    name: 'Block Types',
  },
  'blockchain-architecture': {
    content: <GuideBlockchainArchitecture />,
    name: 'Blockchain Architecture',
  },
  components: {
    content: <GuideComponents />,
    name: 'Components',
  },
  fees: {
    content: <GuideFees />,
    name: 'Fees',
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
  'network-overview': {
    content: <GuideNetworkOverview />,
    name: 'Network Overview',
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
  transfers: {
    content: <GuideTransfers />,
    name: 'Transfers',
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
