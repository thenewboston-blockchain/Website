import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';

import TopNav from 'containers/TopNav';

import './AdminLayout.scss';

interface ComponentProps {
  left: ReactNode;
  right: ReactNode;
}

export const AdminLayout: FC<ComponentProps> = ({left, right}) => {
  const [leftMenuOpen, toggleLeftMenuOpen] = useState(window.innerWidth > 1200);
  const {pathname} = useLocation();
  const rightDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleLeftMenuOpen(window.innerWidth > 1200);
  }, []);

  useEffect(() => {
    rightDiv.current?.scrollTo(0, 0);
  }, [pathname]);

  const renderLeftMenuToggle = () => (
    <div className="left-menu-toggle-container" onClick={() => toggleLeftMenuOpen(!leftMenuOpen)}>
      <span className="material-icons left-menu-toggle">menu</span>
    </div>
  );

  return (
    <div className={`AdminLayout ${leftMenuOpen ? 'left-menu-open' : ''}`}>
      <div className="top">
        <TopNav leftMenuToggle={renderLeftMenuToggle()} />
      </div>
      <div className="left">{left}</div>
      <div className="right" ref={rightDiv}>
        {right}
      </div>
    </div>
  );
};

export default AdminLayout;
