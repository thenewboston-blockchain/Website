import React, {FC} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {NavigationItem} from 'types/navigation';
import './Pagination.scss';

export interface PaginationProps {
  navigationData: NavigationItem[];
}

const Pagination: FC<PaginationProps> = ({navigationData}) => {
  const location = useLocation();

  const renderNextLink = () => {
    const index = navigationData.findIndex(({url}) => url === location.pathname);
    if (index === navigationData.length - 1) return null;
    const {name, url} = navigationData[index + 1];
    return (
      <NavLink className="Pagination__a" to={url}>
        {name}
        <Icon icon={IconType.chevronRight} size={20} />
      </NavLink>
    );
  };

  const renderPreviousLink = () => {
    const index = navigationData.findIndex(({url}) => url === location.pathname);
    if (index === 0 || index === -1) return null;
    const {name, url} = navigationData[index - 1];
    return (
      <NavLink className="Pagination__a" to={url}>
        <Icon icon={IconType.chevronLeft} size={20} />
        {name}
      </NavLink>
    );
  };

  return (
    <div className="Pagination" data-testid="Pagination">
      {renderPreviousLink()}
      {renderNextLink()}
    </div>
  );
};

export default Pagination;
