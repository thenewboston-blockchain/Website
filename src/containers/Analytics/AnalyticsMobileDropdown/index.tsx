import React, {FC, ReactNode, useCallback, useState} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {Popover} from 'components';
import {useWindowDimensions} from 'hooks';
import {AnalyticsCategory} from 'types/analytics';

import './AnalyticsMobileDropdown.scss';

interface AnalyticsMobileDropdownProps {
  navLinks: ReactNode;
  selectedCategory: AnalyticsCategory | null;
}

const AnalyticsMobileDropdown: FC<AnalyticsMobileDropdownProps> = ({navLinks, selectedCategory}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const {clientWidth} = useWindowDimensions();

  const popoverIsOpen = !!anchorEl;

  const unsetAnchorEl = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    unsetAnchorEl();
  };

  return (
    <>
      <button className="AnalyticsMobileDropdown" onClick={handleButtonClick}>
        <span className="AnalyticsMobileDropdown__type">{selectedCategory?.title || ''}</span>
        <Icon
          className={clsx('AnalyticsMobileDropdown__toggle', {'AnalyticsMobileDropdown__toggle--open': popoverIsOpen})}
          icon={IconType.chevronDown}
          size={24}
        />
      </button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        transformOffset={{horizontal: clientWidth > 768 ? 24 : 8, vertical: 0}}
        closePopover={unsetAnchorEl}
        open={popoverIsOpen}
      >
        <div className="AnalyticsMobileDropdown__dropdown">{navLinks}</div>
      </Popover>
    </>
  );
};

export default AnalyticsMobileDropdown;
