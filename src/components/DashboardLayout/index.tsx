import React, {FC, useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

import './DashboardLayout.scss';

const DashboardLayout: FC = ({children}) => {
  const {pathname} = useLocation();
  const rightDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rightDiv.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="DashboardLayout">
      <div className="DashboardLayout__breadcrumbs">
        <h1>I am breadcrumbs</h1>
      </div>
      <div className="DashboardLayout__left-menu">
        <span>left menu here</span>
      </div>
      <div className="DashboardLayout__main-content" ref={rightDiv}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
