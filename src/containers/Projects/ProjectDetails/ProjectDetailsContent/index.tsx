import React, {FC} from 'react';

import {Milestone, Project} from 'types/projects';
import ProjectDetailsTopic from '../ProjectDetailsTopic';
import {projectDetailsTopic} from '../constants';
import './ProjectDetailsContent.scss';

type Props = {
  milestones: Milestone[];
  project: Project;
};

const ProjectDetailsContent: FC<Props> = ({milestones, project}) => {
  const renderMilestones = () => {
    return milestones.map((milestone) => {
      return (
        <div className="ProjectDetailsContent__milestone" key={milestone.number}>
          <h2 className="ProjectDetailsContent__milestone-number">Milestone {milestone.number}</h2>
          <h2 className="ProjectDetailsContent__milestone-description">{milestone.description}</h2>
        </div>
      );
    });
  };
  return (
    <div className="ProjectDetailsContent">
      <ProjectDetailsTopic
        content={project.overview}
        iconType={projectDetailsTopic.overview.iconType}
        overview={projectDetailsTopic.overview.overview}
        title={projectDetailsTopic.overview.title}
      />
      <ProjectDetailsTopic
        content={project.problem}
        iconType={projectDetailsTopic.problem.iconType}
        overview={projectDetailsTopic.problem.overview}
        title={projectDetailsTopic.problem.title}
      />
      <ProjectDetailsTopic
        content={project.target_market}
        iconType={projectDetailsTopic.target_market.iconType}
        overview={projectDetailsTopic.target_market.overview}
        title={projectDetailsTopic.target_market.title}
      />
      <ProjectDetailsTopic
        content={project.benefits}
        iconType={projectDetailsTopic.benefits.iconType}
        overview={projectDetailsTopic.benefits.overview}
        title={projectDetailsTopic.benefits.title}
      />
      <ProjectDetailsTopic
        content={project.centered_around_tnb}
        iconType={projectDetailsTopic.centered_around_tnb.iconType}
        overview={projectDetailsTopic.centered_around_tnb.overview}
        title={projectDetailsTopic.centered_around_tnb.title}
      />
      <ProjectDetailsTopic
        content={project.estimated_completion_date}
        iconType={projectDetailsTopic.estimated_completion_date.iconType}
        overview={projectDetailsTopic.estimated_completion_date.overview}
        title={projectDetailsTopic.estimated_completion_date.title}
      />
      <ProjectDetailsTopic
        content={renderMilestones()}
        iconType={projectDetailsTopic.roadmap.iconType}
        overview={projectDetailsTopic.roadmap.overview}
        title={projectDetailsTopic.roadmap.title}
      />
    </div>
  );
};

export default ProjectDetailsContent;
