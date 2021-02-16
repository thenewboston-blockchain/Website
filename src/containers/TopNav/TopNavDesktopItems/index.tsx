import React, {useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import DefaultUserAvatar from 'assets/images/default-avatar.png';
import {Button, IconType} from 'components';
import TopNavLink from 'containers/TopNav/TopNavLink';
import TopNavPopover, {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';
import {selectActiveUser} from 'selectors/state';

import './TopNavDesktopItems.scss';

const communityPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Slack, GitHub, YouTube, LinkedIn, etc',
    iconType: IconType.earth,
    title: 'Join the Community!',
    to: '/social',
  },
  {
    description: 'Join the team building the app',
    iconType: IconType.humanHandsUp,
    title: 'Openings',
    to: '/openings',
  },
  {
    description: 'Meet our awesome teams',
    iconType: IconType.accountGroup,
    title: 'Teams',
    to: '/teams',
  },
  {
    description: 'View the highest ranked contributors',
    iconType: IconType.trophy,
    title: 'Leaderboard',
    to: '/leaderboard/All',
  },
];

const getStartedPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Start reading into Guides and APIs',
    iconType: IconType.fileDocument,
    title: 'Documentation',
    to: '/guide/introduction',
  },
  {
    description: 'Pick up tasks within GitHub and earn coins',
    iconSize: 28,
    iconType: IconType.github,
    title: 'Tasks',
    to: '/tasks',
  },
];

const morePopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Propose ideas you want built',
    iconType: IconType.hammerWrench,
    title: 'Project Proposals',
    to: '/project-proposals/overview',
  },
  {
    description: 'Stay updated on crypto and thenewboston',
    iconType: IconType.textBox,
    isExternal: true,
    title: 'Blog',
    to: 'https://thenewboston.blog/',
  },
  {
    description: 'Download thenewboston assets',
    iconType: IconType.fileDownload,
    title: 'Assets',
    to: '/assets',
  },
  {
    description: 'Frequently asked questions',
    iconType: IconType.forum,
    title: 'FAQ',
    to: '/faq',
  },
  {
    description: 'Support thenewboston',
    iconType: IconType.currencyUsd,
    title: 'Donate',
    to: '/donate',
  },
];

const TopNavDesktopItems = () => {
  const activeUser = useSelector(selectActiveUser);
  const [activeUserAnchorEl, setActiveUserAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [communityAnchorEl, setCommunityAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getStartedAnchorEl, setGetStartedAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLButtonElement | null>(null);

  const activeUserPopoverItems = useMemo<TopNavPopoverItemType[]>(() => {
    if (activeUser) {
      return [
        {title: 'Your Profile', to: `/users/${activeUser.pk}`},
        {title: 'Sign Out', to: '/sign-out'},
      ];
    }
    return [];
  }, [activeUser]);

  const renderActiveUser = () => {
    if (!activeUser) return null;
    const {profile_image: profileImage} = activeUser;
    return (
      <TopNavPopover
        anchorEl={activeUserAnchorEl}
        customButtonContent={
          <img alt="profile" className="TopNavDesktopItems__profile-image" src={profileImage || DefaultUserAvatar} />
        }
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
        <TopNavLink className="TopNavDesktopItems__right-item" text="Create Account" to="/create-account" />
        <TopNavLink className="TopNavDesktopItems__right-item" text="Sign In" to="/sign-in" />
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
      <TopNavPopover
        anchorEl={moreAnchorEl}
        buttonText="More"
        className="TopNavDesktopItems__right-item"
        items={morePopoverItems}
        popoverId="more-popover"
        setAnchorEl={setMoreAnchorEl}
      />
      <div className="TopNavDesktopItems__separator" />
      {renderAuthButtons()}
      <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__download-button" tabIndex={-1} to="/download">
        <Button>Download</Button>
      </Link>
      {renderActiveUser()}
    </>
  );
};

export default TopNavDesktopItems;
