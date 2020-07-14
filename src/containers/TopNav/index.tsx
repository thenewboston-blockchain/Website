import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/images/logo.png';

import './TopNav.scss';


const TopNav = (props: any) => {


  return (
    <div className="TopNav">
      {props.open ?
      <button onClick={() => props.open(true)} className="TopNav_MenuButton">
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      : ''}

      <NavLink className="thenewboston" to="/">
        <img alt="thenewboston logo" className="logo" src={Logo} />
        <span>thenewboston</span>
      </NavLink>

      <div className="TopNav__Links">
        <NavLink to="/docs">Documentation</NavLink>
        <NavLink to="/contributors">Contributors</NavLink>
        <NavLink to="/bank-api">Bank API</NavLink>
        <NavLink to="/confirmation-validator-api">Confirmation Validator API</NavLink>
        <NavLink to="/primary-validator-api">Primary Validator API</NavLink>
        <NavLink to="/deployment-guides">Deployment Guides</NavLink>
      </div>
    </div>
  );
};

export default TopNav;
