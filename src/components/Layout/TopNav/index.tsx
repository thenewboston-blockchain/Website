import React, {FC, ReactNode, useState} from 'react';
import {NavLink} from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';

import Logo from 'assets/svgs/thenewboston.svg';
import {Icon, IconType} from 'components';

import './TopNav.scss';

const TopNav: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useOnclickOutside(() => {
    setDropdownOpen(false);
  });

  const renderDropdownMenu = (): ReactNode => {
    if (!dropdownOpen) return null;
    return (
      <div className="TopNav__dropdown-menu" ref={ref}>
        <div className="shadow" />
        <div className="TopNav__dropdown-menu-item-container">
          <NavLink className="TopNav__dropdown-menu-item" to="/contribute">
            Contribute
          </NavLink>
          <NavLink className="TopNav__dropdown-menu-item" to="/guide/introduction">
            Guides
          </NavLink>
          <NavLink className="TopNav__dropdown-menu-item" to="/bank-api/accounts">
            APIs
          </NavLink>
          <NavLink className="TopNav__dropdown-menu-item" to="/roadmap">
            Roadmap
          </NavLink>
        </div>
      </div>
    );
  };

  const renderLeftItems = (): ReactNode => (
    <div className="TopNav__left">
      <NavLink className="TopNav__tnb-logo-nav" to="/">
        <img alt="thenewboston Logo" className="TopNav__tnb-logo" src={Logo} />
      </NavLink>
    </div>
  );

  const renderMenuItems = (): ReactNode => (
    <>
      <NavLink className="TopNav__a" to="/contribute">
        Contribute
      </NavLink>
      <NavLink className="TopNav__a" to="/guide/introduction">
        Guides
      </NavLink>
      <NavLink className="TopNav__a" to="/bank-api/accounts">
        APIs
      </NavLink>
      <NavLink className="TopNav__a" to="/roadmap">
        Roadmap
      </NavLink>
    </>
  );

  const renderToggle = (): ReactNode => (
    <div
      className="TopNav__right-menu-toggle-container"
      onClick={() => setDropdownOpen(!dropdownOpen)}
      role="button"
      tabIndex={0}
    >
      <Icon icon={IconType.menu} size={24} />
      {renderDropdownMenu()}
    </div>
  );

  const renderRightItems = (): ReactNode => (
    <div className="TopNav__right">
      {renderMenuItems()}
      {renderToggle()}
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
