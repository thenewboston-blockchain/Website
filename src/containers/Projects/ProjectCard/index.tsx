import React, {FC} from 'react';

import {Avatar} from 'components';
import Button from 'components/Button';
import {Icon, IconType} from '@thenewboston/ui';

import './ProjectCard.scss';

type Props = {
  description: string;
  logoUrl: string;
  projectLead: string;
  title: string;
};

const ProjectCard: FC<Props> = ({description, logoUrl, projectLead, title}) => {
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__top-container">
        <Avatar src={logoUrl} size={64} />
        <div className="ProjectCard__title-container">
          <h1 className="ProjectCard__project-title">{title}</h1>
          <div className="ProjectCard__project-lead-container">
            <h4 className="ProjectCard__project-lead">Project Lead: </h4>
            <h4 className="ProjectCard__project-lead-name">{projectLead}</h4>
          </div>
        </div>
      </div>
      <div className="ProjectCard__description">{description}</div>
      <Button
        className="ProjectCard__details-button"
        onClick={() => console.log('visit profile details')}
        iconRight={<Icon icon={IconType.chevronRight} size={16} />}
        type="empty"
        rounded
      >
        View Details
      </Button>
    </div>
  );
};

export default ProjectCard;
