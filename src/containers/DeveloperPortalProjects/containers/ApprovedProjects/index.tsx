import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {api as projectsApi} from 'apis/projects';
import {Loader} from 'components';
import DeveloperPortalLayout from 'containers/DeveloperPortalProjects/components/DeveloperPortalLayout';
import {Project} from 'types/projects';

import './ApprovedProjects.scss';

const ApprovedProjects = () => {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async function getProjects() {
      try {
        const projectsResponse = await projectsApi.getProjects();
        const sortedProjects = projectsResponse.sort((a, b) => (a.title > b.title ? 1 : -1));
        setProjects(sortedProjects);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) return <div className="ApprovedProjects__error">{error}</div>;
  return (
    <DeveloperPortalLayout pageName="Approved Projects">
      <div className="ApprovedProjects">
        <div className="ApprovedProjects__heading">Approved Projects</div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="ApprovedProjects__grid">
            {projects.map((project) => (
              <div
                className="ApprovedProjects__grid-card"
                key={project.pk}
                onClick={() => history.push(`/developer/projects/approved-projects/${project.pk}`)}
                role="button"
                tabIndex={0}
              >
                <h2 className="ApprovedProjects__grid-card-title">{project.title}</h2>
                <p className="ApprovedProjects__grid-card-description">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </DeveloperPortalLayout>
  );
};

export default ApprovedProjects;
