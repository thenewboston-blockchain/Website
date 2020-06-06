import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import {getChapterContent} from './docs';
import './Docs.scss';

const Docs = () => {
  const {chapter: chapterParam} = useParams();
  const chapter = parseInt(chapterParam, 10);
  const chapterContent = useMemo(() => getChapterContent(chapter), [chapter]);

  return <div className="Docs">{chapterContent}</div>;
};

export default Docs;
