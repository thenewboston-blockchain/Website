import React, {ReactNode, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import DefaultUserAvatar from 'assets/images/default-avatar.png';
import {Button, IconType} from 'components';
import TopNavPopoverButton from 'containers/TopNav/TopNavPopoverButton';
import TopNavText from 'containers/TopNav/TopNavText';
import TopNavPopoverItem from 'containers/TopNav/TopNavPopoverItem';
import TopNavPopoverItemSimple from 'containers/TopNav/TopNavPopoverItemSimple';
import {selectActiveUser} from 'selectors/state';

import './TopNavDesktopItems.scss';

const TopNavDesktopItems = () => {
  const activeUser = useSelector(selectActiveUser);
  const [activeUserAnchorEl, setActiveUserAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [communityAnchorEl, setCommunityAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getStartedAnchorEl, setGetStartedAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLButtonElement | null>(null);

  const renderActiveUser = () => {
    if (!activeUser) return null;
    const {profile_image: profileImage} = activeUser;
    return (
      <TopNavPopoverButton
        anchorEl={activeUserAnchorEl}
        customButtonContent={
          <img alt="profile" className="TopNavDesktopItems__profile-image" src={profileImage || DefaultUserAvatar} />
        }
        popoverId="active-user-popover"
        setAnchorEl={setActiveUserAnchorEl}
        unsetAnchorEl={unsetActiveUserAnchorEl}
      >
        {renderActiveUserPopover()}
      </TopNavPopoverButton>
    );
  };

  const renderActiveUserPopover = (): ReactNode => {
    return (
      <>
        <TopNavPopoverItemSimple
          closePopover={unsetActiveUserAnchorEl}
          title="Your Profile"
          to={`/users/${activeUser.pk}`}
        />
        <TopNavPopoverItemSimple closePopover={unsetActiveUserAnchorEl} title="Sign Out" to="/sign-out" />
      </>
    );
  };

  const renderAuthButtons = () => {
    if (activeUser) return null;
    return (
      <>
        <TopNavText buttonText="Create Account" className="TopNavDesktopItems__right-item" toUrl="/create-account" />
        <TopNavText buttonText="Sign In" className="TopNavDesktopItems__right-item" toUrl="/sign-in" />
      </>
    );
  };

  const renderCommunityPopover = (): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          closePopover={unsetCommunityAnchorEl}
          description="Slack, GitHub, YouTube, LinkedIn, etc"
          iconType={IconType.earth}
          title="Join the Community!"
          to="/social"
        />
        <TopNavPopoverItem
          closePopover={unsetCommunityAnchorEl}
          description="Join the team building the app"
          iconType={IconType.humanHandsUp}
          title="Openings"
          to="/openings"
        />
        <TopNavPopoverItem
          closePopover={unsetCommunityAnchorEl}
          description="Meet our awesome teams"
          iconType={IconType.accountGroup}
          title="Teams"
          to="/teams"
        />
        <TopNavPopoverItem
          closePopover={unsetCommunityAnchorEl}
          description="View the highest ranked contributors"
          iconType={IconType.trophy}
          title="Leaderboard"
          to="/leaderboard/All"
        />
      </>
    );
  };

  const renderGetStartedPopover = (): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          closePopover={unsetGetStartedAnchorEl}
          description="Start reading into Guides and APIs"
          iconType={IconType.fileDocument}
          title="Documentation"
          to="/guide/introduction"
        />
        <TopNavPopoverItem
          closePopover={unsetGetStartedAnchorEl}
          description="Pick up tasks within GitHub and earn coins"
          iconSize={28}
          iconType={IconType.github}
          title="Tasks"
          to="/tasks"
        />
      </>
    );
  };

  const renderMorePopover = (): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          closePopover={unsetMoreAnchorEl}
          description="Propose ideas you want built"
          iconType={IconType.hammerWrench}
          title="Project Proposals"
          to="/project-proposals/overview"
        />
        <TopNavPopoverItem
          closePopover={unsetMoreAnchorEl}
          description="Download thenewboston assets"
          iconType={IconType.fileDownload}
          title="Assets"
          to="/assets"
        />
        <TopNavPopoverItem
          closePopover={unsetMoreAnchorEl}
          description="Frequently asked questions"
          iconType={IconType.forum}
          title="FAQ"
          to="/faq"
        />
        <TopNavPopoverItem
          closePopover={unsetMoreAnchorEl}
          description="Support thenewboston"
          iconType={IconType.currencyUsd}
          title="Donate"
          to="/donate"
        />
      </>
    );
  };

  const unsetActiveUserAnchorEl = useCallback((): void => {
    setActiveUserAnchorEl(null);
  }, [setActiveUserAnchorEl]);

  const unsetCommunityAnchorEl = useCallback((): void => {
    setCommunityAnchorEl(null);
  }, [setCommunityAnchorEl]);

  const unsetGetStartedAnchorEl = useCallback((): void => {
    setGetStartedAnchorEl(null);
  }, [setGetStartedAnchorEl]);

  const unsetMoreAnchorEl = useCallback((): void => {
    setMoreAnchorEl(null);
  }, [setMoreAnchorEl]);

  return (
    <>
      <TopNavPopoverButton
        anchorEl={getStartedAnchorEl}
        buttonText="Get Started"
        className="TopNavDesktopItems__right-item"
        popoverId="get-started-popover"
        setAnchorEl={setGetStartedAnchorEl}
        unsetAnchorEl={unsetGetStartedAnchorEl}
      >
        {renderGetStartedPopover()}
      </TopNavPopoverButton>
      <TopNavPopoverButton
        anchorEl={communityAnchorEl}
        buttonText="Community"
        className="TopNavDesktopItems__right-item"
        popoverId="community-popover"
        setAnchorEl={setCommunityAnchorEl}
        unsetAnchorEl={unsetCommunityAnchorEl}
      >
        {renderCommunityPopover()}
      </TopNavPopoverButton>
      <TopNavPopoverButton
        anchorEl={moreAnchorEl}
        buttonText="More"
        className="TopNavDesktopItems__right-item"
        popoverId="more-popover"
        setAnchorEl={setMoreAnchorEl}
        unsetAnchorEl={unsetMoreAnchorEl}
      >
        {renderMorePopover()}
      </TopNavPopoverButton>
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
