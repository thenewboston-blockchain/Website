import React from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

const Divider: SFC = ({className}) => {
  return <S.Container className={className} />;
};

export default Divider;
