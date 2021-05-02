import React, {FC, useEffect, useState} from 'react';

import {getUser} from 'apis/users';
import {api as projectApi} from 'apis/projects';
import {Avatar} from 'components';
import Button from 'components/Button';
import {useWindowDimensions} from 'hooks';
import {User} from 'types/app/User';
import {Icon, IconType} from '@thenewboston/ui';

import './ProjectCard.scss';

type Props = {
  description: string;
  id: string;
  logoUrl: string;
  projectLead: string;
  title: string;
};

const ProjectCard: FC<Props> = ({description, id, logoUrl, projectLead, title}) => {
  const [projectLeadUser, setProjectLeadUser] = useState<User | null>(null);
  const {width} = useWindowDimensions();

  useEffect(() => {
    (async function () {
      // We require to call two extra APIs just to get the project lead's name, perhaps we
      // should adopt a BFF design
      const projectMemberResponse = await projectApi.getProjectMemberById(projectLead);
      const userResponse = await getUser({uuid: projectMemberResponse.user});
      setProjectLeadUser(userResponse);
    })();
  }, [projectLead]);

  return (
    <div className="ProjectCard">
      <div className="ProjectCard__top-container">
        <Avatar className="ProjectCard__avatar" src={logoUrl} size={width > 768 ? 64 : 20} />
        <div className="ProjectCard__title-container">
          <h1 className="ProjectCard__project-title">{title}</h1>
          <div className="ProjectCard__project-lead-container">
            <h4 className="ProjectCard__project-lead">Project Lead: </h4>
            <h4 className="ProjectCard__project-lead-name">{projectLeadUser?.display_name}</h4>
          </div>
        </div>
      </div>
      <div className="ProjectCard__description">{description}</div>
      <Button
        className="ProjectCard__details-button"
        onClick={() => window.open(`/projects/${id}`, '_blank', 'noreferrer noopener')}
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
