import React, {FC} from 'react';

import {Project} from 'types/projects';
import ProjectCard from '../ProjectCard';

import './ListOfProjects.scss';

type Props = {
  projects: Project[];
};

const ListOfProjects: FC<Props> = ({projects}) => {
  return (
    <div className="ListOfProjects">
      {projects.map((project) => {
        const {description, logo, project_lead: projectLead, title, uuid} = project;
        return (
          <ProjectCard
            description={description}
            id={uuid}
            logoUrl={logo}
            projectLead={projectLead}
            title={title}
            key={uuid}
          />
        );
      })}
    </div>
  );
};

export default ListOfProjects;
