import React from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

type Props = {
  height?: number;
  percentage: number;
};

const ProgressBar: SFC<Props> = ({className, height, percentage}) => {
  return (
    <S.ProgressBar className={className} style={{height}}>
      <S.ProgressFilled
        style={{
          height,
          width: `${percentage}%`,
        }}
      />
    </S.ProgressBar>
  );
};

export default ProgressBar;
