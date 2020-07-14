import React, {FC, ReactNode, useState} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/images/logo.png';

import './AdminLayout.scss';

interface ComponentProps {
  left: ReactNode;
  right: ReactNode;
}

export const AdminLayout: FC<ComponentProps> = ({left, right}) => {
  const [leftMenuOpen, toggleLeftMenuOpen] = useState(window.innerWidth > 1200);

  return (
    <div className={`AdminLayout ${leftMenuOpen ? 'left-menu-open' : ''}`}>
      <div className="top">
        <div className="TopNav">
          <div className="left-menu-toggle-container" onClick={() => toggleLeftMenuOpen(!leftMenuOpen)}>
            <span className="material-icons left-menu-toggle">menu</span>
          </div>
          <NavLink className="thenewboston" to="/">
            <img alt="thenewboston logo" className="logo" src={Logo} />
            <span>thenewboston</span>
          </NavLink>
        </div>
      </div>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  );
};

export default AdminLayout;
