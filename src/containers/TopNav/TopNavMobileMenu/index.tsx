import React, {FC, ReactNode, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {A, Button} from 'components';
import {ROUTES, URLS} from 'constants/routes';
import TnbLogo from '../../../assets/svgs/TnbLogo';
import DiscordLogo from '../../../assets/svgs/DiscordLogo';
import './TopNavMobileMenu.scss';

interface ComponentProps {
  closeMenu(): void;
  menuOpen: boolean;
  toggleMenu(): void;
}

type SectionStrings = 'developers' | 'getTNBC' | 'resources';

const TopNavMobileMenu: FC<ComponentProps> = ({closeMenu, menuOpen, toggleMenu}) => {
  const history = useHistory();
  const [openSection, setOpenSection] = useState<SectionStrings | null>(null);

  const handleColumnTitleClick = (section: SectionStrings) => (): void => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderColumn = (section: SectionStrings, title: string, links: ReactNode): ReactNode => {
    return (
      <div className="TopNavMobileMenu__column">
        <button className="TopNavMobileMenu__title-wrapper" onClick={handleColumnTitleClick(section)}>
          <span
            className={clsx('TopNavMobileMenu__column-title TopNavMobileMenu__column-title--accordion', {
              'TopNavMobileMenu__column-title--open': openSection === section,
            })}
          >
            {title}
          </span>
          <span className="TopNavMobileMenu__icon-holder">
            <Icon
              className={clsx('TopNavMobileMenu__chevron-icon', {
                'TopNavMobileMenu__chevron-icon--open': openSection === section,
              })}
              icon={IconType.chevronDown}
            />
          </span>
        </button>
        <div className="TopNavMobileMenu__links">{openSection === section ? links : null}</div>
      </div>
    );
  };

  const renderMenu = (): ReactNode => {
    return (
      <>
        <div className="TopNavMobileMenu__dropdown-container">
          <div className="TopNavMobileMenu__links-container">
            {renderColumn(
              'getTNBC',
              'Get TNBC',
              <>
                {renderMobileLink('Bounties', ROUTES.bounties)}
                {renderMobileLink('Career', ROUTES.openings)}
                {renderMobileLink('Faucet', URLS.apps.faucet, true)}
                {renderMobileLink('Create Projects', URLS.developerPortal.projects, true)}
                {renderMobileLink('Play Projects', ROUTES.arcade)}
              </>,
            )}
            {renderColumn(
              'developers',
              'Developers',
              <>
                {renderMobileLink('Home', URLS.developerPortal.home, true)}
                {renderMobileLink('Living Whitepaper', URLS.developerPortal.whitepaper, true)}
                {renderMobileLink('Tutorials', ROUTES.tutorials)}
                {renderMobileLink('Projects', URLS.developerPortal.projects, true)}
                {renderMobileLink('APIS', URLS.developerPortal.api, true)}
                {renderMobileLink('SDKs & Libraries', URLS.developerPortal.sdkAndLibraries, true)}
              </>,
            )}
            {renderColumn(
              'resources',
              'Resources',
              <>
                {renderMobileLink('Roadmap', ROUTES.roadmap)}
                {renderMobileLink('FAQ', ROUTES.faq)}
                {renderMobileLink('Blog', URLS.blog, true)}
                {renderMobileLink('Analytics', ROUTES.analytics)}
                {renderMobileLink('Media Kit', ROUTES.assets)}
                {renderMobileLink('Meet the team', ROUTES.teams)}
                {renderMobileLink('About Us', ROUTES.aboutUs)}
                {renderMobileLink('Donate', ROUTES.donate)}
              </>,
            )}
          </div>
          <div className="TopNavMobileMenu__buttons-container">
            <button
              className="TopNavMobileMenu__discord-button"
              onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}
            >
              <DiscordLogo style={{marginRight: '8px'}} />
              Discord
            </button>
            <Button
              className="TopNavMobileMenu__download-button"
              onClick={() => history.push(ROUTES.download)}
              variant="outlined"
            >
              Download Wallet
            </Button>
            <Button className="TopNavMobileMenu__apps-button" onClick={() => history.push(ROUTES.arcade)}>
              <TnbLogo style={{marginRight: '8px'}} />
              Apps
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
