import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems} from 'components';
import {PageData, PageDataObject} from 'types/page-data';

import DeploymentGuideBank from './DeploymentGuideBank';
import DeploymentGuideValidator from './DeploymentGuideValidator';

const defaultPageData: PageData = {
  content: <Redirect to="/deployment-guide/bank" />,
  name: '',
};

const pageData: PageDataObject = {
  bank: {
    content: <DeploymentGuideBank />,
    name: 'Bank',
  },
  validator: {
    content: <DeploymentGuideValidator />,
    name: 'Validator',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const DeploymentGuide: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Deployment Guide">
      {content}
    </DashboardLayout>
  );
};

export default DeploymentGuide;
