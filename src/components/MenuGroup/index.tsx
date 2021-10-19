import React, {useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {IconType} from '@thenewboston/ui';

import {SFC} from 'types/generic';
import {getFirstPathParam, getFirstThreePathParams} from 'utils/urls';

import * as S from './Styles';

interface ComponentProps extends RouteComponentProps {
  title: string;
  urlBase: string;
  role?: string;
}

const MenuGroup: SFC<ComponentProps> = ({children, role, location, title, urlBase}) => {
  const [expanded, toggleExpanded] = useState(
    getFirstPathParam(location.pathname) === urlBase || getFirstThreePathParams(location.pathname) === urlBase,
  );

  return (
    <div data-testid="MenuGroup" role={role}>
      <S.Toggle expanded={expanded} onClick={() => toggleExpanded(!expanded)} data-testid="MenuGroup__toggle">
        <S.ToggleArrow expanded={expanded} icon={IconType.menuRight} size={24} />
        <S.Title className="MenuGroup__title">{title}</S.Title>
      </S.Toggle>
      <S.Submenu expanded={expanded} data-testid="MenuGroup__submenu">
        {children}
      </S.Submenu>
    </div>
  );
};

export default withRouter(MenuGroup);
