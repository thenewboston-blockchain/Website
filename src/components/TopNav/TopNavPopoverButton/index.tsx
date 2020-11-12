import React, {FC, ReactNode, useEffect, useRef} from 'react';
import clsx from 'clsx';

import {Icon, IconType, Popover} from 'components';
import {useWindowDimensions} from 'hooks';

import './TopNavPopoverButton.scss';

interface ComponentProps {
  anchorEl: HTMLButtonElement | null;
  buttonText: string;
  children: ReactNode;
  className?: string;
  selectedDropdown: string;
  setDropdownButton: any;
  setFocus(isClickEvent: boolean): void;
  popoverId: string;
  setAnchorEl(newEl: HTMLButtonElement | null): void;
  unsetAnchorEl(): void;
}

const TopNavPopoverButton: FC<ComponentProps> = ({
  anchorEl,
  buttonText,
  children,
  className,
  setDropdownButton,
  selectedDropdown,
  setFocus,
  popoverId,
  setAnchorEl,
  unsetAnchorEl,
}) => {
  const {clientWidth} = useWindowDimensions();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const isKeyEvent = useRef<boolean>(false);

  const popoverIsOpen = !!anchorEl;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    isKeyEvent.current = false;
    e.nativeEvent.stopImmediatePropagation();
    console.log('click');
    // Focusing the button is needed for Firefox.
    buttonRef.current?.focus();
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    setAnchorEl(null);
    setFocus(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    isKeyEvent.current = true;
    const canFocusOnTabKey = e.key === 'Tab' && !e.shiftKey && !!anchorEl;
    const shouldCloseOnShiftTabKey = e.key === 'Tab' && e.shiftKey && !!anchorEl;
    if (canFocusOnTabKey) {
      e.preventDefault();
      setFocus(true);
    }
    if (shouldCloseOnShiftTabKey) {
      unsetAnchorEl();
    }
    setDropdownButton('');
  };

  const handleBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (anchorEl && !isKeyEvent.current) {
      unsetAnchorEl();
    }
  };

  useEffect(() => {
    if (clientWidth < 992 && popoverIsOpen) {
      unsetAnchorEl();
    }
  }, [popoverIsOpen, unsetAnchorEl, clientWidth]);

  useEffect(() => {
    console.log(buttonText, selectedDropdown);
    const isSelectedDropdown = buttonText === selectedDropdown;
    if (isSelectedDropdown) {
      buttonRef.current?.focus();
    }
  }, [buttonText, selectedDropdown]);
  return (
    <>
      <button
        className={clsx('TopNavPopoverButton', className)}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        ref={buttonRef}
      >
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
