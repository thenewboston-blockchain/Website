import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/svgs/thenewboston.svg';
import {Icon, IconType} from 'components';

import './TopNav.scss';

interface ComponentProps {
  toggleLeftMenu?(): void;
}

const TopNav: FC<ComponentProps> = ({toggleLeftMenu}) => {
  const [expanded, toggleExpanded] = useState(false);
  const [dropdownHeight, getDropdownHeight] = useState(0);
  const menuRef: any = useRef(null);
  const subMenuRef: any = useRef(null);

  useEffect(() => {
    let menuHeight = 0;
    let subMenuHeight = 0;
    if (menuRef.current) {
      menuHeight = menuRef.current.offsetHeight;
    }

    if (subMenuRef.current) {
      subMenuHeight = subMenuRef.current.offsetHeight;
    }
    getDropdownHeight(menuHeight + subMenuHeight);
  }, [expanded]);

  const renderLeftItems = (): ReactNode => (
    <div className="TopNav__left">
      {toggleLeftMenu ? (
        <div className="TopNav__left-menu-toggle-container" onClick={toggleLeftMenu} role="button" tabIndex={0}>
          <Icon icon={IconType.menu} size={24} />
        </div>
      ) : null}
      <NavLink className="TopNav__tnb-logo-nav" to="/">
        <img alt="thenewboston Logo" className="TopNav__tnb-logo" src={Logo} />
      </NavLink>
    </div>
  );

  const renderRightItems = (): ReactNode => (
    <div className={`TopNav__right ${expanded ? 'expanded' : ''}`} ref={subMenuRef}>
      <NavLink className="TopNav__a" to="/contribute">
        Contributors
      </NavLink>
      <NavLink className="TopNav__a" to="/guide/introduction">
        Guide
      </NavLink>
      <NavLink className="TopNav__a" to="/roadmap">
        Roadmap
      </NavLink>
      <div className="TopNav__mobileOverlay" style={{top: dropdownHeight}} />
    </div>
  );

  return (
    <div className="TopNav" ref={menuRef}>
      {renderLeftItems()}
      <div
        className="TopNav__right-menu-toggle-container"
        onClick={() => toggleExpanded(!expanded)}
        role="button"
        tabIndex={0}
      >
        <Icon icon={IconType.menu} size={24} />
      </div>
      {renderRightItems()}
    </div>
  );
};

export default TopNav;
