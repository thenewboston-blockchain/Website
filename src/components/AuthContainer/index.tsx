import React, {FC, ReactNode} from 'react';

import './AuthContainer.scss';

interface ComponentProps {
  children: ReactNode;
  heading: string;
}

const AuthContainer: FC<ComponentProps> = ({children, heading}) => {
  return (
    <div className="AuthContainer">
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default AuthContainer;
