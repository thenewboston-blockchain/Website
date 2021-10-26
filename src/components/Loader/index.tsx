import React, {memo} from 'react';
import {IconType} from '@thenewboston/ui';

import {SFC} from 'types/generic';

import * as S from './Styles';

const Loader: SFC = ({className}) => {
  return <S.Loader className={className} icon={IconType.loading} size={15.35} dataTestId="Loader" />;
};

export default memo(Loader);
