import React, {FC, memo} from 'react';
import clsx from 'clsx';

import './StepIndicator.scss';
import {getCustomClassNames} from '../../utils/components';

interface ComponentProps {
  className?: string;
  number: number;
  text: string;
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
