import React, {FC, ReactNode, useState} from 'react';

import {Container, Divider, PageTitle} from 'components';
import Measure from 'react-measure';
import TopLinks from '../TopLinks';
import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import './DeveloperPortalLayout.scss';

type Props = {
  children?: ReactNode;
  pageName: string;
};

const DeveloperPortalLayout: FC<Props> = ({children, pageName}) => {
  const [breadcrumbHeight, setBreadcrumbHeight] = useState(0);
  return (
    <>
      <PageTitle title={pageName} />
      <TopLinks />
      <Measure bounds onResize={(contentRect) => setBreadcrumbHeight(contentRect?.bounds?.height || 0)}>
        {({measureRef}) => (
          <div className="DeveloperPortalLayout__breadcrumb" ref={measureRef}>
            <Container>
              <Breadcrumb breadcrumbHeight={breadcrumbHeight} />
            </Container>
            <Divider />
          </div>
        )}
      </Measure>
      <Container>
        <div className="DeveloperPortalLayout__main-content">
          <div className="DeveloperPortalLayout__left-content">
            <SideMenu breadcrumbHeight={breadcrumbHeight} />
          </div>
          <div className="DeveloperPortalLayout__right-content">{children}</div>
        </div>
      </Container>
    </>
  );
};

export default DeveloperPortalLayout;
