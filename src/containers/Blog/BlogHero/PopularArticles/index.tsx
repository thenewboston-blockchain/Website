import React, {FC} from 'react';
import {Article as ArticleType} from 'types/blogs';

import Article from './Article';
import './PopularArticles.scss';

interface ArticlesProps {
  articles: ArticleType[];
}

const PopularArticles: FC<ArticlesProps> = ({articles}) => {
  return (
    <div className="PopularArticles">
      <h3 className="PopularArticles__header">Popular Articles</h3>
      {articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
};

export default PopularArticles;
