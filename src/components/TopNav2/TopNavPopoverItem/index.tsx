import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {Icon, IconType} from 'components';

import './TopNavPopoverItem.scss';

interface ComponentProps {
  description: string;
  iconSize?: number;
  iconType: IconType;
  title: string;
  to: string;
}

const TopNavPopoverItem: FC<ComponentProps> = ({description, iconSize, iconType, title, to}) => {
  return (
    <NavLink className="TopNavPopoverItem" to={to}>
      <Icon className="TopNavPopoverItem__icon" icon={iconType} size={iconSize} />
      <div className="TopNavPopoverItem__right">
        <span className="TopNavPopoverItem__title">{title}</span>
        <span className="TopNavPopoverItem__description">{description}</span>
      </div>
    </NavLink>
  );
};

export default TopNavPopoverItem;
