import React, {FC, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {api as projectsApi} from 'apis/projects';
import {Loader, Navigation} from 'components';
import DeveloperPortalLayout from 'containers/DeveloperPortalProjects/components/DeveloperPortalLayout';
import {Project} from 'types/projects';

import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsTopic from './ProjectDetailsTopic';
import {projectDetailsTopic} from './constants';

import './ProjectDetails.scss';

const ProjectDetails: FC = () => {
  const {projectId} = useParams<{projectId: string}>();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);

  useEffect(() => {
    try {
      if (!projectId) return history.push('/developer/projects/approved-projects');
      (async () => {
        const projectsResponse = await projectsApi.getProjects();
        const sortedProjects = projectsResponse.sort((a, b) => (a.title > b.title ? 1 : -1));
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
      })();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [projectId, setIsLoading, history]);

  if (isLoading)
    return (
      <div className="ProjectDetails__loader-container">
        <Loader />
      </div>
    );
  if (error || !project) return <div className="ProjectDetails__error">{error}</div>;
  return (
    <DeveloperPortalLayout pageName={project.title ?? 'Loading...'}>
      <div className="ProjectDetails">
        <ProjectDetailsHeader
          github={project.github_url}
          logoUrl={project.logo}
          title={project.title}
          projectLeadDisplayName={project.project_lead_display_name}
        />
        <div className="ProjectDetails__main">
          <ProjectDetailsTopic
            id={projectDetailsTopic.overview.anchor}
            content={project.overview}
            title={projectDetailsTopic.overview.title}
          />
          <hr className="ProjectDetails__divider" />
          <ProjectDetailsTopic
            id={projectDetailsTopic.problem.anchor}
            content={project.problem}
            title={projectDetailsTopic.problem.title}
          />
          <hr className="ProjectDetails__divider" />
          <ProjectDetailsTopic
            id={projectDetailsTopic.target_market.anchor}
            content={project.target_market}
            title={projectDetailsTopic.target_market.title}
          />
          <hr className="ProjectDetails__divider" />
          <ProjectDetailsTopic
            id={projectDetailsTopic.benefits.anchor}
            content={project.benefits}
            title={projectDetailsTopic.benefits.title}
          />
          <hr className="ProjectDetails__divider" />
          <ProjectDetailsTopic
            id={projectDetailsTopic.centered_around_tnb.anchor}
            content={project.centered_around_tnb}
            title={projectDetailsTopic.centered_around_tnb.title}
          />
          <hr className="ProjectDetails__divider" />
          <ProjectDetailsTopic
            id={projectDetailsTopic.estimated_completion_date.anchor}
            content={format(parseISO(project.estimated_completion_date), 'dd LLLL u - eeee ')}
            title={projectDetailsTopic.estimated_completion_date.title}
          />
          <hr className="ProjectDetails__divider" />
          <div className="ProjectDetails__bottom-bar">
            {nextProject ? (
              <Navigation
                path={`/developer/projects/approved-projects/${nextProject.pk}`}
                text={nextProject.title}
                type="right"
              />
            ) : (
              <Navigation path={`/developer/projects/rules`} text="Rules and Guidelines" type="right" />
            )}
          </div>
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default ProjectDetails;
