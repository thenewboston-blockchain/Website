import React, {FC, useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import LeftMenu from '../LeftMenu';
import TopNav from '../TopNav';
import './LayoutDashboard.scss';

interface ComponentProps {
  leftMenuType: 'apis' | 'guides';
}

const LayoutDashboard: FC<ComponentProps> = ({children, leftMenuType}) => {
  const [leftMenuOpen, toggleLeftMenuOpen] = useState(window.innerWidth > 1200);
  const {pathname} = useLocation();
  const rightDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleLeftMenuOpen(window.innerWidth > 1200);
  }, []);

  useEffect(() => {
    rightDiv.current?.scrollTo(0, 0);
  }, [pathname]);

  const toggleLeftMenu = (): void => {
    toggleLeftMenuOpen(!leftMenuOpen);
  };

  return (
    <div className={clsx('LayoutDashboard', {'LayoutDashboard--open': leftMenuOpen})}>
      <div className="LayoutDashboard__top">
        <TopNav />
      </div>
      <div className="LayoutDashboard__left">
        <LeftMenu leftMenuType={leftMenuType} />
      </div>
      <div className="LayoutDashboard__right" ref={rightDiv}>
        {children}
      </div>
    </div>
  );
};

export default LayoutDashboard;
