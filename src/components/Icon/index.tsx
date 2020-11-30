/* eslint-disable react/jsx-props-no-spreading */

import React, {forwardRef, ReactNode, useMemo} from 'react';
import clsx from 'clsx';

import AccountGroupIcon from 'mdi-react/AccountGroupIcon';
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
import DownloadIcon from 'mdi-react/DownloadIcon';
import EarthIcon from 'mdi-react/EarthIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import FileDocumentIcon from 'mdi-react/FileDocumentIcon';
import FileDownloadIcon from 'mdi-react/FileDownloadIcon';
import ForumIcon from 'mdi-react/ForumIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import HammerWrenchIcon from 'mdi-react/HammerWrenchIcon';
import HumanHandsupIcon from 'mdi-react/HumanHandsupIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import LoadingIcon from 'mdi-react/LoadingIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import MenuRightIcon from 'mdi-react/MenuRightIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import RadioboxBlankIcon from 'mdi-react/RadioboxBlankIcon';
import RadioboxMarkedIcon from 'mdi-react/RadioboxMarkedIcon';
import RedditIcon from 'mdi-react/RedditIcon';
import SlackIcon from 'mdi-react/SlackIcon';
import SortAscendingIcon from 'mdi-react/SortAscendingIcon';
import SortDescendingIcon from 'mdi-react/SortDescendingIcon';
import ThumbsUpIcon from 'mdi-react/ThumbsUpIcon';
import TrophyIcon from 'mdi-react/TrophyIcon';
import TwitterIcon from 'mdi-react/TwitterIcon';
import YoutubeIcon from 'mdi-react/YoutubeIcon';

import {getCustomClassNames} from 'utils/components';
import './Icon.scss';

// These names are camelCased versions of the names found in https://materialdesignicons.com/
export enum IconType {
  accountGroup,
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
  downloadIcon,
  earth,
  facebook,
  fileDocument,
  fileDownload,
  forum,
  github,
  hammerWrench,
  humanHandsUp,
  linkedin,
  loading,
  menu,
  menuRight,
  minus,
  plus,
  radioboxBlank,
  radioboxMarked,
  reddit,
  slack,
  sortAscending,
  sortDescending,
  thumbsUp,
  trophy,
  twitter,
  youtube,
}

interface ComponentProps {
  className?: string;
  disabled?: boolean;
  icon: IconType;
  onClick?(e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onKeyDown?(e?: React.KeyboardEvent<HTMLDivElement>): void;
  size?: number;
  totalSize?: number | 'unset';
  unfocusable?: boolean;
}

const Icon = forwardRef<HTMLDivElement, ComponentProps>(
  ({className, disabled = false, icon, onClick, onKeyDown, size, totalSize = 'unset', unfocusable = false}, ref) => {
    const iconProps = {
      size,
    };

    const renderIcon = (): ReactNode => {
      switch (icon) {
        case IconType.accountGroup:
          return <AccountGroupIcon {...iconProps} />;
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
        case IconType.plus:
          return <PlusIcon {...iconProps} />;
        case IconType.radioboxBlank:
          return <RadioboxBlankIcon {...iconProps} />;
        case IconType.radioboxMarked:
          return <RadioboxMarkedIcon {...iconProps} />;
        case IconType.reddit:
          return <RedditIcon {...iconProps} />;
        case IconType.slack:
          return <SlackIcon {...iconProps} />;
        case IconType.sortAscending:
          return <SortAscendingIcon {...iconProps} />;
        case IconType.sortDescending:
          return <SortDescendingIcon {...iconProps} />;
        case IconType.thumbsUp:
          return <ThumbsUpIcon {...iconProps} />;
        case IconType.trophy:
          return <TrophyIcon {...iconProps} />;
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

    const handleClick = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      if (disabled || !onClick) return;
      onClick(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (!onClick) return;

      if (e.key === 'Enter' && !disabled) {
        handleClick();
      }

      onKeyDown?.(e);
    };

    return (
      <div
        role="button"
        className={clsx('Icon', className, {
          'Icon--disabled': disabled,
          ...getCustomClassNames(className, '--disabled', disabled),
        })}
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        style={divStyle}
        tabIndex={tabIndex}
      >
        {renderIcon()}
      </div>
    );
  },
);

export default Icon;
