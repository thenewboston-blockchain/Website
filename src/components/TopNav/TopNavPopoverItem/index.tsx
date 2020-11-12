import React, {FC, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';

import {Icon, IconType} from 'components';

import './TopNavPopoverItem.scss';

interface ComponentProps {
  closePopover(): void;
  description: string;
  iconSize?: number;
  iconType: IconType;
  shouldFocus?: boolean;
  shouldCloseOnTab?: boolean;
  shouldCloseOnShiftTab?: boolean;
  title: string;
  to: string;
}

const TopNavPopoverItem: FC<ComponentProps> = ({
  closePopover,
  description,
  iconSize,
  iconType,
  shouldFocus,
  shouldCloseOnTab,
  shouldCloseOnShiftTab,
  title,
  to,
}) => {
  const history = useHistory();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.nativeEvent.stopImmediatePropagation();
    history.push(to);
    closePopover();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>): void => {
    if (shouldCloseOnTab) {
      const isTabKey = e.key === 'Tab' && !e.shiftKey;
      if (isTabKey) {
        closePopover();
        e.preventDefault();
      }
    }

    if (shouldCloseOnShiftTab) {
      const isShiftTabKey = e.key === 'Tab' && e.shiftKey;
      if (isShiftTabKey) {
        closePopover();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (shouldFocus) {
      buttonRef.current?.focus();
    }
  }, [shouldFocus]);

  return (
    <button className="TopNavPopoverItem" onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={buttonRef}>
      <Icon className="TopNavPopoverItem__icon" icon={iconType} size={iconSize} />
      <div className="TopNavPopoverItem__right">
        <span className="TopNavPopoverItem__title">{title}</span>
        <span className="TopNavPopoverItem__description">{description}</span>
      </div>
    </button>
  );
};

export default TopNavPopoverItem;
