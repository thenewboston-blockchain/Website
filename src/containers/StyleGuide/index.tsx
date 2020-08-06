import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import GuideMenuItems from 'components/GuideMenuItems';
import {PageData, PageDataObject} from 'types/page-data';

import StyleGuideCss from './StyleGuideCss';
import StyleGuideReact from './StyleGuideReact';

const getPageData = (chapter: string): PageData => {
  const defaultPageData: PageData = {
    content: <Redirect to="/style-guide/react" />,
    name: '',
  };

  const pageData: PageDataObject = {
    css: {
      content: <StyleGuideCss />,
      name: 'CSS / SASS',
    },
    react: {
      content: <StyleGuideReact />,
      name: 'React / JSX',
    },
  };

  return pageData[chapter] || defaultPageData;
};

const StyleGuide: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageData(chapter).content, [chapter]);
  const pageName = useMemo(() => getPageData(chapter).name, [chapter]);

  return (
    <DashboardLayout menuItems={<GuideMenuItems />} pageName={pageName} sectionName="Style Guide">
      {pageContent}
    </DashboardLayout>
  );
};

export default StyleGuide;
