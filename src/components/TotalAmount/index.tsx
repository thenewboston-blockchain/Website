import React, {FC} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './TotalAmount.scss';

interface ComponentProps {
  amount: number;
  title: string;
  className?: string;
  dataTestId?: string;
}

const TotalAmount: FC<ComponentProps> = ({amount, className, title, dataTestId = 'totalAmount'}) => {
  return (
    <div data-testid={dataTestId} className={clsx('TotalAmount', className)}>
      <div className={clsx('TotalAmount__title', {...bemify(className, '__title')})}>{title}</div>
      <div className={clsx('TotalAmount__amount', {...bemify(className, '__amount')})}>{amount.toLocaleString()}</div>
    </div>
  );
};

export default TotalAmount;
