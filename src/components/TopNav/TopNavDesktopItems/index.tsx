import React, {ReactNode, useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import {Button, IconType} from 'components';
import TopNavPopoverButton from 'components/TopNav/TopNavPopoverButton';
import TopNavText from 'components/TopNav/TopNavText';
import TopNavPopoverItem from 'components/TopNav/TopNavPopoverItem';

const TopNavDesktopItems = () => {
  const [communityAnchorEl, setCommunityAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getStartedAnchorEl, setGetStartedAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLButtonElement | null>(null);

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
          description="Meet our growing team"
          iconType={IconType.accountGroup}
          title="Team"
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
        className="TopNav__right-item"
        popoverId="get-started-popover"
        setAnchorEl={setGetStartedAnchorEl}
        unsetAnchorEl={unsetGetStartedAnchorEl}
      >
        {renderGetStartedPopover()}
      </TopNavPopoverButton>
      <TopNavPopoverButton
        anchorEl={communityAnchorEl}
        buttonText="Community"
        className="TopNav__right-item"
        popoverId="community-popover"
        setAnchorEl={setCommunityAnchorEl}
        unsetAnchorEl={unsetCommunityAnchorEl}
      >
        {renderCommunityPopover()}
      </TopNavPopoverButton>
      <TopNavPopoverButton
        anchorEl={moreAnchorEl}
        buttonText="More"
        className="TopNav__right-item"
        popoverId="more-popover"
        setAnchorEl={setMoreAnchorEl}
        unsetAnchorEl={unsetMoreAnchorEl}
      >
        {renderMorePopover()}
      </TopNavPopoverButton>
      <div className="TopNav__separator" />
      <TopNavText buttonText="Create Account" className="TopNav__right-item" toUrl="/create-account" />
      <TopNavText buttonText="Sign In" className="TopNav__right-item" toUrl="/sign-in" />
      <Link className={clsx('TopNav__right-item', 'TopNav__download-button')} tabIndex={-1} to="/download">
        <Button>Download</Button>
      </Link>
    </>
  );
};

export default TopNavDesktopItems;
