import React, {FC} from 'react';

import './AdminLayout.scss';

interface ComponentProps {
  left: any;
  right: any;
  top: any;
}

export const AdminLayout: FC<ComponentProps> = ({left, right, top}) => {
  return (
    <div className="AdminLayout">
      <div className="top">{top}</div>
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  );
};

export default AdminLayout;
