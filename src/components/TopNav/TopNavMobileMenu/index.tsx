import React, {ReactNode, useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Icon, IconType} from 'components';
import {useBooleanState, useWindowDimensions} from 'hooks';
import './TopNavMobileMenu.scss';

const TopNavMobileMenu = () => {
  const [menuOpen, toggleMenu, , closeMenu] = useBooleanState(false);
  const [openSection, setOpenSection] = useState<'community' | 'getStarted' | 'more' | 'other' | null>(null);
  const [smallDevice, setSmallDevice] = useState(false);
  const {pathname} = useLocation();
  const {width} = useWindowDimensions();

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  useEffect(() => {
    if (width > 1200) closeMenu();
    setSmallDevice(width < 992);
  }, [closeMenu, menuOpen, width]);

  const handleColumnTitleClick = (section: 'community' | 'getStarted' | 'more' | 'other') => (): void => {
    if (!smallDevice) return;
    setOpenSection(openSection === section ? null : section);
  };

  const renderColumn = (
    section: 'community' | 'getStarted' | 'more' | 'other',
    title: string,
    links: ReactNode,
  ): ReactNode => {
    return (
      <div className="TopNavMobileMenu__column">
        <button className="TopNavMobileMenu__column-title" onClick={handleColumnTitleClick(section)}>
          {title}
        </button>
        {smallDevice && (
          <div className="TopNavMobileMenu__icon-holder">
            <Icon
              className={clsx('TopNavMobileMenu__chevron-icon', {
                'TopNavMobileMenu__chevron-icon--open': openSection === section,
              })}
              icon={IconType.chevronDown}
            />
          </div>
        )}
        {(!smallDevice || openSection === section) && <div className="TopNavMobileMenu__links">{links}</div>}
      </div>
    );
  };

  const renderOtherSmallDeviceLinks = (): ReactNode => (
    <>
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
    </>
  );

  const renderMenu = (): ReactNode => {
    return (
      <>
        <div className="TopNavMobileMenu__dropdown-container">
          {renderColumn(
            'getStarted',
            'Get Started',
            <>
              {renderMobileLink('Documentation', '/guide/introduction')}
              {renderMobileLink('Tasks', '/tasks')}
            </>,
          )}
          {renderColumn(
            'community',
            'Community',
            <>
              {renderMobileLink('Join the Community!', '/social')}
              {renderMobileLink('Openings', '/openings')}
              {renderMobileLink('Teams', '/teams')}
              {renderMobileLink('Leaderboard', '/leaderboard/All')}
            </>,
          )}
          {renderColumn(
            'more',
            'More',
            <>
              {renderMobileLink('Project Proposals', '/project-proposals/overview')}
              {renderMobileLink('Assets', '/assets')}
              {renderMobileLink('FAQ', '/faq')}
              {renderMobileLink('Donate', '/donate')}
            </>,
          )}
          {smallDevice
            ? renderOtherSmallDeviceLinks()
            : renderColumn(
                'other',
                'Other',
                <>
                  {renderMobileLink('Create Account', '/create-account')}
                  {renderMobileLink('Sign In', '/sign-in')}
                  {renderMobileLink('Download', '/download')}
                </>,
              )}
        </div>
        <div className={clsx('TopNavMobileMenu__overlay')} onClick={closeMenu} role="button" tabIndex={0} />
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
      <button className="TopNavMobileMenu__button" onClick={toggleMenu}>
        <Icon icon={IconType.menu} size={24} />
      </button>
      {menuOpen && renderMenu()}
    </div>
  );
};

export default TopNavMobileMenu;
