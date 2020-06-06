import React from 'react';
import {NavLink} from 'react-router-dom';

import './LeftMenu.scss';

const LeftMenu = () => {
  return (
    <nav className="LeftMenu">
      <NavLink to="/docs/1">Docs</NavLink>
      <NavLink to="/docs/2">Deployment Guide</NavLink>
      <NavLink to="/docs/3">Third Item</NavLink>
    </nav>
  );
};

export default LeftMenu;
