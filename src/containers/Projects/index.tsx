import React, {FC} from 'react';

import ListOfProjects from './ListOfProjects';
import ProjectsHero from './ProjectsHero';

const Projects: FC = () => {
  return (
    <div className="Projects">
      <ProjectsHero />
      <ListOfProjects />
    </div>
  );
};

export default Projects;
