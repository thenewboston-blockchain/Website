/* eslint-disable react/jsx-props-no-spreading */

import React, {forwardRef, ReactNode, useMemo} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import AccountGroupIcon from 'mdi-react/AccountGroupIcon';
import AlertIcon from 'mdi-react/AlertIcon';
import AlertCircleIcon from 'mdi-react/AlertCircleIcon';
import AlertCircleOutlineIcon from 'mdi-react/AlertCircleOutlineIcon';
import ArrowCollapseDownIcon from 'mdi-react/ArrowCollapseDownIcon';
import ArrowDownIcon from 'mdi-react/ArrowDownIcon';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import ArrowUpIcon from 'mdi-react/ArrowUpIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import ContentCopyIcon from 'mdi-react/ContentCopyIcon';
import CurrencyUsdIcon from 'mdi-react/CurrencyUsdIcon';
import DiscordIcon from 'mdi-react/DiscordIcon';
import DownloadIcon from 'mdi-react/DownloadIcon';
import EarthIcon from 'mdi-react/EarthIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import FileDocumentIcon from 'mdi-react/FileDocumentIcon';
import FileDownloadIcon from 'mdi-react/FileDownloadIcon';
import ForumIcon from 'mdi-react/ForumIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import HammerWrenchIcon from 'mdi-react/HammerWrenchIcon';
import HumanHandsupIcon from 'mdi-react/HumanHandsupIcon';
import InformationIcon from 'mdi-react/InformationIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import LoadingIcon from 'mdi-react/LoadingIcon';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import MenuRightIcon from 'mdi-react/MenuRightIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import PencilIcon from 'mdi-react/PencilIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import RadioboxBlankIcon from 'mdi-react/RadioboxBlankIcon';
import RadioboxMarkedIcon from 'mdi-react/RadioboxMarkedIcon';
import RedditIcon from 'mdi-react/RedditIcon';
import ShareCirlceIcon from 'mdi-react/ShareCircleIcon';
import SlackIcon from 'mdi-react/SlackIcon';
import SortAscendingIcon from 'mdi-react/SortAscendingIcon';
import SortDescendingIcon from 'mdi-react/SortDescendingIcon';
import TextBoxIcon from 'mdi-react/TextBoxIcon';
import ThumbsUpIcon from 'mdi-react/ThumbsUpIcon';
import TrophyIcon from 'mdi-react/TrophyIcon';
import TwitchIcon from 'mdi-react/TwitchIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import YoutubeIcon from 'mdi-react/YoutubeIcon';

import './Icon.scss';

// These names are camelCased versions of the names found in https://materialdesignicons.com/
export enum IconType {
  accountGroup,
  alert,
  alertCircle,
  alertCircleOutline,
  arrowCollapseDown,
  arrowDown,
  arrowLeft,
  arrowUp,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  close,
  contentCopy,
  currencyUsd,
  discord,
  downloadIcon,
  earth,
  facebook,
  fileDocument,
  fileDownload,
  forum,
  github,
  hammerWrench,
  humanHandsUp,
  information,
  instagram,
  linkedin,
  loading,
  menu,
  menuRight,
  minus,
  openInNew,
  pencil,
  plus,
  radioboxBlank,
  radioboxMarked,
  reddit,
  shareCircle,
  slack,
  sortAscending,
  sortDescending,
  textBox,
  thumbsUp,
  trophy,
  twitch,
  twitter,
  youtube,
}

interface ComponentProps {
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  icon: IconType;
  onClick?(e?: React.MouseEvent<HTMLSpanElement, MouseEvent>): void;
  onKeyDown?(e?: React.KeyboardEvent<HTMLSpanElement>): void;
  size?: number;
  totalSize?: number | 'unset';
  unfocusable?: boolean;
}

const Icon = forwardRef<HTMLSpanElement, ComponentProps>(
  (
    {className, dataTestId, disabled = false, icon, onClick, onKeyDown, size, totalSize = 'unset', unfocusable = false},
    ref,
  ) => {
    const iconProps = {
      size,
    };

    const renderIcon = (): ReactNode => {
      switch (icon) {
        case IconType.accountGroup:
          return <AccountGroupIcon {...iconProps} />;
        case IconType.alert:
          return <AlertIcon {...iconProps} />;
        case IconType.alertCircle:
          return <AlertCircleIcon {...iconProps} />;
        case IconType.alertCircleOutline:
          return <AlertCircleOutlineIcon {...iconProps} />;
        case IconType.arrowCollapseDown:
          return <ArrowCollapseDownIcon {...iconProps} />;
        case IconType.arrowDown:
          return <ArrowDownIcon {...iconProps} />;
        case IconType.arrowLeft:
          return <ArrowLeftIcon {...iconProps} />;
        case IconType.arrowUp:
          return <ArrowUpIcon {...iconProps} />;
        case IconType.chevronDown:
          return <ChevronDownIcon {...iconProps} />;
        case IconType.chevronLeft:
          return <ChevronLeftIcon {...iconProps} />;
        case IconType.chevronRight:
          return <ChevronRightIcon {...iconProps} />;
        case IconType.chevronUp:
          return <ChevronUpIcon {...iconProps} />;
        case IconType.close:
          return <CloseIcon {...iconProps} />;
        case IconType.contentCopy:
          return <ContentCopyIcon {...iconProps} />;
        case IconType.currencyUsd:
          return <CurrencyUsdIcon {...iconProps} />;
        case IconType.discord:
          return <DiscordIcon {...iconProps} />;
        case IconType.downloadIcon:
          return <DownloadIcon {...iconProps} />;
        case IconType.earth:
          return <EarthIcon {...iconProps} />;
        case IconType.facebook:
          return <FacebookIcon {...iconProps} />;
        case IconType.fileDocument:
          return <FileDocumentIcon {...iconProps} />;
        case IconType.fileDownload:
          return <FileDownloadIcon {...iconProps} />;
        case IconType.forum:
          return <ForumIcon {...iconProps} />;
        case IconType.github:
          return <GithubIcon {...iconProps} />;
        case IconType.hammerWrench:
          return <HammerWrenchIcon {...iconProps} />;
        case IconType.humanHandsUp:
          return <HumanHandsupIcon {...iconProps} />;
        case IconType.information:
          return <InformationIcon {...iconProps} />;
        case IconType.instagram:
          return <InstagramIcon {...iconProps} />;
        case IconType.linkedin:
          return <LinkedinIcon {...iconProps} />;
        case IconType.loading:
          return <LoadingIcon {...iconProps} />;
        case IconType.menu:
          return <MenuIcon {...iconProps} />;
        case IconType.menuRight:
          return <MenuRightIcon {...iconProps} />;
        case IconType.minus:
          return <MinusIcon {...iconProps} />;
        case IconType.openInNew:
          return <OpenInNewIcon {...iconProps} />;
        case IconType.pencil:
          return <PencilIcon {...iconProps} />;
        case IconType.plus:
          return <PlusIcon {...iconProps} />;
        case IconType.radioboxBlank:
          return <RadioboxBlankIcon {...iconProps} />;
        case IconType.radioboxMarked:
          return <RadioboxMarkedIcon {...iconProps} />;
        case IconType.reddit:
          return <RedditIcon {...iconProps} />;
        case IconType.shareCircle:
          return <ShareCirlceIcon {...iconProps} />;
        case IconType.slack:
          return <SlackIcon {...iconProps} />;
        case IconType.sortAscending:
          return <SortAscendingIcon {...iconProps} />;
        case IconType.sortDescending:
          return <SortDescendingIcon {...iconProps} />;
        case IconType.textBox:
          return <TextBoxIcon {...iconProps} />;
        case IconType.thumbsUp:
          return <ThumbsUpIcon {...iconProps} />;
        case IconType.trophy:
          return <TrophyIcon {...iconProps} />;
        case IconType.twitch:
          return <TwitchIcon {...iconProps} />;
        case IconType.twitter:
          return <TwitterIcon {...iconProps} />;
        case IconType.youtube:
          return <YoutubeIcon {...iconProps} />;
        default:
          return null;
      }
    };

    const divStyle = useMemo(() => {
      if (totalSize === 'unset') return {};
      const divSize = Math.max(size || 0, totalSize);
      return {height: divSize, width: divSize};
    }, [size, totalSize]);

    const tabIndex = useMemo(() => (unfocusable || !onClick ? undefined : 0), [onClick, unfocusable]);

    const handleClick = (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
      if (disabled || !onClick) return;
      onClick(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
      if (!onClick) return;

      if (e.key === 'Enter' && !disabled) {
        handleClick();
      }

      onKeyDown?.(e);
    };

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <span
        role={onClick ? 'button' : 'img'}
        className={clsx('Icon', className, {
          'Icon--disabled': disabled,
          ...bemify(className, '--disabled', disabled),
        })}
        data-testid={dataTestId}
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={divStyle}
        tabIndex={tabIndex}
      >
        {renderIcon()}
      </span>
    );
  },
);

export default Icon;
