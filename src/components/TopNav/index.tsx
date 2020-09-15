import React, {FC, ReactNode, useState} from 'react';
import {NavLink} from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';
import clsx from 'clsx';

import Logo from 'assets/svgs/thenewboston.svg';
import {Button, Icon, IconType, Shadow} from 'components';

import TopNavDropdownMenuItem from './TopNavDropdownMenuItem';
import TopNavMenuItem from './TopNavMenuItem';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const TopNav: FC<ComponentProps> = ({className}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useOnclickOutside(() => {
    setDropdownOpen(false);
  });

  const renderDropdownMenu = (): ReactNode => {
    if (!dropdownOpen) return null;
    return (
      <div className="TopNav__dropdown-menu">
        <Shadow />
        <div className="TopNav__dropdown-menu-item-container">
          <TopNavDropdownMenuItem activePatterns={['/contribute']} name="Contribute" url="/contribute" />
          <TopNavDropdownMenuItem
            activePatterns={['/account-manager', '/deployment-guide', '/guide', '/style-guide']}
            name="Guides"
            url="/guide/introduction"
          />
          <TopNavDropdownMenuItem
            activePatterns={['/bank-api', '/confirmation-validator-api', '/primary-validator-api']}
            name="APIs"
            url="/bank-api/accounts"
          />
          <TopNavDropdownMenuItem activePatterns={['/download']} name="Download" url="/download" />
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
      <TopNavMenuItem activePatterns={['/contribute']} name="Contribute" url="/contribute" />
      <TopNavMenuItem
        activePatterns={['/account-manager', '/deployment-guide', '/guide', '/style-guide']}
        name="Guides"
        url="/guide/introduction"
      />
      <TopNavMenuItem
        activePatterns={['/bank-api', '/confirmation-validator-api', '/primary-validator-api']}
        name="APIs"
        url="/bank-api/accounts"
      />
      <NavLink className="TopNav__download-button" to="/download">
        <Button>Download</Button>
      </NavLink>
    </>
  );

  const renderToggle = (): ReactNode => (
    <div
      className="TopNav__right-menu-toggle-container"
      onClick={() => setDropdownOpen(!dropdownOpen)}
      ref={ref}
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
    <div className={clsx('TopNav', className)}>
      {renderLeftItems()}
      {renderRightItems()}
    </div>
  );
};

export default TopNav;
