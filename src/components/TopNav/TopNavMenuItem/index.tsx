import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import './TopNavMenuItem.scss';

interface ComponentProps {
  activePatterns: string[];
  name: string;
  url: string;
}

const TopNavMenuItem: FC<ComponentProps> = ({activePatterns, name, url}) => {
  const getIsActive = (match: any, location: any) => {
    return !!activePatterns.filter((str) => location.pathname.includes(str)).length;
  };

  return (
    <NavLink className="TopNavMenuItem" isActive={getIsActive} to={url}>
      {name}
    </NavLink>
  );
};

export default TopNavMenuItem;
