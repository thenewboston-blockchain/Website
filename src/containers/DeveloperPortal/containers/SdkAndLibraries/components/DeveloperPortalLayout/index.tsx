import React, {FC, ReactNode, useEffect, useState} from 'react';

import {Container, Divider, PageTitle} from 'components';
import {NAVBAR_HEIGHT, LIVING_WHITEPAPER_TOP_LINKS_HEIGHT} from 'constants/offsets';
import Measure from 'react-measure';
import {scroller} from 'react-scroll';
import {useLocation} from 'react-router';
import TopLinks from '../TopLinks';
import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import './DeveloperPortalLayout.scss';

type Props = {
  children: (selectedLanguages: string[]) => ReactNode;
  pageName: string;
  approvedProjectUrls?: {
    title: string;
    url: string;
  }[];
  projectName?: string;
};

const TIMEOUT_DELAY = 200;

const DeveloperPortalLayout: FC<Props> = ({children, pageName}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const [breadcrumbHeight, setBreadcrumbHeight] = useState(56);
  const {hash} = useLocation();
  const TOTAL_OFFSET = NAVBAR_HEIGHT + LIVING_WHITEPAPER_TOP_LINKS_HEIGHT + breadcrumbHeight;

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

  const toggleLanguage = React.useCallback(
    (language: string) => {
      if (selectedLanguages.includes(language)) {
        setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
      } else {
        setSelectedLanguages([...selectedLanguages, language]);
      }
    },
    [selectedLanguages],
  );

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
            <SideMenu selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
          </div>
          <div className="DeveloperPortalLayout__right-content">{children(selectedLanguages)}</div>
        </div>
      </Container>
    </>
  );
};

export default DeveloperPortalLayout;
