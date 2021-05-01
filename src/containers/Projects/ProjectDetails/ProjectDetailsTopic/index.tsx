import React, {FC} from 'react';

import {ProjectIcon, ProjectIconType} from 'components/ProjectIcons';

import './ProjectDetailsTopic.scss';

type Props = {
  content: React.ReactNode;
  iconType: ProjectIconType;
  id: string;
  title: string;
  overview: string;
};

const ProjectDetailsTopic: FC<Props> = ({content, iconType, id, title, overview}) => {
  return (
    <div className="ProjectDetailsTopic" id={id}>
      <ProjectIcon icon={iconType} size={96} state="active" />
      <div className="ProjectDetailsTopic__content">
        <h1 className="ProjectDetailsTopic__content-title">{title}</h1>
        <h4 className="ProjectDetailsTopic__content-overview">{overview}</h4>
        {typeof content === 'string' ? <h3 className="ProjectDetailsTopic__content-main">{content}</h3> : content}
      </div>
    </div>
  );
};

export default ProjectDetailsTopic;
