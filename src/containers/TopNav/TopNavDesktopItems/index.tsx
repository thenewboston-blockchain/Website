import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {Avatar, Button} from 'components';
import {isCreateAccountAllowed, isSignInAllowed} from 'config';
import {ROUTES, URLS} from 'constants/routes';
import TopNavLink from 'containers/TopNav/TopNavLink';
import TopNavPopover, {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';
import {selectActiveUser} from 'selectors/state';
import colors from 'styles/colors';
import TnbLogo from '../../../assets/svgs/TnbLogo';
import DiscordLogo from '../../../assets/svgs/DiscordLogo';

import './TopNavDesktopItems.scss';

const developerPopoverItems: TopNavPopoverItemType[] = [
  {
    isExternal: true,
    title: 'Home',
    to: URLS.developerPortal.home,
  },
  {
    isExternal: true,
    title: 'Living Whitepaper',
    to: URLS.developerPortal.whitepaper,
  },
  {
    title: 'Tutorials',
    to: ROUTES.tutorials,
  },
  {
    isExternal: true,
    title: 'Projects',
    to: URLS.developerPortal.projects,
  },
  {
    isExternal: true,
    title: 'APIs',
    to: URLS.developerPortal.api,
  },
  {
    isExternal: true,
    title: 'SDKs &  Libraries',
    to: URLS.developerPortal.sdkAndLibraries,
  },
];

const getTNBCPopoverItems: TopNavPopoverItemType[] = [
  {
    title: 'Bounties',
    to: ROUTES.bounties,
  },
  {
    title: 'Careers',
    to: ROUTES.openings,
  },
  {
    isExternal: true,
    title: 'Faucet',
    to: URLS.apps.faucet,
  },
  {
    isExternal: true,
    title: 'Create Projects',
    to: URLS.developerPortal.projects,
  },
  {
    title: 'Play Games',
    to: ROUTES.arcade,
  },
];

const resourcesPopoverItems: TopNavPopoverItemType[] = [
  {
    title: 'Roadmap',
    to: ROUTES.roadmap,
  },
  {
    title: 'FAQ',
    to: ROUTES.faq,
  },
  {
    isExternal: true,
    title: 'Blog',
    to: URLS.blog,
  },
  {
    title: 'Analytics',
    to: ROUTES.analytics,
  },
  {
    title: 'Media Kit',
    to: ROUTES.assets,
  },
  {
    title: 'Meet the Team',
    to: ROUTES.teams,
  },
  {
    title: 'Donate',
    to: ROUTES.donate,
  },
];

const TopNavDesktopItems = () => {
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
        customButtonContent={<Avatar src={profileImage} size={36} />}
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
    <>
      <TopNavPopover
        anchorEl={getTNBCAnchorEl}
        buttonText="Get TNBC"
        className="TopNavDesktopItems__right-item"
        items={getTNBCPopoverItems}
        popoverId="get-tnbc-popover"
        setAnchorEl={setGetTNBCAnchorEl}
      />
      <TopNavPopover
        anchorEl={developersAnchorEl}
        buttonText="Developers"
        className="TopNavDesktopItems__right-item"
        items={developerPopoverItems}
        popoverId="developer-popover"
        setAnchorEl={setDevelopersAnchorEl}
      />
      <TopNavPopover
        anchorEl={resourcesAnchorEl}
        buttonText="Resources"
        className="TopNavDesktopItems__right-item"
        items={resourcesPopoverItems}
        popoverId="resources-popover"
        setAnchorEl={setResourcesAnchorEl}
      />
      <div className="TopNavDesktopItems__separator" />
      {renderAuthButtons()}
      <div className="TopNavDesktopItems__right-item">
        <button
          className="TopNavDesktopItems__discord-button"
          onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}
          onMouseEnter={() => setIsDiscordButtonHovered(true)}
          onMouseLeave={() => setIsDiscordButtonHovered(false)}
        >
          <DiscordLogo
            color={isDiscordButtonHovered ? colors.discordHover : colors.discord}
            style={{marginRight: '8px'}}
          />
          Discord
        </button>
        <Link className="TopNavDesktopItems__download" tabIndex={-1} to={ROUTES.download}>
          <Button variant="outlined">Download Wallet</Button>
        </Link>
        <Link
          className="TopNavDesktopItems__apps"
          tabIndex={-1}
          to={ROUTES.arcade}
          onMouseEnter={() => setIsAppsButtonHovered(true)}
          onMouseLeave={() => setIsAppsButtonHovered(false)}
        >
          <Button className="TopNavDesktopItems__apps-button">
            <TnbLogo color={isAppsButtonHovered ? colors.primary : colors.white} style={{marginRight: '8px'}} />
            Apps
          </Button>
        </Link>
      </div>
      {renderActiveUser()}
    </>
  );
};

export default TopNavDesktopItems;
