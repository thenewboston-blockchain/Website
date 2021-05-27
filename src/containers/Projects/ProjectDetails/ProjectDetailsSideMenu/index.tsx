import React, {FC, useState} from 'react';
import clsx from 'clsx';

import {useWindowDimensions} from 'hooks';
import {ProjectTopic} from 'types/projects';
import {sortByNumberKey} from 'utils/sort';

import ProjectIcon, {ProjectIconSize} from '../../ProjectIcons';
import {projectDetailsTopic} from '../constants';
import './ProjectDetailsSideMenu.scss';

type Props = {
  currentTopic: ProjectTopic;
  onClick(topic: ProjectTopic): void;
};

const orderedProjectDetailsTopic = Object.values(projectDetailsTopic).sort(sortByNumberKey('position'));

const ProjectDetailsSideMenu: FC<Props> = ({currentTopic, onClick}) => {
  const [hoveredTopicTitle, setHoveredTopicTitle] = useState<string>('');

  const {width} = useWindowDimensions();
  const shouldShowDetails = width > 992;

  const handleMouseEnter = (title: string) => {
    setHoveredTopicTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTopicTitle('');
  };

  return (
    <div className="ProjectDetailsSideMenu">
      {orderedProjectDetailsTopic.map((topic) => {
        const {iconType, title} = topic;
        const isActive = currentTopic.title === title;
        const isHovered = hoveredTopicTitle === title;

        let iconState: 'default' | 'active' | 'hover' = 'default';
        if (isActive) {
          iconState = 'active';
        } else if (isHovered) {
          iconState = 'hover';
        }

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
            <ProjectIcon
              className="ProjectDetailsSideMenu__icon"
              icon={iconType}
              size={shouldShowDetails ? ProjectIconSize.medium : ProjectIconSize.small}
              state={iconState}
            />
            {shouldShowDetails && (
              <div
                className={clsx('ProjectDetailsSideMenu__topic-title', {
                  'ProjectDetailsSideMenu__topic-title--active': isActive,
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
