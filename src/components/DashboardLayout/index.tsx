import React, {FC, ReactNode} from 'react';

import {BreadcrumbMenu, PageTitle} from 'components';
import './DashboardLayout.scss';

interface ComponentProps {
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const DashboardLayout: FC<ComponentProps> = ({children, menuItems, pageName, sectionName}) => {
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
        <div className="DashboardLayout__left-menu">{menuItems}</div>
        <div className="DashboardLayout__main-content">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
