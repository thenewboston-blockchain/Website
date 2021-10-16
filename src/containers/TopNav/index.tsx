import React, {FC, ReactNode, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {useBooleanState, useWindowDimensions} from 'hooks';
import TopNavDesktopItems from './TopNavDesktopItems';
import TopNavLogo from './TopNavLogo';
import TopNavMobileMenu from './TopNavMobileMenu';
import * as S from './Styles';

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
      <S.RightSection>
        <TopNavDesktopItems />
        <TopNavMobileMenu closeMenu={closeMobileMenu} menuOpen={mobileMenuIsOpen} toggleMenu={toggleMobileMenu} />
      </S.RightSection>
    );
  };

  return (
    <S.Wrapper isOpened={mobileMenuIsOpen}>
      <S.Container className={className} element="header">
        <S.LeftSection>
          <TopNavLogo />
        </S.LeftSection>
        {renderRightItems()}
      </S.Container>
    </S.Wrapper>
  );
};

export default TopNav;
