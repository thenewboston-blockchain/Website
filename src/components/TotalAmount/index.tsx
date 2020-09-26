import React, {FC} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './TotalAmount.scss';

interface ComponentProps {
  amount: number;
  className?: string;
  title: string;
}

const TotalAmount: FC<ComponentProps> = ({amount, className, title}) => {
  return (
    <div className={clsx('TotalAmount', className)}>
      <div className={clsx('TotalAmount__title', {...getCustomClassNames(className, '__title', true)})}>{title}</div>
      <div className={clsx('TotalAmount__amount', {...getCustomClassNames(className, '__amount', true)})}>
        {amount.toLocaleString()}
      </div>
    </div>
  );
};

export default TotalAmount;
