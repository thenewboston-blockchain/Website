import React, {FC, ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Footer, GoToTop, TopNav} from 'components';
import './Layout.scss';

interface ComponentProps {
  children: ReactNode;
}

const Layout: FC<ComponentProps> = ({children}) => {
  const {pathname} = useLocation();
  const isHomepage = pathname === '/';
  const isProfilePage = pathname.includes('/profile');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Layout">
      <div className="Layout__top-nav-wrapper">
        <TopNav className="Layout__TopNav" />
      </div>
      <div className={clsx({Layout__content: !(isHomepage || isProfilePage), Layout__home: isHomepage})}>
        {children}
      </div>
      <div className="Layout__footer-wrapper">
        <GoToTop />
        <Footer className="Layout__Footer" />
      </div>
    </div>
  );
};

export default Layout;
