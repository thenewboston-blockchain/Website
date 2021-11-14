import React, {ReactNode} from 'react';
import {SFC} from 'types/generic';

import PageTitle from 'components/PageTitle';

import * as S from './Styles';

export interface DashboardLayoutProps {
  children?: ReactNode;
  menuItems: ReactNode;
  pageName: string;
  sectionName: string;
}

const DashboardLayout: SFC<DashboardLayoutProps> = ({children, menuItems, pageName, sectionName}) => {
  return (
    <>
      <PageTitle title={`${sectionName}`} />
      <S.DashboardLayout>
        <S.DashboardBreadcrumbMenu menuItems={menuItems} pageName={pageName} sectionName={sectionName} />
        <S.DashboardLeftMenu data-testid="DashboardLayout__left-menu_test">{menuItems}</S.DashboardLeftMenu>
        <S.DashboardMainContent data-testid="DashboardLayout__main-content_test">{children}</S.DashboardMainContent>
      </S.DashboardLayout>
    </>
  );
};

export default DashboardLayout;
