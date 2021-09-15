import React from 'react';
import {SFC} from 'types/generic';

import * as S from './Styles';

interface ComponentProps {
  amount: number;
  title: string;
}

const TotalAmount: SFC<ComponentProps> = ({amount, className, title}) => {
  return (
    <S.Container className={className} data-testid="TotalAmount">
      <S.Title className={className && `${className}__title`} data-testid="TotalAmount__title">
        {title}
      </S.Title>
      <S.Amount className={className && `${className}__amount`} data-testid="TotalAmount__amount">
        {amount.toLocaleString()}
      </S.Amount>
    </S.Container>
  );
};

export default TotalAmount;
