import React, {FC, ReactNode, useState} from 'react';

interface ComponentProps {
  children: ReactNode;
  leftIcon: ReactNode;
  title: string;
}

const LeftMenuGroup: FC<ComponentProps> = ({children, leftIcon, title}) => {
  const [expanded, toggleExpanded] = useState(false);

  return (
    <div className="LeftMenuGroup">
      <div className={`toggle ${expanded ? 'expanded' : ''}`} onClick={() => toggleExpanded(!expanded)}>
        <div className="left-elements">
          {leftIcon}
          <span className="heavy">{title}</span>
        </div>
        <span className="material-icons arrow">keyboard_arrow_right</span>
      </div>
      <div className={`submenu ${expanded ? 'expanded' : ''}`}>{children}</div>
    </div>
  );
};

export default LeftMenuGroup;
