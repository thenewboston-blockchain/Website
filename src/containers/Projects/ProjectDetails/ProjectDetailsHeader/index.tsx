import React, {FC, useEffect, useState} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import {getUser} from 'apis/users';
import {api as projectApi} from 'apis/projects';
import {Avatar, Button} from 'components';
import {User} from 'types/app/User';
import './ProjectDetailsHeader.scss';

type Props = {
  github: string;
  logoUrl: string;
  projectLead: string;
  title: string;
};

const ProjectDetailsHeader: FC<Props> = ({github, logoUrl, projectLead, title}) => {
  const [projectLeadUser, setProjectLeadUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      // We require to call two extra APIs just to get the project lead's name, perhaps we
      // should adopt a BFF design
      const projectMemberResponse = await projectApi.getProjectMemberById(projectLead);
      const userResponse = await getUser({uuid: projectMemberResponse.user});
      setProjectLeadUser(userResponse);
    })();
  }, [projectLead]);

  return (
    <div className="ProjectDetailsHeader">
      <Avatar className="ProjectDetailsHeader__avatar" src={logoUrl} size={40} />
      <div className="ProjectDetailsHeader__main-container">
        <div className="ProjectDetailsHeader__left-container">
          <div className="ProjectDetailsHeader__title-container">
            <h1 className="ProjectDetailsHeader__project-title">{title}</h1>
            <div className="ProjectDetailsHeader__project-lead-container">
              <span className="ProjectDetailsHeader__project-lead">Project Lead: </span>
              <span className="ProjectDetailsHeader__project-lead-name">{projectLeadUser?.display_name || ''}</span>
            </div>
          </div>
        </div>
        <div className="ProjectDetailsHeader__right-container">
          <Button
            className="ProjectDetailsHeader__github-button"
            onClick={() => window.open(github, '_blank')}
            variant="outlined"
          >
            <Icon className="ProjectDetailsHeader__github-icon" icon={IconType.github} size={24} totalSize="unset" />
            {title}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsHeader;
