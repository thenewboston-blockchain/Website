import React, {FC, ReactNode, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Button, Icon, IconType} from 'components';
import {useBooleanState, useWindowDimensions} from 'hooks';

import TopNavLogo from './TopNavLogo';
import TopNavPopoverButton from './TopNavPopoverButton';
import TopNavPopoverItem from './TopNavPopoverItem';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const TopNav: FC<ComponentProps> = ({className}) => {
  const [mobileMenuOpen, toggleMobileMenu, , closeMobileMenu] = useBooleanState(false);
  const {pathname} = useLocation();
  const {width} = useWindowDimensions();

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  useEffect(() => {
    if (width > 992 && mobileMenuOpen) {
      closeMobileMenu();
    }
  }, [closeMobileMenu, mobileMenuOpen, width]);

  const renderMobileMenu = (): ReactNode => {
    return (
      <div className="mobile-menu">
        <button className="mobile-menu__button" onClick={toggleMobileMenu}>
          <Icon icon={IconType.menu} size={24} />
        </button>
        {renderMobileDropdownMenu()}
      </div>
    );
  };

  const renderCommunityPopover = (): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          description="Slack, GitHub, YouTube, LinkedIn, etc"
          iconType={IconType.earth}
          title="Join the Community!"
          to="/social"
        />
        <TopNavPopoverItem
          description="Join the team building the app"
          iconType={IconType.humanHandsUp}
          title="Openings"
          to="/openings"
        />
        <TopNavPopoverItem
          description="View the highest ranked contributors"
          iconType={IconType.trophy}
          title="Leaderboard"
          to="/leaderboard/All"
        />
      </>
    );
  };

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
        <TopNavPopoverButton buttonText="Get Started" className="TopNav__right-item" popoverId="get-started-popover">
          {renderGetStartedPopover()}
        </TopNavPopoverButton>
        <TopNavPopoverButton buttonText="Community" className="TopNav__right-item" popoverId="community-popover">
          {renderCommunityPopover()}
        </TopNavPopoverButton>
        <Link className={clsx('TopNav__right-item', 'TopNav__anchor-button')} to="/faq">
          FAQ
        </Link>
        <Link className={clsx('TopNav__right-item', 'TopNav__download-button')} to="/download">
          <Button>Download</Button>
        </Link>
      </>
    );
  };

  const renderMobileDropdownMenu = (): ReactNode => {
    if (!mobileMenuOpen) return null;
    return (
      <>
        <div className="mobile-menu__dropdown-container">
          <div className="mobile-menu__column">
            <div className="mobile-menu__column-title">Get Started</div>
            <Link className="mobile-menu__link" to="/guide/introduction">
              Documentation
            </Link>
            <Link className="mobile-menu__link" to="/tasks/All">
              Tasks
            </Link>
            <Link className="mobile-menu__link" to="/download">
              Download
            </Link>
          </div>
          <div className="mobile-menu__column">
            <div className="mobile-menu__column-title">Community</div>
            <Link className="mobile-menu__link" to="/social">
              Join the Community!
            </Link>
            <Link className="mobile-menu__link" to="/openings">
              Openings
            </Link>
            <Link className="mobile-menu__link" to="/leaderboard/All">
              Leaderboard
            </Link>
          </div>
          <div className="mobile-menu__column">
            <div className="mobile-menu__column-title">More</div>
            <Link className="mobile-menu__link" to="/faq">
              FAQ
            </Link>
          </div>
        </div>
        <div className={clsx('mobile-menu__overlay')} onClick={closeMobileMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderRightItems = (): ReactNode => {
    return (
      <div className="TopNav__right">
        {renderMenuItems()}
        {renderMobileMenu()}
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
