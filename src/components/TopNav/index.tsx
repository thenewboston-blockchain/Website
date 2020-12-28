import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import TopNavDesktopItems from './TopNavDesktopItems';
import TopNavLogo from './TopNavLogo';
import TopNavMobileMenu from './TopNavMobileMenu';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const TopNav: FC<ComponentProps> = ({className}) => {
  const renderRightItems = (): ReactNode => {
    return (
      <div className="TopNav__right">
        <TopNavDesktopItems />
        <TopNavMobileMenu />
      </div>
    );
  };

  return (
    <header className={clsx('TopNav', className)}>
      <div className="TopNav__left">
        <TopNavLogo />
      </div>
      {renderRightItems()}
    </header>
  );
};

export default TopNav;
