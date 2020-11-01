import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';

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
  const history = useHistory();

  const handleButtonClick = (): void => {
    history.push(to);
    closePopover();
  };

  return (
    <button className="TopNavPopoverItem" onClick={handleButtonClick}>
      <Icon className="TopNavPopoverItem__icon" icon={iconType} size={iconSize} />
      <div className="TopNavPopoverItem__right">
        <span className="TopNavPopoverItem__title">{title}</span>
        <span className="TopNavPopoverItem__description">{description}</span>
      </div>
    </button>
  );
};

export default TopNavPopoverItem;
