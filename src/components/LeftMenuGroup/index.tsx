import React, {FC, ReactNode, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

import {Icon, IconType} from 'components';
import {getFirstPathParam} from 'utils/urls';

import './LeftMenuGroup.scss';

interface ComponentProps extends RouteComponentProps {
  children: ReactNode;
  title: string;
  urlBase: string;
}

const LeftMenuGroup: FC<ComponentProps> = ({children, location, title, urlBase}) => {
  const [expanded, toggleExpanded] = useState(getFirstPathParam(location.pathname) === urlBase);

  return (
    <div className="LeftMenuGroup">
      <div
        className={`toggle ${expanded ? 'expanded' : ''}`}
        onClick={() => toggleExpanded(!expanded)}
        role="button"
        tabIndex={0}
      >
        <Icon className="react-icons arrow" icon={IconType.menuRight} size={24} />
        <span className="heavy">{title}</span>
      </div>
      <div className={`submenu ${expanded ? 'expanded' : ''}`}>{children}</div>
    </div>
  );
};

export default withRouter(LeftMenuGroup);
