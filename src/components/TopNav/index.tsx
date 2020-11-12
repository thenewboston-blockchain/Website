import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import clsx from 'clsx';

import {Button, Icon, IconType} from 'components';
import {useBooleanState, useWindowDimensions} from 'hooks';

import TopNavLogo from './TopNavLogo';
import TopNavPopoverButton from './TopNavPopoverButton';
import TopNavPopoverItem from './TopNavPopoverItem';
import './TopNav.scss';

interface ComponentProps {
  className?: string;
}

const TopNav: FC<ComponentProps> = ({className}) => {
  const [mobileMenuOpen, toggleMobileMenu, , closeMobileMenu] = useBooleanState(false);
  const history = useHistory();
  const {pathname} = useLocation();
  const [communityAnchorEl, setCommunityAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getStartedAnchorEl, setGetStartedAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isFocused, setFocus] = useState(false);
  const [dropdownButton, setDropdownButton] = useState('');
  const {width} = useWindowDimensions();

  useEffect(() => {
    closeMobileMenu();
  }, [closeMobileMenu, pathname]);

  useEffect(() => {
    if (width > 992 && mobileMenuOpen) {
      closeMobileMenu();
    }
  }, [closeMobileMenu, mobileMenuOpen, width]);

  const handleMobileLinkClick = (to: string) => (): void => {
    history.push(to);
    closeMobileMenu();
  };

  const renderMobileMenu = (): ReactNode => {
    return (
      <div className="mobile-menu">
        <button className="mobile-menu__button" onClick={toggleMobileMenu}>
          <Icon icon={IconType.menu} size={24} />
        </button>
        {renderMobileDropdownMenu()}
      </div>
    );
  };

  const renderCommunityPopover = (anchorEl: HTMLButtonElement | null): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          closePopover={unsetCommunityAnchorEl}
          description="Slack, GitHub, YouTube, LinkedIn, etc"
          iconType={IconType.earth}
          shouldFocus={!!anchorEl && isFocused}
          shouldCloseOnShiftTab
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
          shouldCloseOnTab
          title="Leaderboard"
          to="/leaderboard/All"
        />
      </>
    );
  };

  const renderGetStartedPopover = (anchorEl: HTMLButtonElement | null): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          closePopover={unsetGetStartedAnchorEl}
          description="Start reading into Guides and APIs"
          iconType={IconType.fileDocument}
          shouldFocus={!!anchorEl && isFocused}
          shouldCloseOnShiftTab
          title="Documentation"
          to="/guide/introduction"
        />
        <TopNavPopoverItem
          closePopover={unsetGetStartedAnchorEl}
          description="Pick up tasks within GitHub and earn coins"
          iconSize={28}
          iconType={IconType.github}
          shouldCloseOnTab
          title="Tasks"
          to="/tasks"
        />
      </>
    );
  };

  const renderMorePopover = (anchorEl: HTMLButtonElement | null): ReactNode => {
    return (
      <>
        <TopNavPopoverItem
          closePopover={unsetMoreAnchorEl}
          description="Frequently asked questions"
          iconType={IconType.forum}
          shouldFocus={!!anchorEl && isFocused}
          shouldCloseOnShiftTab
          title="FAQ"
          to="/faq"
        />
        <TopNavPopoverItem
          closePopover={unsetMoreAnchorEl}
          description="Support thenewboston"
          iconType={IconType.currencyUsd}
          shouldCloseOnTab
          title="Donate"
          to="/donate"
        />
      </>
    );
  };

  const renderMenuItems = (): ReactNode => {
    return (
      <>
        <TopNavPopoverButton
          anchorEl={getStartedAnchorEl}
          buttonText="Get Started"
          className="TopNav__right-item"
          setFocus={setFocus}
          popoverId="get-started-popover"
          selectedDropdown={dropdownButton}
          setDropdownButton={setDropdownButton}
          setAnchorEl={setGetStartedAnchorEl}
          unsetAnchorEl={unsetGetStartedAnchorEl}
        >
          {renderGetStartedPopover(getStartedAnchorEl)}
        </TopNavPopoverButton>
        <TopNavPopoverButton
          anchorEl={communityAnchorEl}
          buttonText="Community"
          className="TopNav__right-item"
          setFocus={setFocus}
          popoverId="community-popover"
          selectedDropdown={dropdownButton}
          setDropdownButton={setDropdownButton}
          setAnchorEl={setCommunityAnchorEl}
          unsetAnchorEl={unsetCommunityAnchorEl}
        >
          {renderCommunityPopover(communityAnchorEl)}
        </TopNavPopoverButton>
        <TopNavPopoverButton
          anchorEl={moreAnchorEl}
          buttonText="More"
          className="TopNav__right-item"
          setFocus={setFocus}
          popoverId="more-popover"
          selectedDropdown={dropdownButton}
          setDropdownButton={setDropdownButton}
          setAnchorEl={setMoreAnchorEl}
          unsetAnchorEl={unsetMoreAnchorEl}
        >
          {renderMorePopover(moreAnchorEl)}
        </TopNavPopoverButton>
        <Link className={clsx('TopNav__right-item', 'TopNav__download-button')} to="/download">
          <Button>Download</Button>
        </Link>
      </>
    );
  };

  const renderMobileDropdownMenu = (): ReactNode => {
    if (!mobileMenuOpen) return null;
    return (
      <>
        <div className="mobile-menu__dropdown-container">
          <div className="mobile-menu__column">
            <div className="mobile-menu__column-title">Get Started</div>
            {renderMobileLink('Documentation', '/guide/introduction')}
            {renderMobileLink('Tasks', '/tasks')}
            {renderMobileLink('Download', '/download')}
          </div>
          <div className="mobile-menu__column">
            <div className="mobile-menu__column-title">Community</div>
            {renderMobileLink('Join the Community!', '/social')}
            {renderMobileLink('Openings', '/openings')}
            {renderMobileLink('Teams', '/teams')}
            {renderMobileLink('Leaderboard', '/leaderboard/All')}
          </div>
          <div className="mobile-menu__column">
            <div className="mobile-menu__column-title">More</div>
            {renderMobileLink('FAQ', '/faq')}
            {renderMobileLink('Donate', '/donate')}
          </div>
        </div>
        <div className={clsx('mobile-menu__overlay')} onClick={closeMobileMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string): ReactNode => {
    return (
      <button className="mobile-menu__link" onClick={handleMobileLinkClick(to)}>
        {label}
      </button>
    );
  };

  const renderRightItems = (): ReactNode => {
    return (
      <div className="TopNav__right">
        {renderMenuItems()}
        {renderMobileMenu()}
      </div>
    );
  };

  const unsetCommunityAnchorEl = useCallback((): void => {
    setCommunityAnchorEl(null);
    setFocus(false);
    setDropdownButton('Community');
  }, [setCommunityAnchorEl, setFocus, setDropdownButton]);

  const unsetGetStartedAnchorEl = useCallback((): void => {
    setGetStartedAnchorEl(null);
    setFocus(false);
    setDropdownButton('Get Started');
  }, [setGetStartedAnchorEl, setFocus, setDropdownButton]);

  const unsetMoreAnchorEl = useCallback((): void => {
    setMoreAnchorEl(null);
    setFocus(false);
    setDropdownButton('More');
  }, [setMoreAnchorEl, setFocus, setDropdownButton]);

  return (
    <header className={clsx('TopNav', className)}>
      <div className="TopNav__left">
        <TopNavLogo />
      </div>
      {renderRightItems()}
    </header>
  );
};

export default TopNav;
