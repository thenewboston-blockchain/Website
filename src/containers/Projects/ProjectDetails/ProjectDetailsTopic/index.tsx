import React, {FC} from 'react';

import ProjectIcon, {ProjectIconSize, ProjectIconType} from '../../ProjectIcons';
import './ProjectDetailsTopic.scss';

interface ComponentProps {
  content: React.ReactNode;
  iconType: ProjectIconType;
  id: string;
  overview: string;
  title: string;
}

const ProjectDetailsTopic: FC<ComponentProps> = ({content, iconType, id, title, overview}) => {
  return (
    <div className="ProjectDetailsTopic" id={id}>
      <ProjectIcon className="ProjectDetailsTopic__icon" icon={iconType} size={ProjectIconSize.large} state="active" />
      <div className="ProjectDetailsTopic__content">
        <h1 className="ProjectDetailsTopic__content-title">{title}</h1>
        <h4 className="ProjectDetailsTopic__content-overview">{overview}</h4>
        <div className="ProjectDetailsTopic__content-main">{content}</div>
      </div>
    </div>
  );
};

export default ProjectDetailsTopic;
