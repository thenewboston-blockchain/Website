import React, {FC} from 'react';

import './TotalAmount.scss';
import clsx from 'clsx';

interface ComponentProps {
  amount: number;
  className?: string;
  title: string;
}

const TotalAmount: FC<ComponentProps> = ({amount, className, title}) => {
  return (
    <div className={clsx('TotalAmount', className)}>
      <div className="TotalAmount__title">{title}</div>
      <div className="TotalAmount__amount">{amount.toLocaleString()}</div>
    </div>
  );
};

export default TotalAmount;
