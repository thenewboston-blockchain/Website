import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';
import * as S from './Style';

const Shadow: SFC = ({className}) => <S.Shadow className={clsx('Shadow', className)} />;

export default Shadow;
