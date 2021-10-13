import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';
import {bemify} from '@thenewboston/utils';
import * as S from './Styles';

type Props = {
  height?: number;
  percentage: number;
};

const ProgressBar: SFC<Props> = ({className, height, percentage}) => {
  return (
    <S.ProgressBarContainer className={className} height={height}>
      <S.ProgressBar className={clsx({...bemify(className, '--filled')})} height={height} percentage={percentage} />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
