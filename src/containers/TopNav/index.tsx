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
      <NavLink to="/docs">Docs</NavLink>
    </div>
  );
};

export default TopNav;
