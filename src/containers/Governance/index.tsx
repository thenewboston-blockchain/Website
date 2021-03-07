import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, Pagination} from 'components';
import {governanceNavigationData} from 'components/DocsMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import GovernanceBudgets from './GovernanceBudgets';
import GovernanceCoinsVsPoints from './GovernanceCoinsVsPoints';
import GovernanceElectionProcess from './GovernanceElectionProcess';
import GovernanceLockedCoinsAndBoosting from './GovernanceLockedCoinsAndBoosting';
import GovernanceOverview from './GovernanceOverview';
import GovernancePointsAndRefillLogic from './GovernancePointsAndRefillLogic';
import GovernanceRatesAndAmounts from './GovernanceRatesAndAmounts';
import GovernanceUsernamesAndVotes from './GovernanceUsernamesAndVotes';

const defaultPageData: PageData = {
  content: <Redirect to="/governance/overview" />,
  name: '',
};

const pageData: PageDataObject = {
  budgets: {
    content: <GovernanceBudgets />,
    name: 'Budgets',
  },
  'coins-vs-points': {
    content: <GovernanceCoinsVsPoints />,
    name: 'Coins vs Points',
  },
  'election-process': {
    content: <GovernanceElectionProcess />,
    name: 'Election Process',
  },
  'locked-coins-and-boosting': {
    content: <GovernanceLockedCoinsAndBoosting />,
    name: 'Locked Coins & Boosting',
  },
  overview: {
    content: <GovernanceOverview />,
    name: 'Overview',
  },
  'points-and-refill-logic': {
    content: <GovernancePointsAndRefillLogic />,
    name: 'Points & Refill Logic',
  },
  'rates-and-amounts': {
    content: <GovernanceRatesAndAmounts />,
    name: 'Rates & Amounts',
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
