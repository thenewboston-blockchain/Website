/* eslint-disable react/jsx-props-no-spreading */

import React, {FC, ReactNode, useState} from 'react';
import {NavLink} from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';
import clsx from 'clsx';

import {Button, Icon, IconType, Shadow} from 'components';

import TopNavDropdownMenuItem from './TopNavDropdownMenuItem';
import TopNavLogo from './TopNavLogo';
import TopNavMenuItem from './TopNavMenuItem';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const contributeProps = {
  activePatterns: ['/contribute'],
  name: 'Contribute',
  url: '/contribute',
};

const docsProps = {
  activePatterns: [
    '/account-manager',
    '/bank-api',
    '/confirmation-validator-api',
    '/deployment-guide',
    '/guide',
    '/primary-validator-api',
    '/style-guide',
  ],
  name: 'Docs',
  url: '/guide/introduction',
};

const leaderboardProps = {
  activePatterns: ['/leaderboard'],
  name: 'Leaderboard',
  url: '/leaderboard',
};

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
          <TopNavDropdownMenuItem {...leaderboardProps} />
          <TopNavDropdownMenuItem {...contributeProps} />
          <TopNavDropdownMenuItem {...docsProps} />
          <TopNavDropdownMenuItem activePatterns={['/download']} name="Download" url="/download" />
        </div>
      </div>
    );
  };

  const renderMenuItems = (): ReactNode => (
    <>
      <TopNavMenuItem {...leaderboardProps} />
      <TopNavMenuItem {...contributeProps} />
      <TopNavMenuItem {...docsProps} />
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
      <div className="TopNav__left">
        <TopNavLogo />
      </div>
      {renderRightItems()}
    </div>
  );
};

export default TopNav;
