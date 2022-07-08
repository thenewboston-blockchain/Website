import React, {FC, ReactNode, useState} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import {ROUTES, URLS} from 'constants/routes';
import DiscordLogo from '../../../assets/svgs/DiscordLogo';

import * as S from './Styles';

interface ComponentProps {
  closeMenu(): void;
  menuOpen: boolean;
  toggleMenu(): void;
}

type SectionStrings = 'developers' | 'getTNBC' | 'resources';

const TopNavMobileMenu: FC<ComponentProps> = ({closeMenu, menuOpen, toggleMenu}) => {
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
            'developers',
            'Developers',
            <>
              {renderMobileLink('Home', URLS.developerPortal.home, true, false)}
              {renderMobileLink('Tutorials', URLS.developerPortal.tutorials, true, false)}
            </>,
          )}
          {renderColumn(
            'resources',
            'Resources',
            <>
              {renderMobileLink('Media Kit', ROUTES.assets)}
              {renderMobileLink('Join the Community', ROUTES.social)}
            </>,
          )}
          <S.ButtonsContainer>
            <S.DiscordButton onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}>
              <DiscordLogo style={{marginRight: '8px'}} />
              Discord
            </S.DiscordButton>
          </S.ButtonsContainer>
        </S.DropdownContainer>
        <S.Overlay onClick={closeMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string, isExternal?: boolean, newWindow = false): ReactNode => {
    if (isExternal) {
      return (
        <S.ExternalLink href={to} showNewWindowIcon={false} newWindow={newWindow}>
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
