import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Author} from 'types/blogs';
import {slugify} from 'utils/urls';

import './PopularArticles.scss';

interface ComponentProps {
  article: {
    id?: number;
    title: string;
    banner: string;
    author: Author;
    datePosted: string;
    readTime: string;
  };
}
const Article: FC<ComponentProps> = ({article}) => {
  return (
    <div className="PopularArticles__article-wrapper">
      <div className="PopularArticles__article-banner">
        <Link to={`/blog/${encodeURIComponent(slugify(article.title, ' ', '-'))}`}>
          <img src={article.banner} alt="img" />
        </Link>
      </div>
      {/* <div className="PopularArticles__article-banner" /> */}
      <div className="PopularArticles__article-content">
        <Link to={`/blog/${encodeURIComponent(slugify(article.title, ' ', '-'))}`}>
          <h3 className="PopularArticles__article-title">{article.title}</h3>
        </Link>
        <p className="PopularArticles__article-user">by {article.author.name}</p>
        <p className="PopularArticles__article-date">
          {article.datePosted}
          <span className="PopularArticles__article-time">{article.readTime}</span>
        </p>
      </div>
    </div>
  );
};

export default Article;
