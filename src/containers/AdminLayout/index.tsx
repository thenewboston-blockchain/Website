import React, {FC, ReactNode, useState, ReactElement} from 'react';

import './AdminLayout.scss';

interface ComponentProps {
  left: ReactNode;
  right: ReactNode;
  top: ReactElement;
}



export const AdminLayout: FC<ComponentProps> = ({left, right, top}) => {

  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);

  const handleEscape = (e: any) => {
    console.log(e);
    if (e.key === 'Escape') {
      close();
    }
  }

  const open = () => {
    window.addEventListener('keydown', handleEscape);
    setLeftMenuOpen(true);
  };

  const close = () => {
    window.removeEventListener('keydown', handleEscape);
    setLeftMenuOpen(false);
  };

  return (
    <div className="AdminLayout">
      <div className={`scrim ${ isLeftMenuOpen ? '' : 'hidden'}`} onClick={() => close()}></div>
      <div className="top">{React.cloneElement(top, { open })}</div>
      <div className={`left ${ isLeftMenuOpen ? 'isOpen' : '' }`}>{left}</div>
      <div className="right">{right}</div>
    </div>
  );
};

export default AdminLayout;
