import React, {forwardRef, HTMLAttributes, ReactNode, useCallback, useMemo} from 'react';

import {bemify} from '@thenewboston/utils';
import clsx from 'clsx';
import BenefitsIcon from './BenefitsIcon';
import IntegrationIcon from './IntegrationIcon';
import MilestonesIcon from './MilestonesIcon';
import OverviewIcon from './OverviewIcon';
import ProblemIcon from './ProblemIcon';
import RoadmapIcon from './RoadmapIcon';
import TargetIcon from './TargetIcon';
import TimelineIcon from './TimelineIcon';
import {CustomIconProps} from './types';

export enum ProjectIconType {
  Benefits = 'Benefits',
  Integration = 'Integration',
  Milestone = 'Milestone',
  Overview = 'Overview',
  Problem = 'Problem',
  Roadmap = 'Roadmap',
  Target = 'Target',
  Timeline = 'Timeline',
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional. Extra classNames you can pass. Storybook options: black, white, primary, secondary, tertiary, alert. */
  className?: string;
  /** Optional. identifies a DOM node for testing purposes. */
  dataTestId?: string;
  /** Optional. disabled onClick event if onClick is passed. */
  disabled?: boolean;
  /** Required. pass in the icon type, using the ProjectIconType enum. */
  icon: ProjectIconType;
  /** Optional. add an onClick event handler. */
  onClick?(e?: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  /** Optional. add an onKeyDown event handler. */
  onKeyDown?(e?: React.KeyboardEvent<HTMLDivElement>): void;
  /** Optional. size of the actual icon. */
  size?: number;
  /** Optional. size of the icon + paddings. Ignored if value is smaller than size.  */
  totalSize?: number | 'unset';
  /** Optional. disables focus. Only works if there is also an onClick handler.  */
  unfocusable?: boolean;
}

/* eslint-disable */
const ProjectIcon = forwardRef<HTMLDivElement, IconProps & CustomIconProps>(
  (
    {
      className,
      dataTestId,
      disabled = false,
      icon,
      onClick,
      onKeyDown,
      size,
      totalSize = 30,
      unfocusable = false,
      state,
    },
    ref,
  ) => {
    const divStyle = useMemo(() => {
      if (totalSize === 'unset') return {};
      const divSize = Math.max(size || 0, totalSize);
      return {height: divSize, width: divSize};
    }, [size, totalSize]);

    const tabIndex = useMemo(() => (unfocusable || disabled || !onClick ? undefined : 0), [
      disabled,
      onClick,
      unfocusable,
    ]);

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

    const renderIcon = useCallback((): ReactNode => {
      const iconBaseProps = {
        'data-testid': 'ProjectIcon__svg',
      };

      switch (icon) {
        case ProjectIconType.Benefits:
          return <BenefitsIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Integration:
          return <IntegrationIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Milestone:
          return <MilestonesIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Overview:
          return <OverviewIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Problem:
          return <ProblemIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Roadmap:
          return <RoadmapIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Target:
          return <TargetIcon {...iconBaseProps} size={size || 24} state={state} />;
        case ProjectIconType.Timeline:
          return <TimelineIcon {...iconBaseProps} size={size || 24} state={state} />;
        default:
          return null;
      }
    }, [icon, size, state]);

    return (
      <div
        className={clsx('ProjectIcon', className, {
          'ProjectIcon--button': !!onClick,
          'ProjectIcon--disabled': disabled,
          ...bemify(className, '--disabled', disabled),
        })}
        data-testid={dataTestId || 'ProjectIcon'}
        ref={ref}
        role={!!onClick ? 'button' : 'img'}
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

export {ProjectIcon};
