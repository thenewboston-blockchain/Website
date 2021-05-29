import React, {FC, useState} from 'react';
import {useHistory} from 'react-router-dom';
import clsx from 'clsx';

import {useWindowDimensions} from 'hooks';
import {ProjectTopic} from 'types/projects';
import {isTouchScreenDevice} from 'utils/device';

import ProjectIcon, {ProjectIconSize} from '../../ProjectIcons';
import {orderedProjectDetailsTopic} from '../constants';
import './ProjectDetailsSideMenu.scss';

type Props = {
  currentTopicPosition: number;
  setCurrentTopicPosition(position: number): void;
};

const ProjectDetailsSideMenu: FC<Props> = ({currentTopicPosition, setCurrentTopicPosition}) => {
  const history = useHistory();
  const [hoveredTopicTitle, setHoveredTopicTitle] = useState<string>('');
  const currentTopic = orderedProjectDetailsTopic[currentTopicPosition];

  const {width} = useWindowDimensions();
  const shouldShowDetails = width > 992;

  const handleMenuClick = (topic: ProjectTopic) => (): void => {
    setCurrentTopicPosition(topic.position);
    history.push(`#${topic.anchor}`);
  };

  const handleMouseEnter = (title: string) => {
    // touch screen devices does not need to have hover effect
    if (isTouchScreenDevice()) {
      return;
    }
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
            onClick={handleMenuClick(topic)}
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
