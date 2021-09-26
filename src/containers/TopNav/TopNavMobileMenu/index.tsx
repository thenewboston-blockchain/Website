import React, {FC, ReactNode, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {A, Button} from 'components';
import {ROUTES, URLS} from 'constants/routes';
import './TopNavMobileMenu.scss';

interface ComponentProps {
  closeMenu(): void;
  menuOpen: boolean;
  smallDevice: boolean;
  toggleMenu(): void;
}

type SectionStrings = 'community' | 'getStarted' | 'resources' | 'about' | 'faq' | 'developer';

const TopNavMobileMenu: FC<ComponentProps> = ({closeMenu, menuOpen, smallDevice, toggleMenu}) => {
  const history = useHistory();
  const [openSection, setOpenSection] = useState<SectionStrings | null>(null);

  const handleColumnTitleClick = (section: SectionStrings) => (): void => {
    if (!smallDevice) return;
    setOpenSection(openSection === section ? null : section);
  };

  const renderColumn = (section: SectionStrings, title: string, links: ReactNode): ReactNode => {
    return (
      <div className="TopNavMobileMenu__column">
        <button className="TopNavMobileMenu__title-wrapper" onClick={handleColumnTitleClick(section)}>
          <span className="TopNavMobileMenu__column-title TopNavMobileMenu__column-title--accordion">{title}</span>
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
        <div className="TopNavMobileMenu__links">{!smallDevice || openSection === section ? links : null}</div>
      </div>
    );
  };

  const renderMenu = (): ReactNode => {
    return (
      <>
        <div className="TopNavMobileMenu__dropdown-container">
          <div className="TopNavMobileMenu__links-container">
            {renderColumn(
              'getStarted',
              'Get Started',
              <>
                {renderMobileLink('Bounties', ROUTES.bounties)}
                {renderMobileLink('Projects', URLS.developerPortal.projects, true)}
              </>,
            )}
            {renderColumn(
              'community',
              'Community',
              <>
                {renderMobileLink('Join the Community!', ROUTES.social)}
                {renderMobileLink('Weekly Progress', ROUTES.progress)}
                {renderMobileLink('Openings', ROUTES.openings)}
                {renderMobileLink('Community Guidelines', ROUTES.guidelines)}
                {renderMobileLink('Analytics', ROUTES.analytics)}
                {renderMobileLink('Beta Roadmap', ROUTES.roadmap)}
                {renderMobileLink('Blog', URLS.blog, true)}
              </>,
            )}
            {renderColumn(
              'developer',
              'Developer',
              <>{renderMobileLink('Developer', URLS.developerPortal.home, true)}</>,
            )}
            {renderColumn(
              'resources',
              'Resources',
              <>
                {renderMobileLink('Documentation', ROUTES.wallet)}
                {renderMobileLink('Tutorials', ROUTES.tutorials)}
                {renderMobileLink('Media Kit', ROUTES.assets)}
              </>,
            )}
            {renderColumn(
              'about',
              'About',
              <>
                {renderMobileLink('Teams', ROUTES.teams)}
                {renderMobileLink('Donate', ROUTES.donate)}
              </>,
            )}
            {renderColumn('faq', 'FAQ', <>{renderMobileLink('FAQ', ROUTES.faq)}</>)}
          </div>
          <div className="TopNavMobileMenu__buttons-container">
            <Button
              className="TopNavMobileMenu__arcade-button"
              onClick={() => history.push(ROUTES.arcade)}
              variant="outlined"
            >
              Arcade
            </Button>
            <Button className="TopNavMobileMenu__download-button" onClick={() => history.push(ROUTES.download)}>
              Download Wallet
            </Button>
          </div>
        </div>
        <div className="TopNavMobileMenu__overlay" onClick={closeMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string, isExternal?: boolean): ReactNode => {
    if (isExternal) {
      return (
        <A className="TopNavMobileMenu__link" href={to} newWindow={false}>
          {label}
        </A>
      );
    }
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
