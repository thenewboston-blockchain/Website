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
      {projects.map(({description, logo, project_lead_display_name: projectLeadDisplayName, title, pk}) => {
        return (
          <ProjectCard
            description={description}
            id={pk}
            logoUrl={logo}
            projectLeadDisplayName={projectLeadDisplayName}
            title={title}
            key={pk}
          />
        );
      })}
    </div>
  );
};

export default ListOfProjects;
