import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './AuthContainer.scss';

export interface AuthContainerProps {
  children: ReactNode;
  errorMessage?: string;
  heading: string;
}

const AuthContainer: SFC<AuthContainerProps> = ({children, className, errorMessage, heading}) => {
  return (
    <div className={clsx('AuthContainer', className)} data-testid="AuthContainer">
      <h2>{heading}</h2>
      {errorMessage && (
        <div className="AuthContainer__error-message" data-testid="AuthContainer__error-message">
          {errorMessage}
        </div>
      )}
      {children}
    </div>
  );
};

export default AuthContainer;
