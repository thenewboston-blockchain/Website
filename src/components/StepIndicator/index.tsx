import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './StepIndicator.scss';

interface ComponentProps {
  className?: string;
  number: number;
  text: ReactNode;
}

const StepIndicator: FC<ComponentProps> = ({className, number, text}) => {
  return (
    <div className={clsx('StepIndicator', className)}>
      <div
        className={clsx('StepIndicator__bubble', {
          ...bemify(className, '__bubble'),
        })}
      >
        {number}
      </div>
      <div
        className={clsx('StepIndicator__text', {
          ...bemify(className, '__text'),
        })}
      >
        {text}
      </div>
    </div>
  );
};

export default memo(StepIndicator);
