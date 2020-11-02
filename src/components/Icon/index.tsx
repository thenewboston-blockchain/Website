/* eslint-disable react/jsx-props-no-spreading */

import React, {forwardRef, ReactNode} from 'react';
import clsx from 'clsx';
import noop from 'lodash/noop';

import AccountGroupIcon from 'mdi-react/AccountGroupIcon';
import AlertCircleOutlineIcon from 'mdi-react/AlertCircleOutlineIcon';
import ArrowCollapseDownIcon from 'mdi-react/ArrowCollapseDownIcon';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronUpIcon from 'mdi-react/ChevronUpIcon';
import ContentCopyIcon from 'mdi-react/ContentCopyIcon';
import EarthIcon from 'mdi-react/EarthIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import FileDocumentIcon from 'mdi-react/FileDocumentIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import HumanHandsupIcon from 'mdi-react/HumanHandsupIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import LoadingIcon from 'mdi-react/LoadingIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import MenuRightIcon from 'mdi-react/MenuRightIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import RedditIcon from 'mdi-react/RedditIcon';
import SlackIcon from 'mdi-react/SlackIcon';
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
  arrowLeft,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  contentCopy,
  earth,
  facebook,
  fileDocument,
  github,
  humanHandsUp,
  linkedin,
  loading,
  menu,
  menuRight,
  minus,
  plus,
  reddit,
  slack,
  thumbsUp,
  trophy,
  twitter,
  youtube,
}

interface ComponentProps {
  className?: string;
  disabled?: boolean;
  icon: IconType;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
  size?: number | string;
}

const Icon = forwardRef<HTMLDivElement, ComponentProps>(({className, disabled = false, icon, onClick, size}, ref) => {
  const iconProps = {
    onClick: disabled ? noop : onClick,
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
      case IconType.arrowLeft:
        return <ArrowLeftIcon {...iconProps} />;
      case IconType.chevronDown:
        return <ChevronDownIcon {...iconProps} />;
      case IconType.chevronLeft:
        return <ChevronLeftIcon {...iconProps} />;
      case IconType.chevronRight:
        return <ChevronRightIcon {...iconProps} />;
      case IconType.chevronUp:
        return <ChevronUpIcon {...iconProps} />;
      case IconType.contentCopy:
        return <ContentCopyIcon {...iconProps} />;
      case IconType.earth:
        return <EarthIcon {...iconProps} />;
      case IconType.facebook:
        return <FacebookIcon {...iconProps} />;
      case IconType.fileDocument:
        return <FileDocumentIcon {...iconProps} />;
      case IconType.github:
        return <GithubIcon {...iconProps} />;
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
      case IconType.reddit:
        return <RedditIcon {...iconProps} />;
      case IconType.slack:
        return <SlackIcon {...iconProps} />;
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

  return (
    <div
      className={clsx('Icon', className, {
        'Icon--disabled': disabled,
        ...getCustomClassNames(className, '--disabled', disabled),
      })}
      ref={ref}
    >
      {renderIcon()}
    </div>
  );
});

export default Icon;
