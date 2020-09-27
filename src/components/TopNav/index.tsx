/* eslint-disable react/jsx-props-no-spreading */

import React, {FC, ReactNode, useState} from 'react';
import {NavLink} from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';
import clsx from 'clsx';

import {Button, Icon, IconType, Shadow} from 'components';
import {Repository} from 'types/github';
import {OpeningCategory} from 'types/openings';

import TopNavDropdownMenuItem from './TopNavDropdownMenuItem';
import TopNavLogo from './TopNavLogo';
import TopNavMenuItem from './TopNavMenuItem';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

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

const helpProps = {
  activePatterns: ['/help'],
  name: 'Help',
  url: '/help',
};

const leaderboardProps = {
  activePatterns: ['/leaderboard'],
  name: 'Leaderboard',
  url: `/leaderboard/${Repository.all}`,
};

const openingsProps = {
  activePatterns: ['/openings'],
  name: 'Openings',
  url: `/openings/${OpeningCategory.all}`,
};

const tasksProps = {
  activePatterns: ['/tasks'],
  name: 'Tasks',
  url: `/tasks/${Repository.all}`,
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
          <TopNavDropdownMenuItem {...tasksProps} />
          <TopNavDropdownMenuItem {...openingsProps} />
          <TopNavDropdownMenuItem {...docsProps} />
          <TopNavDropdownMenuItem {...helpProps} />
          <TopNavDropdownMenuItem activePatterns={['/download']} name="Download" url="/download" />
        </div>
      </div>
    );
  };

  const renderMenuItems = (): ReactNode => (
    <>
      <TopNavMenuItem {...leaderboardProps} />
      <TopNavMenuItem {...tasksProps} />
      <TopNavMenuItem {...openingsProps} />
      <TopNavMenuItem {...docsProps} />
      <TopNavMenuItem {...helpProps} />
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
