import React from 'react';
import {useLocation} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {SFC} from 'types/generic';
import {NavigationItem} from 'types/navigation';

import * as S from './Styles';

export interface PaginationProps {
  navigationData: NavigationItem[];
}

const Pagination: SFC<PaginationProps> = ({className, navigationData}) => {
  const location = useLocation();

  const renderNextLink = () => {
    const index = navigationData.findIndex(({url}) => url === location.pathname);
    if (index === navigationData.length - 1) return null;
    const {name, url} = navigationData[index + 1];
    return (
      <S.PaginationNavLink to={url}>
        {name}
        <Icon icon={IconType.chevronRight} size={20} />
      </S.PaginationNavLink>
    );
  };

  const renderPreviousLink = () => {
    const index = navigationData.findIndex(({url}) => url === location.pathname);
    if (index === 0 || index === -1) return null;
    const {name, url} = navigationData[index - 1];
    return (
      <S.PaginationNavLink to={url}>
        <Icon icon={IconType.chevronLeft} size={20} />
        {name}
      </S.PaginationNavLink>
    );
  };

  return (
    <S.Pagination className={className} data-testid="Pagination">
      {renderPreviousLink()}
      {renderNextLink()}
    </S.Pagination>
  );
};

export default Pagination;
