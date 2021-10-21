import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';

import {isCreateAccountAllowed, isSignInAllowed} from 'config';
import {ROUTES, URLS} from 'constants/routes';
import TopNavLink from 'containers/TopNav/TopNavLink';
import TopNavPopover, {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';
import {selectActiveUser} from 'selectors/state';
import colors from 'styles/colors';
import {developerPopoverItems, getTNBCPopoverItems, resourcesPopoverItems} from './constants';
import TnbLogo from '../../../assets/svgs/TnbLogo';
import DiscordLogo from '../../../assets/svgs/DiscordLogo';

import * as S from './Styles';

const TopNavDesktopItems = () => {
  const history = useHistory();
  const activeUser = useSelector(selectActiveUser);
  const [activeUserAnchorEl, setActiveUserAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [developersAnchorEl, setDevelopersAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getTNBCAnchorEl, setGetTNBCAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isAppsButtonHovered, setIsAppsButtonHovered] = useState(false);
  const [isDiscordButtonHovered, setIsDiscordButtonHovered] = useState(false);

  const activeUserPopoverItems = useMemo<TopNavPopoverItemType[]>(() => {
    if (activeUser) {
      return [
        {title: 'Your Profile', to: `${ROUTES.users}/${activeUser.pk}`},
        {title: 'Sign Out', to: ROUTES.signout},
      ];
    }
    return [];
  }, [activeUser]);

  const renderActiveUser = () => {
    if (!activeUser) return null;
    const {profile_image: profileImage} = activeUser;
    return (
      <TopNavPopover
        className="TopNavDesktopItems__profile-image"
        anchorEl={activeUserAnchorEl}
        customButtonContent={<S.ProfileImage src={profileImage} size={36} />}
        items={activeUserPopoverItems}
        popoverId="active-user-popover"
        setAnchorEl={setActiveUserAnchorEl}
      />
    );
  };

  const renderAuthButtons = () => {
    if (activeUser) return null;
    return (
      <>
        {isCreateAccountAllowed && (
          <TopNavLink className="TopNavDesktopItems__right-item" text="Create Account" to={ROUTES.createAccount} />
        )}
        {isSignInAllowed && <TopNavLink className="TopNavDesktopItems__right-item" text="Sign In" to={ROUTES.signin} />}
      </>
    );
  };

  return (
    <S.Container>
      <TopNavPopover
        anchorEl={getTNBCAnchorEl}
        buttonText="Get TNBC"
        items={getTNBCPopoverItems}
        popoverId="get-tnbc-popover"
        setAnchorEl={setGetTNBCAnchorEl}
      />
      <TopNavPopover
        anchorEl={developersAnchorEl}
        buttonText="Developers"
        items={developerPopoverItems}
        popoverId="developer-popover"
        setAnchorEl={setDevelopersAnchorEl}
      />
      <TopNavPopover
        anchorEl={resourcesAnchorEl}
        buttonText="Resources"
        items={resourcesPopoverItems}
        popoverId="resources-popover"
        setAnchorEl={setResourcesAnchorEl}
      />
      <S.Separator />
      {renderAuthButtons()}
      <S.RightSection>
        <S.DiscordButton
          onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}
          onMouseEnter={() => setIsDiscordButtonHovered(true)}
          onMouseLeave={() => setIsDiscordButtonHovered(false)}
        >
          <DiscordLogo
            color={isDiscordButtonHovered ? colors.discordHover : colors.discord}
            style={{marginRight: '8px'}}
          />
          Discord
        </S.DiscordButton>
        <S.DownloadButton onClick={() => history.push(ROUTES.download)} variant="outlined">
          Download Wallet
        </S.DownloadButton>
        <S.AppButton
          onClick={() => history.push(ROUTES.arcade)}
          onMouseEnter={() => setIsAppsButtonHovered(true)}
          onMouseLeave={() => setIsAppsButtonHovered(false)}
        >
          <TnbLogo color={isAppsButtonHovered ? colors.primary : colors.white} style={{marginRight: '8px'}} />
          Apps
        </S.AppButton>
      </S.RightSection>
      {renderActiveUser()}
    </S.Container>
  );
};

export default TopNavDesktopItems;
