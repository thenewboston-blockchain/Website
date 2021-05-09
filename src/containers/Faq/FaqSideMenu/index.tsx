import React, {FC, useState} from 'react';

import clsx from 'clsx';

import {FaqTopic} from 'constants/faq';
import FaqIcon from '../icons';

import './FaqSideMenu.scss';

type Props = {
  selectedFilter: FaqTopic;
  setSelectedFilter: (filter: FaqTopic) => void;
};

const FaqSideMenu: FC<Props> = ({selectedFilter, setSelectedFilter}) => {
  const [hoveredTopicTitle, setHoveredTopicTitle] = useState<string>('');
  const handleMouseEnter = (title: string) => {
    setHoveredTopicTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTopicTitle('');
  };

  return (
    <div className="FaqSideMenu">
      {Object.values(FaqTopic).map((topic) => {
        const isActive = topic === selectedFilter;
        const isHovered = hoveredTopicTitle === topic;
        /* eslint-disable-next-line no-nested-ternary */
        const iconState = isActive ? 'active' : isHovered ? 'hover' : 'default';
        return (
          <div
            className="FaqSideMenu__topic"
            key={topic}
            role="button"
            onClick={() => setSelectedFilter(topic)}
            onMouseEnter={() => handleMouseEnter(topic)}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            <FaqIcon topic={topic} size={28} state={iconState} />
            <div
              className={clsx('FaqSideMenu__topic-title', {
                'FaqSideMenu__topic-title--active': isActive,
                'FaqSideMenu__topic-title--hovered': isHovered,
              })}
            >
              {topic}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqSideMenu;
