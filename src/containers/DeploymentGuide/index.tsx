import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import GuideMenuItems from 'components/GuideMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import DeploymentGuideBank from './DeploymentGuideBank';
import DeploymentGuideValidator from './DeploymentGuideValidator';

const getPageData = (chapter: string): PageData => {
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

  return pageData[chapter] || defaultPageData;
};

const DeploymentGuide: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageData(chapter).content, [chapter]);
  const pageName = useMemo(() => getPageData(chapter).name, [chapter]);

  return (
    <DashboardLayout menuItems={<GuideMenuItems />} pageName={pageName} sectionName="Deployment Guide">
      {pageContent}
    </DashboardLayout>
  );
};

export default DeploymentGuide;
