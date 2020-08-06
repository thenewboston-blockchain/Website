import React, {FC, ReactNode, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

import {BreadcrumbMenu} from 'components';
import './DashboardLayout.scss';

interface ComponentProps {
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const DashboardLayout: FC<ComponentProps> = ({children, menuItems, pageName, sectionName}) => {
  const {pathname} = useLocation();
  const rightDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rightDiv.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="DashboardLayout">
      <div className="DashboardLayout__breadcrumbs">
        <BreadcrumbMenu menuItems={menuItems} pageName={pageName} sectionName={sectionName} />
      </div>
      <div className="DashboardLayout__left-menu">{menuItems}</div>
      <div className="DashboardLayout__main-content" ref={rightDiv}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
