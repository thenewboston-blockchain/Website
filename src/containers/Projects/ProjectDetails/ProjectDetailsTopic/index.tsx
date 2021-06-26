import React, {forwardRef} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import ProjectIcon, {ProjectIconSize, ProjectIconType} from '../../ProjectIcons';
import './ProjectDetailsTopic.scss';

interface ComponentProps {
  content: React.ReactNode;
  iconType: ProjectIconType;
  id: string;
  title: string;
}

const ProjectDetailsTopic = forwardRef<HTMLDivElement, ComponentProps>(({content, iconType, id, title}, ref) => {
  const history = useHistory();
  const {pathname} = useLocation();

  return (
    <div className="ProjectDetailsTopic" ref={ref}>
      <ProjectIcon className="ProjectDetailsTopic__icon" icon={iconType} size={ProjectIconSize.large} state="active" />
      <div className="ProjectDetailsTopic__content">
        <div className="ProjectDetailsTopic__anchor" id={id} />
        <h1 className="ProjectDetailsTopic__content-title" onClick={() => history.push(`${pathname}#${id}`)}>
          {title}
        </h1>
        <div className="ProjectDetailsTopic__content-main">{content}</div>
      </div>
    </div>
  );
});

export default ProjectDetailsTopic;
