import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {IconType} from '@thenewboston/ui';

import {A, Avatar, Button} from 'components';
import {isCreateAccountAllowed, isSignInAllowed} from 'config';
import {ROUTES, URLS} from 'constants/routes';
import TopNavLink from 'containers/TopNav/TopNavLink';
import TopNavPopover, {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';
import {selectActiveUser} from 'selectors/state';

import './TopNavDesktopItems.scss';

const communityPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Discord, GitHub, YouTube, LinkedIn, etc',
    iconType: IconType.earth,
    title: 'Join the Community!',
    to: ROUTES.social,
  },
  {
    description: 'Stay up to date with our weekly sprints',
    iconType: IconType.chartTimelineVariantShimmer,
    title: 'Weekly Progress',
    to: ROUTES.progress,
  },
  {
    description: 'Join the team building the app',
    iconType: IconType.humanHandsup,
    title: 'Openings',
    to: ROUTES.openings,
  },
  {
    description: 'Read up on our community culture',
    iconType: IconType.notebookCheckOutline,
    title: 'Community Guidelines',
    to: ROUTES.guidelines,
  },
  {
    description: 'Real time analytics',
    iconType: IconType.chartAreaspline,
    title: 'Analytics',
    to: ROUTES.analytics,
  },
  {
    description: 'Tasks to finish up beta app',
    iconType: IconType.mapMarkerCheck,
    title: 'Beta Roadmap',
    to: ROUTES.roadmap,
  },
  {
    description: 'Stay updated with our latest articles',
    iconType: IconType.textBox,
    isExternal: true,
    title: 'Blog',
    to: URLS.blog,
  },
];

const getStartedPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Pick up bounties within GitHub and earn coins',
    iconSize: 28,
    iconType: IconType.github,
    title: 'Bounties',
    to: ROUTES.bounties,
  },
  {
    description: 'Propose ideas you want built',
    iconType: IconType.hammerWrench,
    isExternal: true,
    title: 'Projects',
    to: URLS.developerPortal.home,
  },
];

const resourcesPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Start reading into Guides',
    iconType: IconType.fileDocument,
    title: 'Documentation',
    to: ROUTES.wallet,
  },
  {
    description: 'Watch tutorials made by the community',
    iconType: IconType.playBoxMultiple,
    title: 'Tutorials',
    to: ROUTES.tutorials,
  },
  {
    description: 'Download thenewboston assets',
    iconType: IconType.fileDownload,
    title: 'Media Kit',
    to: ROUTES.assets,
  },
];

const aboutPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Meet our awesome teams',
    iconType: IconType.accountGroup,
    title: 'Teams',
    to: ROUTES.teams,
  },
  {
    description: 'Support thenewboston',
    iconType: IconType.currencyUsd,
    title: 'Donate',
    to: ROUTES.donate,
  },
];

const TopNavDesktopItems = () => {
  const activeUser = useSelector(selectActiveUser);
  const [activeUserAnchorEl, setActiveUserAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [communityAnchorEl, setCommunityAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getStartedAnchorEl, setGetStartedAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState<HTMLButtonElement | null>(null);

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
        anchorEl={getStartedAnchorEl}
        buttonText="Get Started"
        className="TopNavDesktopItems__right-item"
        items={getStartedPopoverItems}
        popoverId="get-started-popover"
        setAnchorEl={setGetStartedAnchorEl}
      />
      <TopNavPopover
        anchorEl={communityAnchorEl}
        buttonText="Community"
        className="TopNavDesktopItems__right-item"
        items={communityPopoverItems}
        popoverId="community-popover"
        setAnchorEl={setCommunityAnchorEl}
      />
      <A
        className="TopNavDesktopItems__right-item TopNavDesktopItems__link"
        href={URLS.developerPortal.home}
        showNewWindowIcon={false}
      >
        Developer
      </A>
      <TopNavPopover
        anchorEl={resourcesAnchorEl}
        buttonText="Resources"
        className="TopNavDesktopItems__right-item"
        items={resourcesPopoverItems}
        popoverId="resources-popover"
        setAnchorEl={setResourcesAnchorEl}
      />
      <TopNavPopover
        anchorEl={aboutAnchorEl}
        buttonText="About"
        className="TopNavDesktopItems__right-item"
        items={aboutPopoverItems}
        popoverId="about-popover"
        setAnchorEl={setAboutAnchorEl}
      />
      <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to={ROUTES.faq}>
        FAQ
      </Link>
      <div className="TopNavDesktopItems__separator" />
      {renderAuthButtons()}
      <div className="TopNavDesktopItems__right-item">
        <Link className=" TopNavDesktopItems__arcade-button" tabIndex={-1} to={ROUTES.arcade}>
          <Button variant="outlined">Arcade</Button>
        </Link>
        <Link className="TopNavDesktopItems__download-button" tabIndex={-1} to={ROUTES.download}>
          <Button>Download Wallet</Button>
        </Link>
      </div>
      {renderActiveUser()}
    </>
  );
};

export default TopNavDesktopItems;
