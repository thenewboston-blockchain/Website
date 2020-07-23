import React, { FC } from 'react';

import './Layout.scss';

import { AppToolbar } from '../Toolbar';
import { AppLogo } from '../Logo'
import { Link } from 'react-router-dom';

interface ComponentProps {
  children?: any;
}

const Layout: FC<ComponentProps> = ({ children }) => {
  return (
    <div className="app-layout">
      <AppToolbar className="app-layout__toolbar">
        <div className="app-container app-layout__toolbar-container">
          <AppLogo className="app-layout__logo"></AppLogo>

          <div className="app-layout__links">
            <Link to={`/contributing`}>Contribute</Link>
            <Link to={`/developers`}>Developers</Link>
            <Link to={`/roadmap`}>Roadmap</Link>
          </div>

          <div className="app-layout__tools">
            {/* <AppButton icon="invert" /> */}
          </div>
        </div>
      </AppToolbar>

      <div>
        {children}
      </div>

    </div>
  );
}

export default Layout;