import React, {FC, ReactNode, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import StyleGuideCss from './StyleGuideCss';
import StyleGuideReact from './StyleGuideReact';

const getPageContent = (chapter: string): ReactNode => {
  switch (chapter) {
    case 'react':
      return <StyleGuideReact />;
    case 'css':
      return <StyleGuideCss />;
    default:
      return <Redirect to="/style-guide/react" />;
  }
};

const StyleGuide: FC = () => {
  const {chapter} = useParams();
  const pageContent = useMemo(() => getPageContent(chapter), [chapter]);

  return <>{pageContent}</>;
};

export default StyleGuide;
