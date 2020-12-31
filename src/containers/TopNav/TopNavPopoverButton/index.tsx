import React, {FC, ReactNode, useEffect} from 'react';
import clsx from 'clsx';

import {Icon, IconType, Popover} from 'components';
import {useWindowDimensions} from 'hooks';

import './TopNavPopoverButton.scss';

interface ComponentProps {
  anchorEl: HTMLButtonElement | null;
  buttonText?: string;
  children: ReactNode;
  className?: string;
  customButtonContent?: ReactNode;
  popoverId: string;
  setAnchorEl(newEl: HTMLButtonElement | null): void;
  unsetAnchorEl(): void;
}

const TopNavPopoverButton: FC<ComponentProps> = ({
  anchorEl,
  buttonText,
  children,
  className,
  customButtonContent,
  popoverId,
  setAnchorEl,
  unsetAnchorEl,
}) => {
  const {clientWidth} = useWindowDimensions();

  const popoverIsOpen = !!anchorEl;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    if (clientWidth < 1200 && popoverIsOpen) {
      unsetAnchorEl();
    }
  }, [popoverIsOpen, unsetAnchorEl, clientWidth]);

  return (
    <>
      <button className={clsx('TopNavPopoverButton', className)} onClick={handleButtonClick}>
        {customButtonContent || (
          <>
            {buttonText}
            <Icon
              className={clsx('TopNavPopoverButton__chevron-icon', {
                'TopNavPopoverButton__chevron-icon--open': popoverIsOpen,
              })}
              icon={IconType.chevronDown}
            />
          </>
        )}
      </button>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
        className="TopNavPopoverButton__Popover"
        closePopover={unsetAnchorEl}
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
