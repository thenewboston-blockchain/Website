import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {api as projectsApi} from 'apis/projects';
import {Project, Milestone} from 'types/projects';
import {dummyMilestones, dummyProject} from './ProjectDetails/constants';
import ListOfProjects from './ListOfProjects';
import ProjectsHero from './ProjectsHero';
import ProjectDetails from './ProjectDetails';

const Projects: FC = () => {
  const {projectId} = useParams<{projectId: string}>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const isValidProjectId = projects.length && projects.some((project) => project.uuid === projectId);

  useEffect(() => {
    (async function getProjects() {
      try {
        const projectsResponse = await projectsApi.getProjects();
        setProjects(projectsResponse);
      } catch (err) {
        // handle error
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

  // TODO: remove when hooked up with api, currently testing the project details page by
  // uncommenting the following line
  // return <ProjectDetails milestones={dummyMilestones} project={dummyProject} />;

  if (isValidProjectId) {
    const selectedProject = projects.find((project) => project.uuid === projectId) as Project;
    return <ProjectDetails milestones={milestones} project={selectedProject} />;
  }

  return (
    <>
      <ProjectsHero />
      <ListOfProjects />
    </>
  );
};

export default Projects;
