import React, {FC} from 'react';

import {Milestone, Project} from 'types/projects';
import ProjectDetailsContent from './ProjectDetailsContent';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsSideMenu from './ProjectDetailsSideMenu';
import './ProjectDetails.scss';

type Props = {
  milestones: Milestone[];
  project: Project;
};

const ProjectDetails: FC<Props> = ({milestones, project}) => {
  const {title, logo, github_url: github, project_lead: projectLead} = project;
  return (
    <div className="ProjectDetails">
      <ProjectDetailsHeader github={github} logoUrl={logo} title={title} projectLead={projectLead} />
      <div className="ProjectDetails__main-container">
        <ProjectDetailsSideMenu />
        <ProjectDetailsContent milestones={milestones} project={project} />
      </div>
    </div>
  );
};

export default ProjectDetails;
