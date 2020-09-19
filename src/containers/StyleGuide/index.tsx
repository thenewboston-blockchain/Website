import React, {FC, useEffect, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout} from 'components';
import {PageData, PageDataObject} from 'types/page-data';

import {GApageView} from 'utils/components';
import StyleGuideCss from './StyleGuideCss';
import StyleGuideReact from './StyleGuideReact';

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

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const StyleGuide: FC = () => {
  const {chapter} = useParams();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  useEffect(() => {
    GApageView('StyleGuide');
  }, []);

  return (
    <DashboardLayout pageName={name} sectionName="Style Guide">
      {content}
    </DashboardLayout>
  );
};

export default StyleGuide;
