import React, {FC, ReactNode, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {Icon, IconType} from 'components';

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
      <div
        className={`toggle ${expanded ? 'expanded' : ''}`}
        onClick={() => toggleExpanded(!expanded)}
        role="button"
        tabIndex={0}
      >
        <div className="left-elements">
          {leftIcon}
          <span className="heavy">{title}</span>
        </div>
        <Icon className="react-icons arrow" icon={IconType.keyboardArrowRight} size={24} />
      </div>
      <div className={`submenu ${expanded ? 'expanded' : ''}`}>{children}</div>
    </div>
  );
};

export default withRouter(LeftMenuGroup);
