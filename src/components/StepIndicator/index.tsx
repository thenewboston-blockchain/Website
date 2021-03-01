import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './StepIndicator.scss';

export interface StepIndicatorProps {
  className?: string;
  number: number;
  text: ReactNode;
}

const StepIndicator: FC<StepIndicatorProps> = ({className, number, text}) => {
  return (
    <div className={clsx('StepIndicator', className)} data-testid="StepIndicator">
      <div
        className={clsx('StepIndicator__bubble', {
          ...bemify(className, '__bubble'),
        })}
        data-testid="StepIndicator__bubble"
      >
        {number}
      </div>
      <div
        className={clsx('StepIndicator__text', {
          ...bemify(className, '__text'),
        })}
        data-testid="StepIndicator__text"
      >
        {text}
      </div>
    </div>
  );
};

export default memo(StepIndicator);
