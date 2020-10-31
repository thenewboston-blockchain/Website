import React, {FC, ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';

import {Button, IconType} from 'components';

import TopNavLogo from './TopNavLogo';
import TopNavPopoverButton from './TopNavPopoverButton';
import TopNavPopoverItem from './TopNavPopoverItem';
import './TopNav2.scss';

interface ComponentProps {
  className?: string;
}

const TopNav2: FC<ComponentProps> = ({className}) => {
  const renderGetStartedPopover = (): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          description="Start reading into Guides and APIs"
          iconType={IconType.fileDocument}
          title="Documentation"
          to="/guide/introduction"
        />
        <TopNavPopoverItem
          description="Pick up tasks within GitHub and earn points"
          iconSize={28}
          iconType={IconType.github}
          title="Tasks"
          to="/tasks/All"
        />
      </>
    );
  };

  const renderMenuItems = (): ReactNode => {
    return (
      <>
        <TopNavPopoverButton buttonText="Get Started" className="TopNav2__right-item" popoverId="get-started-popover">
          {renderGetStartedPopover()}
        </TopNavPopoverButton>
        <TopNavPopoverButton buttonText="Community" className="TopNav2__right-item" popoverId="community-popover">
          ERRR
        </TopNavPopoverButton>
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
