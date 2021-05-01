import React, {FC, useState} from 'react';

import clsx from 'clsx';

import {ProjectTopic} from 'types/projects';
import {ProjectIcon} from 'components/ProjectIcons';
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
        const isActive = currentTopic.title === title;
        const isHovered = hoveredTopicTitle === title;
        /* eslint-disable-next-line no-nested-ternary */
        const iconState = isActive ? 'active' : isHovered ? 'hover' : 'default';
        return (
          <div
            className="ProjectDetailsSideMenu__topic"
            key={title}
            role="button"
            onClick={() => onClick(topic)}
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            <ProjectIcon icon={iconType} size={32} state={iconState} />
            {shouldShowTopicTitle && (
              <div
                className={clsx('ProjectDetailsSideMenu__topic-title', {
                  'ProjectDetailsSideMenu__topic-title--active': isActive,
                  'ProjectDetailsSideMenu__topic-title--hovered': isHovered,
                })}
              >
                {title}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDetailsSideMenu;