/* eslint-disable react/jsx-props-no-spreading */

import React, {forwardRef, ReactNode} from 'react';
import clsx from 'clsx';
import noop from 'lodash/noop';

import AlertCircleOutlineIcon from 'mdi-react/AlertCircleOutlineIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ContentCopyIcon from 'mdi-react/ContentCopyIcon';
import LoadingIcon from 'mdi-react/LoadingIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import MenuRightIcon from 'mdi-react/MenuRightIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import ThumbsUpIcon from 'mdi-react/ThumbsUpIcon';

import {getCustomClassNames} from 'utils/components';
import './Icon.scss';

// These names are camelCased versions of the names found in https://materialdesignicons.com/
export enum IconType {
  alertCircleOutline,
  chevronDown,
  chevronLeft,
  chevronRight,
  contentCopy,
  loading,
  menu,
  menuRight,
  minus,
  plus,
  thumbsUp,
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
      case IconType.alertCircleOutline:
        return <AlertCircleOutlineIcon {...iconProps} />;
      case IconType.chevronDown:
        return <ChevronDownIcon {...iconProps} />;
      case IconType.chevronLeft:
        return <ChevronLeftIcon {...iconProps} />;
      case IconType.chevronRight:
        return <ChevronRightIcon {...iconProps} />;
      case IconType.contentCopy:
        return <ContentCopyIcon {...iconProps} />;
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
      case IconType.thumbsUp:
        return <ThumbsUpIcon {...iconProps} />;
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
