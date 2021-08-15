import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {api as projectsApi} from 'apis/projects';
import {Loader} from 'components';
import DeveloperPortalLayout from 'containers/DeveloperPortalProjects/components/DeveloperPortalLayout';
import {Project} from 'types/projects';
import {approvedProjectsPath} from '../../constants';

import './ApprovedProjects.scss';
import ProjectDetails from '../ProjectDetails';

const ApprovedProjects = () => {
  const {projectId} = useParams<{projectId: string}>();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const [projectUrls, setProjectUrls] = useState<{title: string; url: string}[]>([]);

  useEffect(() => {
    (async function getProjects() {
      try {
        const projectsResponse = await projectsApi.getProjects();
        const sortedProjects = projectsResponse.sort((a, b) => (a.title > b.title ? 1 : -1));
        setProjects(sortedProjects);
        setProjectUrls(
          sortedProjects.map((p) => {
            return {
              title: p.title,
              url: `${approvedProjectsPath}/${p.pk}`,
            };
          }),
        );
        if (projectId) {
          const index = sortedProjects.findIndex((p) => p.pk === projectId);
          if (index === -1) {
            history.push('/developer/projects/approved-projects');
          } else {
            setProject(sortedProjects[index]);
            if (index !== sortedProjects.length - 1) {
              setNextProject(sortedProjects[index + 1]);
            } else {
              setNextProject(null);
            }
          }
        } else {
          setProject(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [projectId, history]);

  if (isLoading) return <Loader className="ApprovedProjects__loader" />;
  if (error) return <div className="ApprovedProjects__error">{error}</div>;
  return (
    <DeveloperPortalLayout approvedProjectUrls={projectUrls} pageName="Approved Projects" projectName={project?.title}>
      {project ? (
        <ProjectDetails project={project} nextProject={nextProject} />
      ) : (
        <div className="ApprovedProjects">
          <div className="ApprovedProjects__heading">Approved Projects</div>
          <div className="ApprovedProjects__grid">
            {projects.map((p) => (
              <div
                className="ApprovedProjects__grid-card"
                key={p.pk}
                onClick={() => history.push(`/developer/projects/approved-projects/${p.pk}`)}
                role="button"
                tabIndex={0}
              >
                <h2 className="ApprovedProjects__grid-card-title">{p.title}</h2>
                <p className="ApprovedProjects__grid-card-description">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </DeveloperPortalLayout>
  );
};

export default ApprovedProjects;
