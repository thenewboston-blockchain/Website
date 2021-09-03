import React, {FC, ReactNode, useEffect, useState} from 'react';

import {Container, Divider, PageTitle} from 'components';
import {NAVBAR_HEIGHT, TOP_LINKS_HEIGHT} from 'constants/offsets';
import Measure from 'react-measure';
import {scroller} from 'react-scroll';
import {useLocation} from 'react-router';
import TopLinks from '../TopLinks';
import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import './DeveloperPortalLayout.scss';

type Props = {
  children?: ReactNode;
  pageName: string;
  approvedProjectUrls?: {
    title: string;
    url: string;
  }[];
  projectName?: string;
};

const TIMEOUT_DELAY = 200;

const DeveloperPortalLayout: FC<Props> = ({approvedProjectUrls, children, pageName, projectName}) => {
  const [breadcrumbHeight, setBreadcrumbHeight] = useState(56);
  const {hash} = useLocation();
  const TOTAL_OFFSET = NAVBAR_HEIGHT + TOP_LINKS_HEIGHT + breadcrumbHeight;

  useEffect(() => {
    // hack: scroll to the correct position based on hash when page reloads
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.slice(1), {
          ignoreCancelEvents: true,
          offset: -TOTAL_OFFSET,
        });
      }, TIMEOUT_DELAY);
    }
    // eslint-disable-next-line
  }, [TOTAL_OFFSET]);
  return (
    <>
      <PageTitle title={pageName} />
      <TopLinks />
      <Measure bounds onResize={(contentRect) => setBreadcrumbHeight(contentRect?.bounds?.height || 0)}>
        {({measureRef}) => (
          <div className="DeveloperPortalLayout__breadcrumb" ref={measureRef}>
            <Container>
              <Breadcrumb
                approvedProjectUrls={approvedProjectUrls}
                breadcrumbHeight={breadcrumbHeight}
                projectName={projectName}
              />
            </Container>
            <Divider />
          </div>
        )}
      </Measure>
      <Container>
        <div className="DeveloperPortalLayout__main-content">
          <div className="DeveloperPortalLayout__left-content">
            <SideMenu approvedProjectUrls={approvedProjectUrls} breadcrumbHeight={breadcrumbHeight} />
          </div>
          <div className="DeveloperPortalLayout__right-content">{children}</div>
        </div>
      </Container>
    </>
  );
};

export default DeveloperPortalLayout;
