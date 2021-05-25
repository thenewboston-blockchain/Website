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
        const {description, logo, project_lead: projectLead, title, pk} = project;
        return (
          <ProjectCard
            description={description}
            id={pk}
            logoUrl={logo}
            projectLead={projectLead}
            title={title}
            key={pk}
          />
        );
      })}
    </div>
  );
};

export default ListOfProjects;
