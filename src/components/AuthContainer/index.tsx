import React, {FC, ReactNode} from 'react';

import './AuthContainer.scss';

export interface AuthContainerProps {
  children: ReactNode;
  errorMessage?: string;
  heading: string;
}

const AuthContainer: FC<AuthContainerProps> = ({children, errorMessage, heading}) => {
  return (
    <div className="AuthContainer" data-testid="AuthContainer">
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
