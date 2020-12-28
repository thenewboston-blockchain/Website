import React, {FC, ReactNode, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Icon, IconType} from 'components';
import {useBooleanState, useWindowDimensions} from 'hooks';

import TopNavDesktopItems from './TopNavDesktopItems';
import TopNavLogo from './TopNavLogo';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const TopNav: FC<ComponentProps> = ({className}) => {
  const [mobileMenuOpen, toggleMobileMenu, , closeMobileMenu] = useBooleanState(false);
  const {pathname} = useLocation();
  const {width} = useWindowDimensions();

  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  useEffect(() => {
    if (width > 992) {
      closeMobileMenu();
    }
    setMobileView(width < 576);
  }, [closeMobileMenu, mobileMenuOpen, width]);

  useEffect(() => {
    if (getStartedOpen && mobileView) {
      setMoreOpen(false);
      setCommunityOpen(false);
    }
  }, [getStartedOpen, mobileView]);

  useEffect(() => {
    if (communityOpen && mobileView) {
      setGetStartedOpen(false);
      setMoreOpen(false);
    }
  }, [communityOpen, mobileView]);

  useEffect(() => {
    if (moreOpen && mobileView) {
      setGetStartedOpen(false);
      setCommunityOpen(false);
    }
  }, [moreOpen, mobileView]);

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

  const renderMobileDropdownMenu = (): ReactNode => {
    if (!mobileMenuOpen) return null;

    return (
      <>
        <div className="mobile-menu__dropdown-container">
          <div className="mobile-menu__column">
            <button
              className="mobile-menu__column-title"
              onClick={() => mobileView && setGetStartedOpen(!getStartedOpen)}
            >
              Get Started
            </button>
            {mobileView && (
              <div className="mobile-menu__icon-holder">
                <Icon
                  className={clsx('mobile-menu__chevron-icon', {
                    'mobile-menu__chevron-icon--open': getStartedOpen,
                  })}
                  icon={IconType.chevronDown}
                />
              </div>
            )}
            {(getStartedOpen || !mobileView) && (
              <div className="mobile-menu__links">
                {renderMobileLink('Documentation', '/guide/introduction')}
                {renderMobileLink('Tasks', '/tasks')}
                {renderMobileLink('Download', '/download')}
              </div>
            )}
          </div>
          <div className="mobile-menu__column">
            <button
              className="mobile-menu__column-title"
              onClick={() => mobileView && setCommunityOpen(!communityOpen)}
            >
              Community
            </button>
            {mobileView && (
              <div className="mobile-menu__icon-holder">
                <Icon
                  className={clsx('mobile-menu__chevron-icon', {
                    'mobile-menu__chevron-icon--open': communityOpen,
                  })}
                  icon={IconType.chevronDown}
                />
              </div>
            )}
            {(communityOpen || !mobileView) && (
              <div className="mobile-menu__links">
                {renderMobileLink('Join the Community!', '/social')}
                {renderMobileLink('Openings', '/openings')}
                {renderMobileLink('Teams', '/teams')}
                {renderMobileLink('Leaderboard', '/leaderboard/All')}
              </div>
            )}
          </div>
          <div className="mobile-menu__column">
            <button className="mobile-menu__column-title" onClick={() => mobileView && setMoreOpen(!moreOpen)}>
              More
            </button>
            {mobileView && (
              <div className="mobile-menu__icon-holder">
                <Icon
                  className={clsx('mobile-menu__chevron-icon', {
                    'mobile-menu__chevron-icon--open': moreOpen,
                  })}
                  icon={IconType.chevronDown}
                />
              </div>
            )}
            {(moreOpen || !mobileView) && (
              <div className="mobile-menu__links">
                {renderMobileLink('Project Proposals', '/project-proposals/overview')}
                {renderMobileLink('Assets', '/assets')}
                {renderMobileLink('FAQ', '/faq')}
                {renderMobileLink('Donate', '/donate')}
              </div>
            )}
          </div>
          <div className="mobile-menu__separator mobile-menu__not-visible-tab" />
          <div className="mobile-menu__column mobile-menu__not-visible-tab">
            <Link to="/create-account">
              <button className="mobile-menu__column-title">Create Account</button>
            </Link>
          </div>
          <div className="mobile-menu__column mobile-menu__not-visible-tab">
            <Link to="/sign-in">
              <button className="mobile-menu__column-title">Sign In</button>
            </Link>
          </div>
          <div className="mobile-menu__column mobile-menu__not-visible-tab">
            <Link to="/download">
              <button className="mobile-menu__column-title">Download</button>
            </Link>
          </div>
        </div>
        <div className={clsx('mobile-menu__overlay')} onClick={closeMobileMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string): ReactNode => {
    return (
      <Link className="mobile-menu__link" to={to}>
        {label}
      </Link>
    );
  };

  const renderRightItems = (): ReactNode => {
    return (
      <div className="TopNav__right">
        <TopNavDesktopItems />
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
