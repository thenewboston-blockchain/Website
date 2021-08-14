import React, {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {Link, scroller} from 'react-scroll';
import clsx from 'clsx';

import {NAVBAR_HEIGHT} from 'constants/offsets';
import {useWindowDimensions} from 'hooks';
import {isTouchScreenDevice} from 'utils/device';

import ProjectIcon, {ProjectIconSize} from '../../ProjectIcons';
import {orderedProjectDetailsTopic} from '../constants';
import './ProjectDetailsSideMenu.scss';

const BANNER_HEIGHT = 158;
const BANNER_HEIGHT_480 = 241;
const TIMEOUT_DELAY = 100;

const ProjectDetailsSideMenu: FC = () => {
  const [hoveredTopicTitle, setHoveredTopicTitle] = useState<string>('');
  const [currentTopicAnchor, setCurrentTopicAnchor] = useState<string>('');

  const {hash} = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.slice(1), {
          ignoreCancelEvents: true,
          offset: -TOTAL_OFFSET,
        });
      }, TIMEOUT_DELAY);
    }
    // eslint-disable-next-line
  }, []);

  const {width} = useWindowDimensions();
  const shouldShowDetails = width > 992;
  const detailsBannerHeight = width > 480 ? BANNER_HEIGHT : BANNER_HEIGHT_480;
  const TOTAL_OFFSET = NAVBAR_HEIGHT + detailsBannerHeight + 32;

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

  const handleSetActive = (anchor: string) => {
    setCurrentTopicAnchor(anchor);
  };

  return (
    <div className="ProjectDetailsSideMenu">
      {orderedProjectDetailsTopic.map((topic) => {
        const {anchor, iconType, title} = topic;
        const isActive = anchor === currentTopicAnchor;
        const isHovered = hoveredTopicTitle === title;

        let iconState: 'default' | 'active' | 'hover' = 'default';
        if (isActive) {
          iconState = 'active';
        } else if (isHovered) {
          iconState = 'hover';
        }

        return (
          <Link
            className="ProjectDetailsSideMenu__topic"
            key={anchor}
            ignoreCancelEvents
            offset={-(NAVBAR_HEIGHT + detailsBannerHeight + 32)} // Navbar + Banner + Padding
            onMouseEnter={() => handleMouseEnter(title)}
            onMouseLeave={handleMouseLeave}
            onSetActive={() => handleSetActive(anchor)}
            hashSpy
            smooth
            spy
            to={anchor}
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
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectDetailsSideMenu;
