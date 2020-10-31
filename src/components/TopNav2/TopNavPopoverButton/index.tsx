import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {Icon, IconType, Popover} from 'components';
import {useBooleanState} from 'hooks';

import './TopNavPopoverButton.scss';

interface ComponentProps {
  buttonText: string;
  children: ReactNode;
  className?: string;
  popoverId: string;
}

const TopNavPopoverButton: FC<ComponentProps> = ({buttonText, children, className, popoverId}) => {
  const [popoverIsOpen, togglePopover, , closePopover] = useBooleanState(false);

  return (
    <button className={clsx('TopNavPopoverButton', className)} onClick={togglePopover}>
      {buttonText}
      <Icon
        className={clsx('TopNavPopoverButton__chevron-icon', {
          'TopNavPopoverButton__chevron-icon--open': popoverIsOpen,
        })}
        icon={IconType.chevronDown}
      />
      <Popover
        anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
        className="TopNavPopoverButton__Popover"
        closePopover={closePopover}
        id={popoverId}
        open={popoverIsOpen}
        transformOrigin={{horizontal: 'center', vertical: 'top'}}
        transformOffset={{horizontal: 0, vertical: 12}}
      >
        {children}
      </Popover>
    </button>
  );
};

export default TopNavPopoverButton;
