import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import './TopNavPopoverItemSimple.scss';

interface ComponentProps {
  closePopover(): void;
  title: string;
  to: string;
}

const TopNavPopoverItemSimple: FC<ComponentProps> = ({closePopover, title, to}) => {
  const handleButtonClick = (): void => {
    closePopover();
  };

  return (
    <Link className="TopNavPopoverItemSimple" to={to} onClick={handleButtonClick}>
      {title}
    </Link>
  );
};

export default TopNavPopoverItemSimple;
