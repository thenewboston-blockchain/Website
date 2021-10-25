import React from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './TotalAmount.scss';
import * as S from './Styles';

interface ComponentProps {
  amount: number;
  title: string;
}

const TotalAmount: SFC<ComponentProps> = ({amount, className, title}) => {
  return (
    <S.TotalAmount className={clsx(className)} data-testid="TotalAmount">
      <S.TotalAmount className={clsx({...bemify(className, '__title')})} data-testid="TotalAmount__title">
        {title}
      </S.TotalAmount>
      <S.TotalAmount className={clsx({...bemify(className, '__amount')})} data-testid="TotalAmount__amount">
        {amount.toLocaleString()}
      </S.TotalAmount>
    </S.TotalAmount>
  );
};

export default TotalAmount;
