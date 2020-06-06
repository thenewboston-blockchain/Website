import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';

import {getChapterContent} from './docs';
import './Home.scss';

const Home = () => {
  const {chapter: chapterParam} = useParams();
  const chapter = parseInt(chapterParam, 10);
  const chapterContent = useMemo(() => getChapterContent(chapter), [chapter]);

  return <div className="Home">{chapterContent}</div>;
};

export default Home;
