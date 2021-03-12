import React, {FC, ReactNode} from 'react';

import {BreadcrumbMenu, PageTitle} from 'components';
import './DashboardLayout.scss';

export interface DashboardLayoutProps {
  children?: ReactNode;
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({children, menuItems, pageName, sectionName}) => {
  return (
    <>
      <PageTitle title={`${sectionName}`} />
      <div className="DashboardLayout">
        <BreadcrumbMenu
          className="DashboardLayout__BreadcrumbMenu"
          menuItems={menuItems}
          pageName={pageName}
          sectionName={sectionName}
        />
        <div className="DashboardLayout__left-menu" data-testid="DashboardLayout__left-menu_test">
          {menuItems}
        </div>
        <div className="DashboardLayout__main-content" data-testid="DashboardLayout__main-content_test">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
