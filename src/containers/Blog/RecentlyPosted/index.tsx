/* eslint-disable react/jsx-props-no-spreading */
import React, {FC} from 'react';
import {Article as ArticleType} from 'types/blogs';
import Article from './Article';
import Slider from './Slider';
import './RecentlyPosted.scss';

interface ArticlesProps {
  articles: ArticleType[];
}
const sliderProps = {
  maxVisibleSlides: 3,
  pageTransition: 850,
  slideMargin: 5,
  zoomFactor: 1,
};

const RecentlyPosted: FC<ArticlesProps> = ({articles}) => {
  return (
    <div className="RecentlyPosted">
      <div className="RecentlyPosted__content-container">
        <h3 className="RecentlyPosted__header">Recently Posted</h3>
        <div className="RecentlyPosted__article">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <div className="RecentlyPosted__slider-container">
            <Slider {...sliderProps}>
              {articles.map((article) => (
                <Article key={article.title} article={article} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPosted;
