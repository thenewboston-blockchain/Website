import React, {ReactNode} from 'react';
import {SFC} from 'types/generic';

import * as S from './Styles';

export interface AuthContainerProps {
  children: ReactNode;
  errorMessage?: string;
  heading: string;
}

const AuthContainer: SFC<AuthContainerProps> = ({children, className, errorMessage, heading}) => {
  return (
    <S.Container className={className} data-testid="AuthContainer">
      <S.Heading>{heading}</S.Heading>
      {errorMessage && <S.Error data-testid="AuthContainer__error-message">{errorMessage}</S.Error>}
      {children}
    </S.Container>
  );
};

export default AuthContainer;
