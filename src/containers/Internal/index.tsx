import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, OrganizationMenuItems, Pagination} from 'components';
import {internalNavigationData} from 'components/OrganizationMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import InternalNewUserOperations from './InternalNewUserOperations';
import InternalProductDevelopment from './InternalProductDevelopment';
import InternalTeamLeadOnboarding from './InternalTeamLeadOnboarding';

const defaultPageData: PageData = {
  content: <Redirect to="/internal/new-user-operations" />,
  name: '',
};

const pageData: PageDataObject = {
  'new-user-operations': {
    content: <InternalNewUserOperations />,
    name: 'New User Operations',
  },
  'product-development': {
    content: <InternalProductDevelopment />,
    name: 'Product Development',
  },
  'team-lead-onboarding': {
    content: <InternalTeamLeadOnboarding />,
    name: 'Team Lead Onboarding',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const Internal: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<OrganizationMenuItems />} pageName={name} sectionName="Internal">
      {content}
      <Pagination navigationData={internalNavigationData} />
    </DashboardLayout>
  );
};

export default Internal;
