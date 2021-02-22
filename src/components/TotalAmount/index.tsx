import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './TotalAmount.scss';

interface ComponentProps {
  amount: number;
  className?: string;
  dataTestId?: string;
  locale?: string;
  title: string;
}

const TotalAmount: FC<ComponentProps> = ({amount, className, dataTestId = 'TotalAmount', locale = 'en-US', title}) => {
  return (
    <div data-testid={dataTestId} className={clsx('TotalAmount', className)}>
      <div className={clsx('TotalAmount__title', {...bemify(className, '__title')})}>{title}</div>
      <div className={clsx('TotalAmount__amount', {...bemify(className, '__amount')})}>
        {amount.toLocaleString(locale)}
      </div>
    </div>
  );
};

export default TotalAmount;
