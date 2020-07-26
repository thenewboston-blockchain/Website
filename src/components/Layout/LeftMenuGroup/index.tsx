import React, {FC, ReactNode, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface ComponentProps extends RouteComponentProps {
  children: ReactNode;
  leftIcon: ReactNode;
  title: string;
  urlBase: string;
}

const LeftMenuGroup: FC<ComponentProps> = ({children, leftIcon, location, title, urlBase}) => {
  const [expanded, toggleExpanded] = useState(location.pathname.includes(urlBase));

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

export default withRouter(LeftMenuGroup);
