import React, {forwardRef, KeyboardEvent} from 'react';
import {Link} from 'react-router-dom';

import './TopNavPopoverItemSimple.scss';

interface ComponentProps {
  closePopover(): void;
  handleKeyDown(e: KeyboardEvent<HTMLAnchorElement>): void;
  title: string;
  to: string;
}

const TopNavPopoverItemSimple = forwardRef<HTMLAnchorElement, ComponentProps>(
  ({closePopover, handleKeyDown, title, to}, ref) => {
    const handleButtonClick = (): void => {
      closePopover();
    };

    return (
      <Link className="TopNavPopoverItemSimple" onClick={handleButtonClick} onKeyDown={handleKeyDown} ref={ref} to={to}>
        {title}
      </Link>
    );
  },
);

export default TopNavPopoverItemSimple;
