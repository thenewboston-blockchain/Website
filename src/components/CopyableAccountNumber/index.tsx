import React from 'react';

import {SFC} from 'types/generic';

import * as S from './Styles';

interface ComponentProps {
  accountNumber: string;
  isCopyButtonAtBottom?: boolean;
}

const CopyableAccountNumber: SFC<ComponentProps> = ({accountNumber, className}) => {
  return (
    <S.Container className={className} data-testid="CopyableAccountNumber">
      <S.TopContainer>
        <S.Label>Account Number</S.Label>
      </S.TopContainer>
      <S.AccountNumber>{accountNumber}</S.AccountNumber>
    </S.Container>
  );
};

export default CopyableAccountNumber;
