import React, {FC, useEffect, useState} from 'react';

import {api as projectsApi} from 'apis/projects';
import {Button} from 'components';
import {useHistory} from 'react-router';
import {Project} from 'types/projects';
import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import ProjectsIcon from './assets/ProjectsIcon.webp';

import './Projects.scss';

const Projects: FC = () => {
  const history = useHistory();
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    projectsApi.getProjects().then((projects) => {
      setFeaturedProjects(projects.filter((project) => project.is_featured));
    });
  }, []);

  return (
    <DeveloperPortalLayout pageName="Projects">
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
          <Button
            className="Projects__button-project"
            onClick={() =>
              window.open(
                'https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT',
                '_blank',
              )
            }
          >
            Propose a Project
          </Button>
          <Button onClick={() => history.push('/developer/projects/rules')} variant="outlined">
            Rules & Guidelines
          </Button>
        </div>
      </div>
      <div className="Projects__showcase">
        <div className="Projects__showcase-title">Featured Projects</div>
        <div className="Projects__showcase-projects">
          {featuredProjects.map((project) => {
            return (
              <div
                className="Projects__showcase-projects-tile"
                key={project.pk}
                onClick={() => history.push(`/developer/projects/approved-projects/${project.pk}`)}
                role="button"
                tabIndex={0}
              >
                <h3 className="Projects__showcase-projects-tile-title">{project.title}</h3>
                <p className="Projects__showcase-projects-tile-description">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default Projects;
