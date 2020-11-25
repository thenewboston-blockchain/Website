import React, {FC, memo, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
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
          ...getCustomClassNames(className, '__bubble', true),
        })}
      >
        {number}
      </div>
      <div
        className={clsx('StepIndicator__text', {
          ...getCustomClassNames(className, '__text', true),
        })}
      >
        {text}
      </div>
    </div>
  );
};

export default memo(StepIndicator);
