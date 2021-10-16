import React, {FC, ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Container} from 'components';
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
  const {pathname} = useLocation();
  const {width} = useWindowDimensions();

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  useEffect(() => {
    if (width > 1366) closeMobileMenu();
  }, [closeMobileMenu, width]);

  const renderRightItems = (): ReactNode => {
    return (
      <div className="TopNav__right">
        <TopNavDesktopItems />
        <TopNavMobileMenu closeMenu={closeMobileMenu} menuOpen={mobileMenuIsOpen} toggleMenu={toggleMobileMenu} />
      </div>
    );
  };

  return (
    <div className={clsx('TopNav__wrapper', {'TopNav__wrapper--mobile-menu-open': mobileMenuIsOpen})}>
      <Container className={clsx('TopNav', className)} element="header">
        <div className="TopNav__left">
          <TopNavLogo />
        </div>
        {renderRightItems()}
      </Container>
    </div>
  );
};

export default TopNav;
