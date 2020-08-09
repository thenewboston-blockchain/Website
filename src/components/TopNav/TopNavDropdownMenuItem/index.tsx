import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import './TopNavDropdownMenuItem.scss';

interface ComponentProps {
  activePatterns: string[];
  name: string;
  url: string;
}

const TopNavDropdownMenuItem: FC<ComponentProps> = ({activePatterns, name, url}) => {
  const getIsActive = (match: any, location: any) => {
    return !!activePatterns.filter((str) => location.pathname.includes(str)).length;
  };

  return (
    <NavLink className="TopNavDropdownMenuItem" isActive={getIsActive} to={url}>
      {name}
    </NavLink>
  );
};

export default TopNavDropdownMenuItem;
