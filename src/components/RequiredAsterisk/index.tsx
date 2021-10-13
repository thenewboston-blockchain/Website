import React, {memo} from 'react';
import {SFC} from 'types/generic';
import * as S from './Style';

const RequiredAsterisk: SFC = ({className}) => {
  return (
    <S.RequiredAsterisk data-testid="RequiredAsterisk" className={className}>
      *
    </S.RequiredAsterisk>
  );
};

export default memo(RequiredAsterisk);
