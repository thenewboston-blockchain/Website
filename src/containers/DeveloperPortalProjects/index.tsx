import React, {FC} from 'react';

import {Button} from 'components';
import {useHistory} from 'react-router';
import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import ProjectsIcon from './assets/ProjectsIcon.webp';

import './Projects.scss';

const Projects: FC = () => {
  const history = useHistory();

  return (
    <DeveloperPortalLayout pageName="Living Whitepaper">
      <div className="Projects__hero">
        <div className="Projects__hero-title">
          <div className="Projects__hero-title-tnb">thenewboston</div>
          <div className="Projects__hero-title-projects">Projects</div>
        </div>
        <img alt="Living whitepaper icon" className="Projects__hero-icon" src={ProjectsIcon} />
      </div>
      <div className="Projects__main">
        <div className="Projects__main-title">Build with thenewboston</div>
        <div className="Projects__main-description">
          Propose projects and work with thenewboston community. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </div>
        <div className="Projects__main-buttons">
          <Button className="Projects__button-project">Propose a Project</Button>
          <Button variant="outlined">Rules & Guidelines</Button>
        </div>
      </div>
      <div className="Projects__showcase">
        <div className="Projects__showcase-title">Featured Projects</div>
        <div className="Projects__showcase-projects">
          <div className="Projects__showcase-projects-tile">
            <h3 className="Projects__showcase-projects-tile-title">Blockchain Explorer</h3>
            <p className="Projects__showcase-projects-tile-description">
              A blockchain browser for everyone. Functional Requirements of Blockchain Explorer: - The system must
              track* all transactions in real....
            </p>
          </div>
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default Projects;
