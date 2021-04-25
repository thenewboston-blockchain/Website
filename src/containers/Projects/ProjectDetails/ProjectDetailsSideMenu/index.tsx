import React, {FC, useState} from 'react';

import clsx from 'clsx';

import {ProjectTopic} from 'types/projects';
import {Icon} from '@thenewboston/ui';
import {useWindowDimensions} from 'hooks';
import {projectDetailsTopic} from '../constants';

import './ProjectDetailsSideMenu.scss';

type Props = {
  currentTopic: ProjectTopic;
  onClick: (topic: ProjectTopic) => void;
};

const ProjectDetailsSideMenu: FC<Props> = ({currentTopic, onClick}) => {
  const [hoveredTopicTitle, setHoveredTopicTitle] = useState<string>('');

  const {width} = useWindowDimensions();
  const handleMouseEnter = (title: string) => {
    setHoveredTopicTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTopicTitle('');
  };
  const shouldShowTopicTitle = width > 768;
  return (
    <div className="ProjectDetailsSideMenu">
      {Object.values(projectDetailsTopic).map((topic) => {
        const {iconType, title} = topic;
        return (
          <div
            className={clsx('ProjectDetailsSideMenu__topic', {
              'ProjectDetailsSideMenu__topic--active': currentTopic.title === title,
              'ProjectDetailsSideMenu__topic--hovered': hoveredTopicTitle === title,
            })}
            key={title}
            role="button"
            onClick={() => onClick(topic)}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            <Icon icon={iconType} size={32} />
            {shouldShowTopicTitle && title}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetailsSideMenu;
