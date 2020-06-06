import React from 'react';

import {NavLink} from 'react-router-dom';

import Logo from 'assets/images/logo.png';
import './TopNav.scss';

const TopNav = () => {
  return (
    <div className="TopNav">
      <NavLink className="thenewboston" to="/">
        <img alt="thenewboston logo" className="logo" src={Logo} />
        <span>thenewboston</span>
      </NavLink>
      <NavLink to="/docs/1">Docs</NavLink>
      <NavLink to="/docs/2">Deployment Guide</NavLink>
      <NavLink to="/docs/3">Third Item</NavLink>
    </div>
  );
};

export default TopNav;
