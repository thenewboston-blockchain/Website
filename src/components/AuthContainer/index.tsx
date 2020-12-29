import React, {FC, ReactNode} from 'react';

import './AuthContainer.scss';

interface ComponentProps {
  children: ReactNode;
  errorMessage?: string;
  heading: string;
}

const AuthContainer: FC<ComponentProps> = ({children, errorMessage, heading}) => {
  return (
    <div className="AuthContainer">
      <h2>{heading}</h2>
      {errorMessage && <div className="AuthContainer__error-message">{errorMessage}</div>}
      {children}
    </div>
  );
};

export default AuthContainer;
