import React, {FC, memo} from 'react';
import {PageTitle} from 'components';

import {getArticles} from 'utils/data';
import BlogHero from './BlogHero';
import RecentlyPosted from './RecentlyPosted';
import Subscribe from './Subscribe';

const articles = getArticles();
const Blog: FC = () => {
  return (
    <>
      <PageTitle title="blog" />
      <BlogHero />
      <RecentlyPosted articles={articles} />
      <Subscribe />
    </>
  );
};

export default memo(Blog);
