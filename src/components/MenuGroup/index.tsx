import React, {FC, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import clsx from 'clsx';

import {Icon, IconType} from 'components';
import {getFirstPathParam} from 'utils/urls';

import './MenuGroup.scss';

interface ComponentProps extends RouteComponentProps {
  title: string;
  urlBase: string;
  dataTestId?: string;
}

const MenuGroup: FC<ComponentProps> = ({children, dataTestId = 'MenuGroup', location, title, urlBase}) => {
  const [expanded, toggleExpanded] = useState(getFirstPathParam(location.pathname) === urlBase);

  return (
    <div className="MenuGroup" data-testid={dataTestId}>
      <button
        className={clsx('MenuGroup__toggle', {'MenuGroup__toggle--expanded': expanded})}
        onClick={() => toggleExpanded(!expanded)}
        data-testid="MenuGroup__toggle"
      >
        <Icon className="MenuGroup__toggle-arrow" icon={IconType.menuRight} size={24} />
        <div className="MenuGroup__title">{title}</div>
      </button>
      <div
        className={clsx('MenuGroup__submenu', {'MenuGroup__submenu--expanded': expanded})}
        data-testid="MenuGroup__submenu"
      >
        {children}
      </div>
    </div>
  );
};

export default withRouter(MenuGroup);
