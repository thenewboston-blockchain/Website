import React, {FC, ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Footer, GoToTop} from 'components';
import TopNav from 'containers/TopNav';
import './Layout.scss';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  const {hash, pathname} = useLocation();
  const isHomepage = pathname === '/';
  const isProfilePage = pathname.includes('/profile');

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash, pathname]);

  return (
    <div className="Layout" data-testid="Layout">
      <div className="Layout__top-nav-wrapper">
        <TopNav className="Layout__TopNav" />
      </div>
      <div
        className={clsx({Layout__content: !(isHomepage || isProfilePage), Layout__home: isHomepage})}
        data-testid="Layout__content"
      >
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
