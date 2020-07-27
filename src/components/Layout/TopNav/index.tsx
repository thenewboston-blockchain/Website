import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/svgs/thenewboston.svg';
import {Icon, IconType} from 'components';

import './TopNav.scss';

interface ComponentProps {
  toggleLeftMenu?(): void;
}

const TopNav: FC<ComponentProps> = ({toggleLeftMenu}) => {
  const renderLeftItems = (): ReactNode => (
    <div className="TopNav__left">
      {toggleLeftMenu ? (
        <div className="TopNav__left-menu-toggle-container" onClick={toggleLeftMenu} role="button" tabIndex={0}>
          <Icon className="react-icons" icon={IconType.menu} size={24} />
        </div>
      ) : null}
      <NavLink className="TopNav__tnb-logo-nav" to="/">
        <img alt="thenewboston Logo" className="TopNav__tnb-logo" src={Logo} />
      </NavLink>
    </div>
  );

  const renderRightItems = (): ReactNode => (
    <div className="TopNav__right">
      <NavLink className="TopNav__a" to="/contribute">
        Contribute
      </NavLink>
      <NavLink className="TopNav__a" to="/guide/introduction">
        Developers
      </NavLink>
      <NavLink className="TopNav__a" to="/roadmap">
        Roadmap
      </NavLink>
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
