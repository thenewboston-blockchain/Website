import React, {FC} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import {Avatar, Button} from 'components';
import './ProjectDetailsHeader.scss';

type Props = {
  github: string;
  logoUrl: string;
  projectLeadDisplayName: string;
  title: string;
};

const ProjectDetailsHeader: FC<Props> = ({github, logoUrl, projectLeadDisplayName, title}) => {
  return (
    <div className="ProjectDetailsHeader">
      <Avatar className="ProjectDetailsHeader__avatar" src={logoUrl} size={60} />
      <div className="ProjectDetailsHeader__main-container">
        <div className="ProjectDetailsHeader__left-container">
          <div className="ProjectDetailsHeader__title-container">
            <h1 className="ProjectDetailsHeader__project-title">{title}</h1>
            <div className="ProjectDetailsHeader__project-lead-container">
              <span className="ProjectDetailsHeader__project-lead">Project Lead: </span>
              <span className="ProjectDetailsHeader__project-lead-name">{projectLeadDisplayName}</span>
            </div>
          </div>
        </div>
        <div className="ProjectDetailsHeader__right-container">
          <Button
            className="ProjectDetailsHeader__github-button"
            onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
            variant="outlined"
          >
            <Icon className="ProjectDetailsHeader__github-icon" icon={IconType.github} size={24} totalSize="unset" />
            <span className="ProjectDetailsHeader__github-title">GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;
