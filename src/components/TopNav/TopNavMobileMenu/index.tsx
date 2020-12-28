import React, {ReactNode, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Icon, IconType} from 'components';
import {useBooleanState, useWindowDimensions} from 'hooks';
import './TopNavMobileMenu.scss';

const TopNavMobileMenu = () => {
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

  const renderMobileDropdownMenu = (): ReactNode => {
    if (!mobileMenuOpen) return null;
    return (
      <>
        <div className="TopNavMobileMenu__dropdown-container">
          <div className="TopNavMobileMenu__column">
            <button
              className="TopNavMobileMenu__column-title"
              onClick={() => mobileView && setGetStartedOpen(!getStartedOpen)}
            >
              Get Started
            </button>
            {mobileView && (
              <div className="TopNavMobileMenu__icon-holder">
                <Icon
                  className={clsx('TopNavMobileMenu__chevron-icon', {
                    'TopNavMobileMenu__chevron-icon--open': getStartedOpen,
                  })}
                  icon={IconType.chevronDown}
                />
              </div>
            )}
            {(getStartedOpen || !mobileView) && (
              <div className="TopNavMobileMenu__links">
                {renderMobileLink('Documentation', '/guide/introduction')}
                {renderMobileLink('Tasks', '/tasks')}
                {renderMobileLink('Download', '/download')}
              </div>
            )}
          </div>
          <div className="TopNavMobileMenu__column">
            <button
              className="TopNavMobileMenu__column-title"
              onClick={() => mobileView && setCommunityOpen(!communityOpen)}
            >
              Community
            </button>
            {mobileView && (
              <div className="TopNavMobileMenu__icon-holder">
                <Icon
                  className={clsx('TopNavMobileMenu__chevron-icon', {
                    'TopNavMobileMenu__chevron-icon--open': communityOpen,
                  })}
                  icon={IconType.chevronDown}
                />
              </div>
            )}
            {(communityOpen || !mobileView) && (
              <div className="TopNavMobileMenu__links">
                {renderMobileLink('Join the Community!', '/social')}
                {renderMobileLink('Openings', '/openings')}
                {renderMobileLink('Teams', '/teams')}
                {renderMobileLink('Leaderboard', '/leaderboard/All')}
              </div>
            )}
          </div>
          <div className="TopNavMobileMenu__column">
            <button className="TopNavMobileMenu__column-title" onClick={() => mobileView && setMoreOpen(!moreOpen)}>
              More
            </button>
            {mobileView && (
              <div className="TopNavMobileMenu__icon-holder">
                <Icon
                  className={clsx('TopNavMobileMenu__chevron-icon', {
                    'TopNavMobileMenu__chevron-icon--open': moreOpen,
                  })}
                  icon={IconType.chevronDown}
                />
              </div>
            )}
            {(moreOpen || !mobileView) && (
              <div className="TopNavMobileMenu__links">
                {renderMobileLink('Project Proposals', '/project-proposals/overview')}
                {renderMobileLink('Assets', '/assets')}
                {renderMobileLink('FAQ', '/faq')}
                {renderMobileLink('Donate', '/donate')}
              </div>
            )}
          </div>
          <div className="TopNavMobileMenu__separator TopNavMobileMenu__not-visible-tab" />
          <div className="TopNavMobileMenu__column TopNavMobileMenu__not-visible-tab">
            <Link to="/create-account">
              <button className="TopNavMobileMenu__column-title">Create Account</button>
            </Link>
          </div>
          <div className="TopNavMobileMenu__column TopNavMobileMenu__not-visible-tab">
            <Link to="/sign-in">
              <button className="TopNavMobileMenu__column-title">Sign In</button>
            </Link>
          </div>
          <div className="TopNavMobileMenu__column TopNavMobileMenu__not-visible-tab">
            <Link to="/download">
              <button className="TopNavMobileMenu__column-title">Download</button>
            </Link>
          </div>
        </div>
        <div className={clsx('TopNavMobileMenu__overlay')} onClick={closeMobileMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string): ReactNode => {
    return (
      <Link className="TopNavMobileMenu__link" to={to}>
        {label}
      </Link>
    );
  };

  return (
    <div className="TopNavMobileMenu">
      <button className="TopNavMobileMenu__button" onClick={toggleMobileMenu}>
        <Icon icon={IconType.menu} size={24} />
      </button>
      {renderMobileDropdownMenu()}
    </div>
  );
};

export default TopNavMobileMenu;
