import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';

import {Icon, IconType, Popover} from 'components';
import {useWindowDimensions} from 'hooks';

import './TopNavPopoverButton.scss';

interface ComponentProps {
  buttonText: string;
  children: ReactNode;
  className?: string;
  popoverId: string;
}

const TopNavPopoverButton: FC<ComponentProps> = ({buttonText, children, className, popoverId}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const {width} = useWindowDimensions();

  const popoverIsOpen = !!anchorEl;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    setAnchorEl(null);
  };

  const handleClosePopover = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  useEffect(() => {
    if (width < 992 && popoverIsOpen) {
      handleClosePopover();
    }
  }, [handleClosePopover, popoverIsOpen, width]);

  return (
    <>
      <button className={clsx('TopNavPopoverButton', className)} onClick={handleButtonClick}>
        {buttonText}
        <Icon
          className={clsx('TopNavPopoverButton__chevron-icon', {
            'TopNavPopoverButton__chevron-icon--open': popoverIsOpen,
          })}
          icon={IconType.chevronDown}
        />
      </button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
        className="TopNavPopoverButton__Popover"
        closePopover={handleClosePopover}
        id={popoverId}
        open={popoverIsOpen}
        transformOrigin={{horizontal: 'center', vertical: 'top'}}
        transformOffset={{horizontal: 0, vertical: 12}}
      >
        {children}
      </Popover>
    </>
  );
};

export default TopNavPopoverButton;
