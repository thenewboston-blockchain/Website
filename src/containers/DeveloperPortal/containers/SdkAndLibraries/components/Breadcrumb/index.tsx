import React, {useCallback, useState} from 'react';
import {useLocation} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';
import clsx from 'clsx';

import {Popover} from 'components';
import {NAVBAR_HEIGHT, BREADCRUMB_HEIGHT, TOP_LINKS_HEIGHT} from 'constants/offsets';
import {useWindowDimensions} from 'hooks';
import {SFC} from 'types/generic';
import {Language} from 'types/libraries';

import {PATHNAME_TO_TITLE_MAPPING} from '../../constants';
import BreadcrumbSection from '../../../../components/BreadcrumbSection';
import Filters from '../Filters';

import './Breadcrumb.scss';

type Props = {
  selectedLanguages: string[];
  toggleLanguage: (language: Language) => void;
};

const Breadcrumb: SFC<Props> = ({className, selectedLanguages, toggleLanguage}) => {
  const location = useLocation();
  const {width, clientWidth} = useWindowDimensions();
  const pathnames = location.pathname.slice(1).split('/');

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const isPopoverOpen = !!anchorEl;

  const unsetAnchorEl = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    unsetAnchorEl();
  };

  return (
    <div className={clsx('Breadcrumb', className)}>
      {pathnames.map((pathname, index) => {
        const isLastIndex = index === pathnames.length - 1;
        // developer
        if (index === 0) {
          return (
            <BreadcrumbSection
              isSectionSelected={isLastIndex}
              hasItems={false}
              hasPrecedingArrowIcon={false}
              key={pathname}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`/${pathname}`}
            />
          );
        }

        // sdks and libraries
        return (
          <BreadcrumbSection
            isItemsInSamePage
            isSectionSelected={isLastIndex}
            hasItems={false}
            hasPrecedingArrowIcon
            key={pathname}
            scrollOffset={-(NAVBAR_HEIGHT + TOP_LINKS_HEIGHT + BREADCRUMB_HEIGHT)}
            title={PATHNAME_TO_TITLE_MAPPING[pathname]}
            titleLink={`/developer/${pathname}`}
          />
        );
      })}
      {/* Filter */}
      {Boolean(width < 992) && (
        <>
          <Icon className="Breadcrumb__filter-icon" icon={IconType.filterMenu} onClick={handleButtonClick} size={20} />
          <Popover
            anchorEl={anchorEl}
            open={isPopoverOpen}
            closePopover={unsetAnchorEl}
            anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
            transformOrigin={{horizontal: clientWidth < 380 ? 'right' : 'center', vertical: 'top'}}
            transformOffset={{horizontal: 0, vertical: 16}}
          >
            <Filters selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
          </Popover>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
