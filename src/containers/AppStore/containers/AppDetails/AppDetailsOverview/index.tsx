import React from 'react';

import {SFC} from 'types/generic';

import * as S from './Styles';

type Props = {
  className?: string;
  description: string;
};

const AppDetailsOverview: SFC<Props> = ({className, description}) => {
  return (
    <S.Container className={className}>
      <S.Content>
        <S.Title>Overview</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
};

export default AppDetailsOverview;
