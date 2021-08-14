/* eslint-disable react/jsx-props-no-spreading */
import React, {FC, ReactNode, useCallback} from 'react';
import clsx from 'clsx';

import BenefitsIcon from './BenefitsIcon';
import IntegrationIcon from './IntegrationIcon';
import MilestonesIcon from './MilestonesIcon';
import OverviewIcon from './OverviewIcon';
import ProblemIcon from './ProblemIcon';
import TargetIcon from './TargetIcon';
import TimelineIcon from './TimelineIcon';
import {CustomIconProps} from './types';

export enum ProjectIconType {
  Benefits = 'Benefits',
  Integration = 'Integration',
  Milestone = 'Milestone',
  Overview = 'Overview',
  Problem = 'Problem',
  Target = 'Target',
  Timeline = 'Timeline',
}

export enum ProjectIconSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface ComponentProps extends CustomIconProps {
  className?: string;
  dataTestId?: string;
  icon: ProjectIconType;
  size: ProjectIconSize;
}

const ProjectIcon: FC<ComponentProps> = ({className, dataTestId, icon, size, state}) => {
  const renderIcon = useCallback((): ReactNode => {
    let sizeNumber: number;
    if (size === ProjectIconSize.small) {
      sizeNumber = 24;
    } else if (size === ProjectIconSize.medium) {
      sizeNumber = 32;
    } else {
      sizeNumber = 96;
    }

    const iconProps = {
      'data-testid': 'ProjectIcon__svg',
      size: sizeNumber,
      state,
    };

    switch (icon) {
      case ProjectIconType.Benefits:
        return <BenefitsIcon {...iconProps} />;
      case ProjectIconType.Integration:
        return <IntegrationIcon {...iconProps} />;
      case ProjectIconType.Milestone:
        return <MilestonesIcon {...iconProps} />;
      case ProjectIconType.Overview:
        return <OverviewIcon {...iconProps} />;
      case ProjectIconType.Problem:
        return <ProblemIcon {...iconProps} />;
      case ProjectIconType.Target:
        return <TargetIcon {...iconProps} />;
      case ProjectIconType.Timeline:
        return <TimelineIcon {...iconProps} />;
      default:
        return null;
    }
  }, [icon, size, state]);

  return (
    <div className={clsx('ProjectIcon', className)} data-testid={dataTestId || 'ProjectIcon'}>
      {renderIcon()}
    </div>
  );
};

export default ProjectIcon;
