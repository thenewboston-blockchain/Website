/* eslint-disable react/jsx-props-no-spreading */

import React, {useMemo} from 'react';
import {SFC} from 'types/generic';

import * as S from './Styles';

type ContainerElement = 'div' | 'header' | 'main';

interface ContainerProps {
  element?: ContainerElement;
  dataTestId?: string;
  maxWidth?: number;
}

const Container: SFC<ContainerProps> = ({children, className, dataTestId, element = 'div', maxWidth = 1366}) => {
  const props = useMemo(
    () => ({
      className,
      'data-testid': dataTestId,
      style: {
        maxWidth,
      },
    }),
    [className, dataTestId, maxWidth],
  );

  switch (element) {
    case 'header': {
      return <S.Header {...props}>{children}</S.Header>;
    }
    case 'main': {
      return <S.Main {...props}>{children}</S.Main>;
    }
    default: {
      return <S.Container {...props}>{children}</S.Container>;
    }
  }
};

export default Container;
