import React, {FC, ReactNode} from 'react';

import {TopNav2} from 'components';
import './Layout.scss';

interface ComponentProps {
  children: ReactNode;
}

const Layout: FC<ComponentProps> = ({children}) => {
  return (
    <div className="Layout">
      <div className="Layout__top-nav-wrapper">
        <TopNav2 className="Layout__TopNav" />
      </div>
      <div className="Layout__content">{children}</div>
    </div>
  );
};

export default Layout;
