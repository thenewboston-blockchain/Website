import React, {FC} from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {Navigation} from 'components';
import {Project} from 'types/projects';

import ProjectDetailsHeader from './ProjectDetailsHeader';
import ProjectDetailsTopic from './ProjectDetailsTopic';
import {projectDetailsTopic} from './constants';

import './ProjectDetails.scss';

type Props = {
  project: Project;
  nextProject: Project | null;
};

const ProjectDetails: FC<Props> = ({project, nextProject}) => {
  return (
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
  );
};

export default ProjectDetails;
