import React, {FC} from 'react';

import ProjectCard from '../ProjectCard';

import './ListOfProjects.scss';

const sampleProject = {
  description:
    'Lorem ipsum dolor sit amet, consecteturadia adipiscing elit, sed do eiusmod tempor incididunt ut.ed do eiusmod tempor incididunt ut.',
  logoUrl: 'https://yt3.ggpht.com/ytc/AAUvwnglVjQeNSAVO9GgKkrjIbCO_y0rOx7Yxx-2bv9r_A=s176-c-k-c0x00ffffff-no-rj',
  projectLead: 'Skylar',
  title: 'Keysign',
};

const projects = [sampleProject, sampleProject, sampleProject, sampleProject, sampleProject, sampleProject];

const ListOfProjects: FC = () => {
  return (
    <div className="ListOfProjects">
      {projects.map((project, i) => {
        const {description, logoUrl, projectLead, title} = project;
        return (
          <ProjectCard
            description={description}
            id={i.toString()}
            logoUrl={logoUrl}
            projectLead={projectLead}
            title={title}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default ListOfProjects;
