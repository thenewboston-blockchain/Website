import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/svgs/thenewboston.svg';

import './TopNav.scss';

interface ComponentProps {
  leftMenuToggle?: ReactNode;
}

export const TopNav: FC<ComponentProps> = ({leftMenuToggle}) => {
  const renderLeftItems = () => (
    <div className="left-items">
      {leftMenuToggle && leftMenuToggle}
      <NavLink className="thenewboston" to="/">
        <img alt="thenewboston Logo" className="logo" src={Logo} />
      </NavLink>
    </div>
  );

  const renderRightItems = () => (
    <div className="right-items">
      <NavLink to="/contribute">Contribute</NavLink>
      <NavLink to="/guide/introduction">Developers</NavLink>
      <NavLink to="/roadmap">Roadmap</NavLink>
    </div>
  );

  return (
    <div className="TopNav">
      {renderLeftItems()}
      {renderRightItems()}
    </div>
  );
};

export default TopNav;
