import React from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './TotalAmount.scss';

interface ComponentProps {
  amount: number;
  title: string;
}

const TotalAmount: SFC<ComponentProps> = ({amount, className, title}) => {
  return (
    <div className={clsx('TotalAmount', className)} data-testid="TotalAmount">
      <div className={clsx('TotalAmount__title', {...bemify(className, '__title')})} data-testid="TotalAmount__title">
        {title}
      </div>
      <div
        className={clsx('TotalAmount__amount', {...bemify(className, '__amount')})}
        data-testid="TotalAmount__amount"
      >
        {amount.toLocaleString()}
      </div>
    </div>
  );
};

export default TotalAmount;
