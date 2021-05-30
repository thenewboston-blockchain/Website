import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, PageTitle, Pagination} from 'components';
import {PageData, PageDataObject} from 'types/page-data';

import ProjectsMenuItems, {projectsNavigationData} from '../ProjectsMenuItems';
import ProjectsMilestones from './ProjectsMilestones';
import ProjectsOverview from './ProjectsOverview';
import ProjectsProposalSubmissionProcess from './ProjectsProposalSubmissionProcess';
import ProjectsRules from './ProjectsRules';

const defaultPageData: PageData = {
  content: <Redirect to="/project-rules/overview" />,
  name: '',
};

const pageData: PageDataObject = {
  milestones: {
    content: <ProjectsMilestones />,
    name: 'Milestones & Payouts',
  },
  overview: {
    content: <ProjectsOverview />,
    name: 'Overview',
  },
  proposals: {
    content: <ProjectsProposalSubmissionProcess />,
    name: 'Proposal Submission Process',
  },
  rules: {
    content: <ProjectsRules />,
    name: 'Rules & Guidelines',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const Projects: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return (
    <DashboardLayout menuItems={<ProjectsMenuItems />} pageName={name} sectionName="Projects">
      <PageTitle ogDescription={`${name} | Projects`} title={name} />
      {content}
      <Pagination navigationData={projectsNavigationData} />
    </DashboardLayout>
  );
};

export default Projects;
