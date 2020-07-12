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
      <NavLink to="/docs">Documentation</NavLink>
      <NavLink to="/deployment-guides">Deployment Guides</NavLink>
      <NavLink to="/bank-api">Bank API</NavLink>
      <NavLink to="/confirmation-validator-api">Confirmation Validator API</NavLink>
      <NavLink to="/primary-validator-api">Primary Validator API</NavLink>
    </div>
  );
};

export default TopNav;
