import React, {forwardRef, KeyboardEvent} from 'react';
import {Link} from 'react-router-dom';

import {Icon, IconType} from 'components';

import './TopNavPopoverItem.scss';

interface ComponentProps {
  closePopover(): void;
  description: string;
  handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>): void;
  iconSize?: number;
  iconType: IconType;
  title: string;
  to: string;
}

const TopNavPopoverItem = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({closePopover, description, handleKeyDown, iconSize, iconType, title, to}, ref) => {
    const handleButtonClick = (): void => {
      closePopover();
    };

    return (
      <Link className="TopNavPopoverItem" onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={ref} to={to}>
        <Icon className="TopNavPopoverItem__icon" icon={iconType} size={iconSize} />
        <div className="TopNavPopoverItem__right">
          <span className="TopNavPopoverItem__title">{title}</span>
          <span className="TopNavPopoverItem__description">{description}</span>
        </div>
      </Link>
    );
  },
);

export default TopNavPopoverItem;
