/* eslint-disable @typescript-eslint/no-use-before-define */

import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';

import {Icon, IconType} from 'components';
import './BreadcrumbMenu.scss';

interface ComponentProps {
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const BreadcrumbMenu: FC<ComponentProps> = ({menuItems, pageName, sectionName}) => {
  const {pathname} = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const ref = useOnclickOutside(
    () => {
      if (dropdownOpen) setDropdownOpen(false);
    },
    {
      ignoreClass: 'breadcrumbs',
    },
  );

  const renderDropdownMenu = (): ReactNode => {
    if (!dropdownOpen) return null;
    return (
      <div className="BreadcrumbMenu__dropdown-menu" ref={ref}>
        <div className="shadow" />
        <div className="BreadcrumbMenu__dropdown-menu-item-container">{menuItems}</div>
      </div>
    );
  };

  const renderBreadcrumbs = (): ReactNode => {
    return (
      <div className="breadcrumbs" onClick={() => setDropdownOpen(!dropdownOpen)} role="button" tabIndex={0}>
        <div className="breadcrumb-navigation">
          {sectionName}
          <Icon className="react-icons" icon={IconType.menuRight} size={24} />
          {pageName}
        </div>
        {renderToggle()}
      </div>
    );
  };

  const renderToggle = (): ReactNode => {
    return (
      <div className={`BreadcrumbMenu__toggle-container ${dropdownOpen ? 'dropdownOpen' : ''}`}>
        <Icon className="react-icons toggle-arrow" icon={IconType.chevronDown} size={24} />
      </div>
    );
  };

  return (
    <div className="BreadcrumbMenu">
      {renderBreadcrumbs()}
      {renderDropdownMenu()}
    </div>
  );
};

export default BreadcrumbMenu;
