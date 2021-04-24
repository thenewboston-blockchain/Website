import React, {FC} from 'react';

import {Avatar} from 'components';
import Button from 'components/Button';
import {Icon, IconType} from '@thenewboston/ui';
import './ProjectDetailsHeader.scss';

type Props = {
  github: string;
  logoUrl: string;
  projectLead: string;
  title: string;
};

const ProjectDetailsHeader: FC<Props> = ({github, logoUrl, projectLead, title}) => {
  return (
    <div className="ProjectDetailsHeader">
      <Avatar src={logoUrl} size={64} />
      <div className="ProjectDetailsHeader__main-container">
        <div className="ProjectDetailsHeader__left-container">
          <div className="ProjectDetailsHeader__title-container">
            <h1 className="ProjectDetailsHeader__project-title">{title}</h1>
            <div className="ProjectDetailsHeader__project-lead-container">
              <h4 className="ProjectDetailsHeader__project-lead">Project Lead: </h4>
              <h4 className="ProjectDetailsHeader__project-lead-name">{projectLead}</h4>
            </div>
          </div>
        </div>
        <div className="ProjectDetailsHeader__right-container">
          <Button
            iconLeft={<Icon icon={IconType.github} size={24} />}
            onClick={() => window.open(github, '_blank')}
            rounded
            type="outlined"
          >
            {title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;
