import React, {FC, useState} from 'react';

import {Milestone, Project, ProjectTopic} from 'types/projects';
import ProjectDetailsContent from './ProjectDetailsContent';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsSideMenu from './ProjectDetailsSideMenu';
import {projectDetailsTopic} from './constants';
import './ProjectDetails.scss';

type Props = {
  milestones: Milestone[];
  project: Project;
};

const ProjectDetails: FC<Props> = ({milestones, project}) => {
  const [currentTopic, setCurrentTopic] = useState<ProjectTopic>(projectDetailsTopic.overview);
  const {title, logo, github_url: github, project_lead: projectLead} = project;

  const handleSideMenuClick = (topic: ProjectTopic) => {
    setCurrentTopic(topic);
  };

  return (
    <div className="ProjectDetails">
      <ProjectDetailsHeader github={github} logoUrl={logo} title={title} projectLead={projectLead} />
      <div className="ProjectDetails__main-container">
        <ProjectDetailsSideMenu currentTopic={currentTopic} onClick={handleSideMenuClick} />
        <ProjectDetailsContent milestones={milestones} project={project} currentTopic={currentTopic} />
      </div>
    </div>
  );
};

export default ProjectDetails;
