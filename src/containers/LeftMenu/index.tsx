import React from 'react';
import {NavLink} from 'react-router-dom';

import './LeftMenu.scss';

const LeftMenu = () => {
  return (
    <nav className="LeftMenu">
      <NavLink to="/docs/1">Home</NavLink>
      <NavLink to="/docs/2">Second</NavLink>
      <NavLink to="/docs/3">Third Item</NavLink>
    </nav>
  );
};

export default LeftMenu;
