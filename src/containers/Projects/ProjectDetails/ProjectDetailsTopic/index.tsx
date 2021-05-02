import React, {FC} from 'react';

import {ProjectIcon, ProjectIconType} from 'components/ProjectIcons';
import Linkify from 'linkifyjs/react';
import {getMultiLineDivFromString} from 'utils/strings';

import './ProjectDetailsTopic.scss';

type Props = {
  content: React.ReactNode;
  iconType: ProjectIconType;
  id: string;
  title: string;
  overview: string;
};

const ProjectDetailsTopic: FC<Props> = ({content, iconType, id, title, overview}) => {
  const processedContent = typeof content === 'string' ? getMultiLineDivFromString(content) : content;

  return (
    <div className="ProjectDetailsTopic" id={id}>
      <ProjectIcon className="ProjectDetailsTopic__icon" icon={iconType} size={96} state="active" />
      <div className="ProjectDetailsTopic__content">
        <h1 className="ProjectDetailsTopic__content-title">{title}</h1>
        <h4 className="ProjectDetailsTopic__content-overview">{overview}</h4>
        <div className="ProjectDetailsTopic__content-main">
          <Linkify options={{target: '_blank'}}>{processedContent}</Linkify>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsTopic;
