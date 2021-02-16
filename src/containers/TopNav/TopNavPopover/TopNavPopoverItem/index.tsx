import React, {forwardRef, KeyboardEvent} from 'react';
import {Link} from 'react-router-dom';

import {A, Icon, IconType} from 'components';

import './TopNavPopoverItem.scss';

interface ComponentProps {
  closePopover(): void;
  description: string;
  handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>): void;
  iconSize?: number;
  iconType: IconType;
  isExternal?: boolean;
  title: string;
  to: string;
}

const TopNavPopoverItem = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({closePopover, description, handleKeyDown, iconSize, iconType, isExternal, title, to}, ref) => {
    const handleButtonClick = (): void => {
      closePopover();
    };

    const renderChildren = () => {
      return (
        <>
          <Icon className="TopNavPopoverItem__icon" icon={iconType} size={iconSize} />
          <div className="TopNavPopoverItem__right">
            <span className="TopNavPopoverItem__title">{title}</span>
            <span className="TopNavPopoverItem__description">{description}</span>
          </div>
        </>
      );
    };

    return isExternal ? (
      <A className="TopNavPopoverItem" href={to} newWindow={false}>
        {renderChildren()}
      </A>
    ) : (
      <Link className="TopNavPopoverItem" onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={ref} to={to}>
        {renderChildren()}
      </Link>
    );
  },
);

export default TopNavPopoverItem;
