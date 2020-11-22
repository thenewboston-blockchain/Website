import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, OrganizationMenuItems, Pagination} from 'components';
import {internalNavigationData} from 'components/OrganizationMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import InternalNewUserOperations from './InternalNewUserOperations';

const defaultPageData: PageData = {
  content: <Redirect to="/internal/new-user-operations" />,
  name: '',
};

const pageData: PageDataObject = {
  'new-user-operations': {
    content: <InternalNewUserOperations />,
    name: 'New User Operations',
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
