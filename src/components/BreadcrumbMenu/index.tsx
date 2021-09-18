import React, {ReactNode, useEffect, useState} from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import {useLocation} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {Shadow} from 'components';
import {SFC} from 'types/generic';

import * as S from './Styles';

interface ComponentProps {
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const BreadcrumbMenu: SFC<ComponentProps> = ({className, menuItems, pageName, sectionName}) => {
  const {pathname} = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pageName, pathname]);

  const ref = useOnclickOutside(
    () => {
      if (open) setOpen(false);
    },
    {
      ignoreClass: 'BreadcrumbMenu__bar',
    },
  );

  const renderBreadcrumbBar = (): ReactNode => {
    return (
      <S.BreadcrumbBar
        className="BreadcrumbMenu__bar"
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        data-testid="BreadcrumbMenu__bar"
      >
        <S.BreadcrumbNavigation data-testid="BreadcrumbMenu__navigation">
          {sectionName}
          <Icon icon={IconType.menuRight} size={24} />
          {pageName}
        </S.BreadcrumbNavigation>
        {renderToggle()}
      </S.BreadcrumbBar>
    );
  };

  const renderDropdownMenu = (): ReactNode => {
    if (!open) return null;
    return (
      <S.DropdownMenu ref={ref} data-testid="BreadcrumbMenu__dropdown-menu">
        <Shadow />
        {menuItems}
      </S.DropdownMenu>
    );
  };

  const renderToggle = (): ReactNode => {
    return (
      <S.ToggleArrowContainer data-testid="BreadcrumbMenu__toggle-container">
        <S.ToggleArrow isOpened={open} icon={IconType.chevronDown} size={24} />
      </S.ToggleArrowContainer>
    );
  };

  return (
    <div className={className} data-testid="BreadcrumbMenu">
      {renderBreadcrumbBar()}
      {renderDropdownMenu()}
    </div>
  );
};

export default BreadcrumbMenu;
