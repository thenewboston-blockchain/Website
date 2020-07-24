import React, {FC, ReactNode} from 'react';

import TopNav from 'containers/TopNav';

import './Layout.scss';

interface ComponentProps {
  children: ReactNode;
}

export const Layout: FC<ComponentProps> = ({children}) => {
  return (
    <div className="Layout">
      <div className="top">
        <TopNav />
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Layout;
