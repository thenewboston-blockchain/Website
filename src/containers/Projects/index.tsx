import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {api as projectsApi} from 'apis/projects';
import {Project, Milestone} from 'types/projects';
import {Loader} from 'components';
import ListOfProjects from './ListOfProjects';
import ProjectsHero from './ProjectsHero';
import ProjectDetails from './ProjectDetails';

import './Projects.scss';

const Projects: FC = () => {
  const {projectId} = useParams<{projectId: string}>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const isValidProjectId = projects.length && projects.some((project) => project.uuid === projectId);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    (async function getMilestones() {
      try {
        if (isValidProjectId) {
          const milestonesResponse = await projectsApi.getMilestonesByProject(projectId);
          setMilestones(milestonesResponse);
        }
      } catch (err) {
        // handle error
      }
    })();
  }, [isValidProjectId, projectId]);

  if (isLoading) {
    return (
      <div className="Projects__loading-container">
        <Loader />
      </div>
    );
  }

  if (isValidProjectId) {
    const selectedProject = projects.find((project) => project.uuid === projectId) as Project;
    return <ProjectDetails milestones={milestones} project={selectedProject} />;
  }

  return (
    <div className="Projects">
      <ProjectsHero />
      <ListOfProjects projects={projects} />
    </div>
  );
};

export default Projects;
