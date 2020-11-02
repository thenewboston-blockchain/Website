import React, {FC, ReactNode} from 'react';

import {TopNav} from 'components';
import './Layout.scss';

interface ComponentProps {
  children: ReactNode;
}

const Layout: FC<ComponentProps> = ({children}) => {
  return (
    <div className="Layout">
      <TopNav className="Layout__TopNav" />
      <div className="Layout__content">{children}</div>
    </div>
  );
};

export default Layout;
