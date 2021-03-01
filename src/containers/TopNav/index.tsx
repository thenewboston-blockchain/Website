import React, {FC, ReactNode, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {useBooleanState, useWindowDimensions} from 'hooks';
import TopNavDesktopItems from './TopNavDesktopItems';
import TopNavLogo from './TopNavLogo';
import TopNavMobileMenu from './TopNavMobileMenu';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const TopNav: FC<ComponentProps> = ({className}) => {
  const [mobileMenuIsOpen, toggleMobileMenu, , closeMobileMenu] = useBooleanState(false);
  const [smallDevice, setSmallDevice] = useState(false);
  const {pathname} = useLocation();
  const {width} = useWindowDimensions();

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  useEffect(() => {
    if (width > 1200) closeMobileMenu();
    setSmallDevice(width < 992);
  }, [closeMobileMenu, smallDevice, width]);

  const renderRightItems = (): ReactNode => {
    return (
      <div className="TopNav__right">
        <TopNavDesktopItems />
        <TopNavMobileMenu
          closeMenu={closeMobileMenu}
          menuOpen={mobileMenuIsOpen}
          smallDevice={smallDevice}
          toggleMenu={toggleMobileMenu}
        />
      </div>
    );
  };

  return (
    <div className={clsx('TopNav__wrapper', {'TopNav__wrapper--mobile-menu-open': mobileMenuIsOpen})}>
      <header className={clsx('TopNav', className)}>
        <div className="TopNav__left">
          <TopNavLogo />
        </div>
        {renderRightItems()}
      </header>
    </div>
  );
};

export default TopNav;
