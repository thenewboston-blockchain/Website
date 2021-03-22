/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import './ActiveArticle.scss';

import {Article as ArticleType} from 'types/blogs';
import {sortByLatest, getArticleByTitle} from 'utils/data';
import {slugify} from 'utils/urls';

interface ArticleProps {
  articles: ArticleType[];
}

interface RouteParams {
  slug: string;
}

interface CurrentArticleProps {
  currentArticle: ArticleType[];
}
const ActiveArticle: FC<ArticleProps> = ({articles}) => {
  const currentArticle = sortByLatest(articles);
  const format = new Date(currentArticle.datePosted);

  return (
    <Link to={`/blog/${encodeURIComponent(slugify(currentArticle.title, ' ', '-'))}`} className="ActiveArticle">
      <div
        style={{background: `url(${currentArticle.banner})`, backgroundSize: 'cover', height: '100%', width: '100%'}}
      >
        <div className="ActiveArticle__banner-overlay" />
        <div className="ActiveArticle__container">
          <Link to={`/blog/${encodeURIComponent(slugify(currentArticle.title, ' ', '-'))}`}>
            <h3 className="ActiveArticle__title">{currentArticle.title}</h3>
          </Link>
          <p className="ActiveArticle__user">{currentArticle.author.name}</p>
          <p className="ActiveArticle__date">
            {format.toDateString()}
            <span className="ActiveArticle__time">{currentArticle.readTime}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ActiveArticle;
