import React, {FC, ReactNode} from 'react';

import './LeftMenu.scss';

interface ComponentProps {
  children: ReactNode;
}

export const LeftMenu: FC<ComponentProps> = ({children}) => {
  return <nav className="LeftMenu">{children}</nav>;
};

export default LeftMenu;
