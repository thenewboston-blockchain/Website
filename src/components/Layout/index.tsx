import React, {FC, ReactNode} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Footer, TopNav} from 'components';
import './Layout.scss';

interface ComponentProps {
  children: ReactNode;
}

const Layout: FC<ComponentProps> = ({children}) => {
  const {pathname} = useLocation();
  const isHomepage = pathname === '/';

  return (
    <div className="Layout">
      <TopNav className="Layout__TopNav" />
      <div className={clsx({Layout__content: !isHomepage, Layout__home: isHomepage})}>{children}</div>
      <div className="Layout__footer-wrapper">
        <Footer className="Layout__Footer" />
      </div>
    </div>
  );
};

export default Layout;
