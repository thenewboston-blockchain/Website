import React from 'react';
import {SFC} from 'types/generic';

import * as S from './Styles';

type Props = {
  number: number;
  size?: number;
};

const Step: SFC<Props> = ({className, number, size = 40}) => {
  return (
    <S.Container className={className} size={size}>
      {number}
    </S.Container>
  );
};

export default Step;
