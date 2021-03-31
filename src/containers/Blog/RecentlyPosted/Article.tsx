import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'components';
import {Article as ArticleType} from 'types/blogs';
import {slugify} from 'utils/urls';

import './RecentlyPosted.scss';

interface ArticleProps {
  article: ArticleType;
}
const Article: FC<ArticleProps> = ({article}) => {
  return (
    <Link
      className="RecentlyPosted__article-wrapper"
      to={`/blog/${encodeURIComponent(slugify(article.title, ' ', '-'))}`}
    >
      <div className="RecentlyPosted__article-banner">
        <img className="RecentlyPosted__article-banner-image" src={article.banner} alt="img" />
      </div>
      <div className="RecentlyPosted__article-content">
        <h3 className="RecentlyPosted__article-title">{article.title}</h3>
        <div className="RecentlyPosted__author-wrapper">
          <Avatar className="RecentlyPosted__author-avatar" size={30} src={article.author.avatar} />
          <span className="RecentlyPosted__author-name">by {article.author.name}</span>
        </div>
        <p className="RecentlyPosted__article-date">
          {article.datePosted}
          <span className="RecentlyPosted__article-time">{article.readTime}</span>
        </p>
      </div>
    </Link>
  );
};

export default Article;
