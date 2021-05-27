import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';

import {Avatar, Button} from 'components';
import {useWindowDimensions} from 'hooks';
import {Icon, IconType} from '@thenewboston/ui';

import './ProjectCard.scss';

type Props = {
  description: string;
  id: string;
  logoUrl: string;
  projectLeadDisplayName: string;
  title: string;
};

const ProjectCard: FC<Props> = ({description, id, logoUrl, projectLeadDisplayName, title}) => {
  const history = useHistory();
  const {width} = useWindowDimensions();

  const handleButtonClick = (): void => {
    history.push(`/projects/${id}`);
  };

  return (
    <div className="ProjectCard">
      <div className="ProjectCard__top-container">
        <Avatar className="ProjectCard__avatar" src={logoUrl} size={width > 768 ? 64 : 20} />
        <div className="ProjectCard__title-container">
          <h1 className="ProjectCard__project-title">{title}</h1>
          <div className="ProjectCard__project-lead-container">
            <span className="ProjectCard__project-lead">Project Lead: </span>
            <span className="ProjectCard__project-lead-name">{projectLeadDisplayName}</span>
          </div>
        </div>
      </div>
      <div className="ProjectCard__description">{description}</div>
      <Button className="ProjectCard__details-button" onClick={handleButtonClick} variant="link">
        View Details
        <Icon className="ProjectCard__details-icon" icon={IconType.chevronRight} size={16} totalSize="unset" />
      </Button>
    </div>
  );
};

export default ProjectCard;
