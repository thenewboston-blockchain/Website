import React, {FC} from 'react';

import {BreadcrumbMenu, DocsMenuItems, PageTitle} from 'components';
import './DashboardLayout.scss';

interface ComponentProps {
  pageName: string;
  sectionName: string;
}

const DashboardLayout: FC<ComponentProps> = ({children, pageName, sectionName}) => {
  return (
    <>
      <PageTitle title={`${sectionName}`} />
      <div className="DashboardLayout">
        <BreadcrumbMenu
          className="DashboardLayout__BreadcrumbMenu"
          menuItems={<DocsMenuItems />}
          pageName={pageName}
          sectionName={sectionName}
        />
        <div className="DashboardLayout__left-menu">
          <DocsMenuItems />
        </div>
        <div className="DashboardLayout__main-content">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
