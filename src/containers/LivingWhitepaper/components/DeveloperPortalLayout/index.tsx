import React from 'react';

import {Container, Divider, PageTitle} from 'components';
import TopLinks from '../TopLinks';
import Breadcrumb from '../Breadcrumb';

import './DeveloperPortalLayout.scss';

type Props = {
  children?: React.ReactNode;
  pageName: string;
};

const DeveloperPortalLayout = ({children, pageName}: Props) => {
  return (
    <>
      <PageTitle title={pageName} />
      <TopLinks />
      <Container>
        <Breadcrumb />
      </Container>
      <Divider />
      <Container>
        <div className="DeveloperPortalLayout__main-content">
          <div className="DeveloperPortalLayout__left-content">sidemenu</div>
          <div className="DeveloperPortalLayout__right-content">{children}</div>
        </div>
      </Container>
    </>
  );
};

export default DeveloperPortalLayout;
