import React, {FC} from 'react';
import {getArticles, getPopularArticles} from 'utils/data';
import {Article} from 'types/blogs';
import ActiveArticle from './ActiveArticle';
import PopularArticles from './PopularArticles';

import './BlogHero.scss';

const articles = getArticles();
const popularArticles: Article[] = getPopularArticles();

const BlogHero: FC = () => {
  return (
    <div className="BlogHero">
      <div className="BlogHero__content-container">
        <div className="BlogHero__article-container">
          <ActiveArticle articles={articles} />
          <PopularArticles articles={popularArticles} />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
