import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppToolbar, AppLogo, LeftMenu, AppButton, AppIcon} from 'components';

import './Layouts.scss';

const LayoutToolbarContent = () => {
  const screenSize = window.matchMedia('(max-width: 700px)');
  const [isMenuOpen, setMenuOpen] = useState(!screenSize.matches);

  screenSize.addListener(() => {
    if (screenSize.matches) setMenuOpen(false);
    else setMenuOpen(true);
  });

  return (
    <div className="app-main-toolbar">
      <Link to="/" className="app-main-toolbar__logo-link">
        <AppLogo className="app-main-toolbar__logo" />
      </Link>
      <div className={`app-main-toolbar__links  ${!isMenuOpen && 'app-main-toolbar__links--hidden'}`}>
        <Link to={`/contribute`}>Contribute</Link>
        <Link to={`/guide`}>Developers</Link>
        <Link to={`/roadmap`}>Roadmap</Link>
      </div>
      <div className="app-main-toolbar__tools">
        <AppButton onClick={() => setMenuOpen(!isMenuOpen)} className="app-guide-layout__menu-button">
          <AppIcon icon="dots-vertical" />
        </AppButton>
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className={`app-main-toolbar__scrim ${isMenuOpen && 'app-main-toolbar__scrim--show'}`}
      ></div>
    </div>
  );
};

export const BasicLayout = ({children}) => {
  return (
    <div className="app-basic-layout">
      <AppToolbar className="app-basic-layout__toolbar">
        <div className="app-container">
          <LayoutToolbarContent></LayoutToolbarContent>
        </div>
      </AppToolbar>

      <main>{children}</main>
    </div>
  );
};

export const FixedToolbarLayout = ({children}) => {
  return (
    <div className="app-basic-layout">
      <AppToolbar className="app-basic-layout__toolbar app-basic-layout__toolbar--fixed">
        <div className="app-container">
          <LayoutToolbarContent></LayoutToolbarContent>
        </div>
      </AppToolbar>

      <main className="app-basic-layout__content--fixed">{children}</main>
    </div>
  );
};

export const GuideLayout = ({children}) => {
  const screenSize = window.matchMedia('(max-width: 700px)');
  const [isMenuOpen, setMenuOpen] = useState(screenSize.matches ? false : true);

  screenSize.addListener(() => {
    if (screenSize.matches) setMenuOpen(false);
    else setMenuOpen(true);
  });

  return (
    <div className="app-basic-layout app-guide-layout">
      <AppToolbar className="app-basic-layout__toolbar app-basic-layout__toolbar--fixed">
        <div className="app-guide-layout__toolbar-container">
          <AppButton onClick={() => setMenuOpen(!isMenuOpen)} className="app-guide-layout__menu-button">
            <AppIcon icon="menu" />
          </AppButton>
          <LayoutToolbarContent></LayoutToolbarContent>
        </div>
      </AppToolbar>

      <div className={`app-guide-layout__nav ${!isMenuOpen && 'app-guide-layout__nav--hidden'}`}>
        <LeftMenu />
      </div>

      <div
        onClick={() => setMenuOpen(false)}
        className={`app-guide-layout__scrim ${isMenuOpen && 'app-guide-layout__scrim--show'}`}
      ></div>

      <main className="app-guide-layout__content">
        <div className="app-container">{children}</div>
      </main>
    </div>
  );
};
