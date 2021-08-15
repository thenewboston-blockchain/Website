import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useHistory} from 'react-router';

import {api as projectsApi} from 'apis/projects';
import {Button, Loader} from 'components';
import {Project} from 'types/projects';

import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import ProjectsIcon from './assets/ProjectsIcon.webp';

import './Projects.scss';
import {approvedProjectsPath} from './constants';

const Projects: FC = () => {
  const history = useHistory();

  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      (async () => {
        const allProjects = await projectsApi.getProjects();
        setFeaturedProjects(allProjects.filter((project) => project.is_featured));
      })();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderFeaturedProjects = (): ReactNode => {
    if (isLoading) return <Loader className="Projects__showcase-projects-loader" />;
    if (error) return <div className="Projects__showcase-projects-error">{error}</div>;
    return (
      <div className="Projects__showcase-projects">
        {featuredProjects.map((project) => (
          <div
            className="Projects__showcase-projects-tile"
            key={project.pk}
            onClick={() => history.push(`${approvedProjectsPath}/${project.pk}`)}
            role="button"
            tabIndex={0}
          >
            <h3 className="Projects__showcase-projects-tile-title">{project.title}</h3>
            <p className="Projects__showcase-projects-tile-description">{project.description}</p>
          </div>
        ))}
      </div>
    );
  };

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
        {renderFeaturedProjects()}
      </div>
    </DeveloperPortalLayout>
  );
};

export default Projects;
