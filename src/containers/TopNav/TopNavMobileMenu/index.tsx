import React, {FC, ReactNode, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {ROUTES, URLS} from 'constants/routes';
import TnbLogo from '../../../assets/svgs/TnbLogo';
import DiscordLogo from '../../../assets/svgs/DiscordLogo';

import * as S from './Styles';

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
    const isOpened = openSection === section;
    return (
      <S.LinkSection>
        <S.LinkSectionTitleButton onClick={handleColumnTitleClick(section)}>
          <S.LinkSectionTitle isOpened={isOpened}>{title}</S.LinkSectionTitle>
          <S.DropdownIcon isOpened={isOpened} icon={IconType.chevronDown} />
        </S.LinkSectionTitleButton>
        <S.ListOfLinks>{openSection === section ? links : null}</S.ListOfLinks>
      </S.LinkSection>
    );
  };

  const renderMenu = (): ReactNode => {
    return (
      <>
        <S.DropdownContainer>
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
          <S.ButtonsContainer>
            <S.DiscordButton onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}>
              <DiscordLogo style={{marginRight: '8px'}} />
              Discord
            </S.DiscordButton>
            <S.DownloadButton onClick={() => history.push(ROUTES.download)} variant="outlined">
              Download Wallet
            </S.DownloadButton>
            <S.AppButton onClick={() => history.push(ROUTES.arcade)}>
              <TnbLogo style={{marginRight: '8px'}} />
              Apps
            </S.AppButton>
          </S.ButtonsContainer>
        </S.DropdownContainer>
        <S.Overlay onClick={closeMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string, isExternal?: boolean): ReactNode => {
    if (isExternal) {
      return (
        <S.ExternalLink href={to} newWindow={false}>
          {label}
        </S.ExternalLink>
      );
    }
    return <S.InternalLink to={to}>{label}</S.InternalLink>;
  };

  return (
    <S.Container>
      <S.MenuButton onClick={toggleMenu}>
        <Icon icon={IconType.menu} size={24} />
      </S.MenuButton>
      {menuOpen && renderMenu()}
    </S.Container>
  );
};

export default TopNavMobileMenu;
