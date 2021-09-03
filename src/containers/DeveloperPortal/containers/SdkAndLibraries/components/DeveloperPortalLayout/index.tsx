import React, {FC, ReactNode, useState} from 'react';

import {Container, Divider, PageTitle} from 'components';
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

const DeveloperPortalLayout: FC<Props> = ({children, pageName}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

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
      <div className="DeveloperPortalLayout__breadcrumb">
        <Container>
          <Breadcrumb selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
        </Container>
        <Divider />
      </div>
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
