import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {governanceNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GovernanceBudgets from './GovernanceBudgets';
import GovernanceCoinsVsPoints from './GovernanceCoinsVsPoints';
import GovernanceApplicationAndElectionProcess from './GovernanceApplicationAndElectionProcess';
import GovernanceLockedCoinsAndBankBoosting from './GovernanceLockedCoinsAndBankBoosting';
import GovernancePointsAndRefillLogic from './GovernancePointsAndRefillLogic';
import GovernanceUsernamesAndVotes from './GovernanceUsernamesAndVotes';
import GovernanceOverview from './GovernanceOverview';

const defaultPageData: PageData = {
  content: <Redirect to="/governance/overview" />,
  name: '',
};

const pageData: PageDataObject = {
  'application-and-election-process': {
    content: <GovernanceApplicationAndElectionProcess />,
    name: 'Application & Election Process',
  },
  budgets: {
    content: <GovernanceBudgets />,
    name: 'Budgets',
  },
  'coins-vs-points': {
    content: <GovernanceCoinsVsPoints />,
    name: 'Coins vs Points',
  },
  'locked-coins-and-banking-boosting': {
    content: <GovernanceLockedCoinsAndBankBoosting />,
    name: 'Locked Coins & Bank Boosting',
  },
  overview: {
    content: <GovernanceOverview />,
    name: 'Overview',
  },
  'points-and-refill-logic': {
    content: <GovernancePointsAndRefillLogic />,
    name: 'Points & Refill Logic',
  },
  'usernames-and-votes': {
    content: <GovernanceUsernamesAndVotes />,
    name: 'Usernames & Votes',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const Governance: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Governance">
      {content}
      <Pagination navigationData={governanceNavigationData} />
    </DashboardLayout>
  );
};

export default Governance;
