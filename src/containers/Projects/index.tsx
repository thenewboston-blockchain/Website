import React, {FC, useEffect, useMemo, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {api as projectsApi} from 'apis/projects';
import {Project} from 'types/projects';
import {Container, Loader, PageTitle} from 'components';
import ListOfProjects from './ListOfProjects';
import ProjectsHero from './ProjectsHero';
import ProjectDetails from './ProjectDetails';

import './Projects.scss';

const Projects: FC = () => {
  const {projectId} = useParams<{projectId: string}>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isValidProjectId = useMemo<boolean>(
    () => !!(projectId && projects.length && projects.some((project) => project.pk === projectId)),
    [projectId, projects],
  );

  const selectedProject = useMemo<Project | null>(
    () => (isValidProjectId ? projects.find((project) => project.pk === projectId) || null : null),
    [isValidProjectId, projects, projectId],
  );

  useEffect(() => {
    (async function getProjects() {
      try {
        const projectsResponse = await projectsApi.getProjects();
        const sortedProjects = projectsResponse.sort((a, b) => (a.title > b.title ? 1 : -1));
        setProjects(sortedProjects);
      } catch (err) {
        // handle error
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="Projects__loading-container">
        <Loader />
      </div>
    );
  }

  if (!projectId) {
    return (
      <>
        <PageTitle
          ogDescription="Earn coins by building apps, games, tools, and other software for thenewboston network."
          title="Projects"
        />
        <Container className="Projects">
          <ProjectsHero />
          <ListOfProjects projects={projects} />
        </Container>
      </>
    );
  }

  if (selectedProject) {
    return (
      <>
        <PageTitle ogDescription={selectedProject.description} title={selectedProject.title} />
        <Container>
          <ProjectDetails project={selectedProject} />
        </Container>
      </>
    );
  }

  return <Redirect to="/projects" />;
};

export default Projects;
