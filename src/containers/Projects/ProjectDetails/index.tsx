import React, {FC, ReactNode} from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {Project} from 'types/projects';

import {projectDetailsTopic} from './constants';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsSideMenu from './ProjectDetailsSideMenu';
import ProjectDetailsTopic from './ProjectDetailsTopic';
import './ProjectDetails.scss';

type Props = {
  project: Project;
};

const ProjectDetails: FC<Props> = ({project}) => {
  const {title, logo, github_url: github, project_lead_display_name: projectLeadDisplayName} = project;

  const renderMainContent = (): ReactNode => {
    return (
      <div className="ProjectDetails__main-content">
        <ProjectDetailsTopic
          id={projectDetailsTopic.overview.anchor}
          content={project.overview}
          iconType={projectDetailsTopic.overview.iconType}
          title={projectDetailsTopic.overview.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.problem.anchor}
          content={project.problem}
          iconType={projectDetailsTopic.problem.iconType}
          title={projectDetailsTopic.problem.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.target_market.anchor}
          content={project.target_market}
          iconType={projectDetailsTopic.target_market.iconType}
          title={projectDetailsTopic.target_market.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.benefits.anchor}
          content={project.benefits}
          iconType={projectDetailsTopic.benefits.iconType}
          title={projectDetailsTopic.benefits.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.centered_around_tnb.anchor}
          content={project.centered_around_tnb}
          iconType={projectDetailsTopic.centered_around_tnb.iconType}
          title={projectDetailsTopic.centered_around_tnb.title}
        />
        <ProjectDetailsTopic
          id={projectDetailsTopic.estimated_completion_date.anchor}
          content={format(parseISO(project.estimated_completion_date), 'dd LLLL u - eeee ')}
          iconType={projectDetailsTopic.estimated_completion_date.iconType}
          title={projectDetailsTopic.estimated_completion_date.title}
        />
      </div>
    );
  };

  return (
    <div className="ProjectDetails">
      <ProjectDetailsHeader
        github={github}
        logoUrl={logo}
        title={title}
        projectLeadDisplayName={projectLeadDisplayName}
      />
      <div className="ProjectDetails__main-container">
        <ProjectDetailsSideMenu />
        {renderMainContent()}
      </div>
    </div>
  );
};

export default ProjectDetails;
