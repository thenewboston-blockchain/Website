import React, {ReactNode, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Icon, IconType} from 'components';
import {useBooleanState, useWindowDimensions} from 'hooks';
import {selectActiveUser} from 'selectors/state';
import './TopNavMobileMenu.scss';

const TopNavMobileMenu = () => {
  const activeUser = useSelector(selectActiveUser);
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
        <button className="TopNavMobileMenu__title-wrapper" onClick={handleColumnTitleClick(section)}>
          <span className="TopNavMobileMenu__column-title">{title}</span>
          {smallDevice && (
            <span className="TopNavMobileMenu__icon-holder">
              <Icon
                className={clsx('TopNavMobileMenu__chevron-icon', {
                  'TopNavMobileMenu__chevron-icon--open': openSection === section,
                })}
                icon={IconType.chevronDown}
              />
            </span>
          )}
        </button>

        {(!smallDevice || openSection === section) && <div className="TopNavMobileMenu__links">{links}</div>}
      </div>
    );
  };

  const renderOtherSmallDeviceLink = (title: string, to: string): ReactNode => (
    <div className="TopNavMobileMenu__column TopNavMobileMenu__not-visible-tab">
      <Link to={to}>
        <button className="TopNavMobileMenu__column-title">{title}</button>
      </Link>
    </div>
  );

  const renderOtherSmallDeviceLinks = (): ReactNode => (
    <>
      <div className="TopNavMobileMenu__separator TopNavMobileMenu__not-visible-tab" />
      {activeUser ? (
        <>
          {renderOtherSmallDeviceLink('Your Profile', `/users/${activeUser.pk}`)}
          {renderOtherSmallDeviceLink('Sign Out', '/sign-out')}
        </>
      ) : (
        <>
          {renderOtherSmallDeviceLink('Create Account', '/create-account')}
          {renderOtherSmallDeviceLink('Sign In', '/sign-in')}
        </>
      )}
      {renderOtherSmallDeviceLink('Download', '/download')}
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
                  {activeUser ? (
                    <>
                      {renderMobileLink('Your Profile', `/users/${activeUser.pk}`)}
                      {renderMobileLink('Sign Out', '/sign-out')}
                    </>
                  ) : (
                    <>
                      {renderMobileLink('Create Account', '/create-account')}
                      {renderMobileLink('Sign In', '/sign-in')}
                    </>
                  )}
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
