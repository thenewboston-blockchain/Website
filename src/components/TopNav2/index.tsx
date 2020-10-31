import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';

import {Button} from 'components';

import TopNavLogo from './TopNavLogo';
import './TopNav2.scss';
import TopNavPopoverButton from './TopNavPopoverButton';

interface ComponentProps {
  className?: string;
}

const TopNav2: FC<ComponentProps> = ({className}) => {
  const renderMenuItems = (): ReactNode => {
    return (
      <>
        <TopNavPopoverButton buttonText="Get Started" className="TopNav2__right-item" />
        <TopNavPopoverButton buttonText="Community" className="TopNav2__right-item" />
        <NavLink className={clsx('TopNav2__right-item', 'TopNav2__anchor-button')} to="/faq">
          FAQ
        </NavLink>
        <NavLink className={clsx('TopNav2__right-item', 'TopNav2__download-button')} to="/download">
          <Button>Download</Button>
        </NavLink>
      </>
    );
  };

  const renderRightItems = (): ReactNode => {
    return <div className="TopNav2__right">{renderMenuItems()}</div>;
  };

  return (
    <header className={clsx('TopNav2', className)}>
      <div className="TopNav2__left">
        <TopNavLogo />
      </div>
      {renderRightItems()}
    </header>
  );
};

export default TopNav2;
