import React, {FC, ReactNode, useEffect, useState} from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Icon, IconType, Shadow} from 'components';
import './BreadcrumbMenu.scss';

interface ComponentProps {
  className?: string;
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const BreadcrumbMenu: FC<ComponentProps> = ({className, menuItems, pageName, sectionName}) => {
  const {pathname} = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pageName, pathname]);

  const ref = useOnclickOutside(
    () => {
      if (open) setOpen(false);
    },
    {
      ignoreClass: 'BreadcrumbMenu__bar',
    },
  );

  const renderBreadcrumbBar = (): ReactNode => {
    return (
      <div className="BreadcrumbMenu__bar" onClick={() => setOpen(!open)} role="button" tabIndex={0}>
        <div className="BreadcrumbMenu__navigation">
          {sectionName}
          <Icon icon={IconType.menuRight} size={24} />
          {pageName}
        </div>
        {renderToggle()}
      </div>
    );
  };

  const renderDropdownMenu = (): ReactNode => {
    if (!open) return null;
    return (
      <div className="BreadcrumbMenu__dropdown-menu" ref={ref}>
        <Shadow />
        {menuItems}
      </div>
    );
  };

  const renderToggle = (): ReactNode => {
    return (
      <div className={clsx('BreadcrumbMenu__toggle-container', {'BreadcrumbMenu__toggle-container--open': open})}>
        <Icon className="BreadcrumbMenu__toggle-arrow" icon={IconType.chevronDown} size={24} />
      </div>
    );
  };

  return (
    <div className={clsx('BreadcrumbMenu', className)}>
      {renderBreadcrumbBar()}
      {renderDropdownMenu()}
    </div>
  );
};

export default BreadcrumbMenu;
