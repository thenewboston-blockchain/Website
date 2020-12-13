import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, OrganizationMenuItems, Pagination} from 'components';
import {projectProposalsNavigationData} from 'components/OrganizationMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import ProjectProposalsOverview from './ProjectProposalsOverview';
import ProjectProposalsRules from './ProjectProposalsRules';

const defaultPageData: PageData = {
  content: <Redirect to="/project-proposals/overview" />,
  name: '',
};

const pageData: PageDataObject = {
  overview: {
    content: <ProjectProposalsOverview />,
    name: 'Overview',
  },
  rules: {
    content: <ProjectProposalsRules />,
    name: 'Rules & Guidelines',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const ProjectProposals: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<OrganizationMenuItems />} pageName={name} sectionName="Project Proposals">
      {content}
      <Pagination navigationData={projectProposalsNavigationData} />
    </DashboardLayout>
  );
};

export default ProjectProposals;
