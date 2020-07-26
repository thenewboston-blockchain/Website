import React, {FC, ReactNode} from 'react';

import TopNav from '../TopNav';
import './LayoutBasic.scss';

interface ComponentProps {
  children: ReactNode;
}

export const LayoutBasic: FC<ComponentProps> = ({children}) => {
  return (
    <div className="LayoutBasic">
      <div className="LayoutBasic__top">
        <TopNav />
      </div>
      <div className="LayoutBasic__content">{children}</div>
    </div>
  );
};

export default LayoutBasic;
