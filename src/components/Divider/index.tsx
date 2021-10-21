import React from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

type Props = {
  type?: 'vertical' | 'horizontal';
};

const Divider: SFC<Props> = ({className, type = 'horizontal'}) => {
  return <S.Container className={className} type={type} />;
};

export default Divider;
