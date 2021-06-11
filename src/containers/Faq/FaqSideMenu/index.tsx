import React, {FC, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import clsx from 'clsx';

import {faqFilters, FaqFilterType} from 'types/faq';
import FaqIcon from '../icons';
import './FaqSideMenu.scss';

const FaqSideMenu: FC = () => {
  const history = useHistory();
  const {filter} = useParams<{filter: FaqFilterType}>();
  const [hoveredFaqFilter, setHoveredFaqFilter] = useState<FaqFilterType | null>(null);

  const handleFilterClick = (faqFilter: FaqFilterType) => (): void => {
    history.push(`/faq/${faqFilter}`);
  };

  const handleMouseEnter = (faqFilter: FaqFilterType) => (): void => {
    setHoveredFaqFilter(faqFilter);
  };

  const handleMouseLeave = (): void => {
    setHoveredFaqFilter(null);
  };

  return (
    <div className="FaqSideMenu">
      {Object.values(FaqFilterType).map((faqFilterType) => {
        const isActive = faqFilterType === filter;
        const isHovered = hoveredFaqFilter === faqFilterType;

        let iconState: 'active' | 'hover' | 'default';
        if (isActive) {
          iconState = 'active';
        } else if (isHovered) {
          iconState = 'hover';
        } else {
          iconState = 'default';
        }

        return (
          <div
            className="FaqSideMenu__topic"
            key={faqFilterType}
            role="button"
            onClick={handleFilterClick(faqFilterType)}
            onMouseEnter={handleMouseEnter(faqFilterType)}
            onMouseLeave={handleMouseLeave}
            tabIndex={0}
          >
            <FaqIcon topic={faqFilterType} size={28} state={iconState} />
            <div
              className={clsx('FaqSideMenu__topic-title', {
                'FaqSideMenu__topic-title--active': isActive,
                'FaqSideMenu__topic-title--hovered': isHovered,
              })}
            >
              {faqFilters[faqFilterType].label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqSideMenu;
