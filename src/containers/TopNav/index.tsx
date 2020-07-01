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
      <NavLink to="/bank-api">Bank API</NavLink>
      <NavLink to="/pv-api">PV API</NavLink>
      <NavLink to="/cv-api">CV API</NavLink>
    </div>
  );
};

export default TopNav;
