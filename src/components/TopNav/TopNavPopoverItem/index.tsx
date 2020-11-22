import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Icon, IconType} from 'components';

import './TopNavPopoverItem.scss';

interface ComponentProps {
  closePopover(): void;
  description: string;
  iconSize?: number;
  iconType: IconType;
  title: string;
  to: string;
}

const TopNavPopoverItem: FC<ComponentProps> = ({closePopover, description, iconSize, iconType, title, to}) => {
  const handleButtonClick = (): void => {
    closePopover();
  };

  return (
    <Link className="TopNavPopoverItem" to={to} onClick={handleButtonClick}>
      <Icon className="TopNavPopoverItem__icon" icon={iconType} size={iconSize} />
      <div className="TopNavPopoverItem__right">
        <span className="TopNavPopoverItem__title">{title}</span>
        <span className="TopNavPopoverItem__description">{description}</span>
      </div>
    </Link>
  );
};

export default TopNavPopoverItem;
