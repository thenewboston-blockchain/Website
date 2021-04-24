import React, {FC} from 'react';

import {Icon, IconType} from '@thenewboston/ui';

import './ProjectDetailsTopic.scss';

type Props = {
  content: React.ReactNode;
  iconType: IconType;
  title: string;
  overview: string;
};

const ProjectDetailsTopic: FC<Props> = ({content, iconType, title, overview}) => {
  return (
    <div className="ProjectDetailsTopic">
      <Icon icon={iconType} size={96} />
      <div className="ProjectDetailsTopic__content">
        <h1 className="ProjectDetailsTopic__content-title">{title}</h1>
        <h4 className="ProjectDetailsTopic__content-overview">{overview}</h4>
        {content}
      </div>
    </div>
  );
};

export default ProjectDetailsTopic;
