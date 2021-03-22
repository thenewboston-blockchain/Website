/* eslint-disable react/no-danger */
import React, {FC, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';
import {A, Icon, IconType} from 'components';
import {SocialMedia} from 'types/social-media';

import './Article.scss';
import {slugify} from 'utils/urls';
import {getArticleByTitle} from 'utils/data';

// {
//   id: number;
//   banner: string;
//   user: string;
//   datePosted: string;
//   readTime: string;
//   body: string;
// };
interface RouteParams {
  slug: string;
}

const Article: FC = () => {
  const {slug} = useParams<RouteParams>();

  const [socailVisible, setSocialVisible] = useState(false);

  const toggleSocialVisible = () => setSocialVisible(!socailVisible);

  const article = useMemo(() => getArticleByTitle(decodeURIComponent(slugify(slug, '-', ' '))), [slug]);

  const socials = [
    {icon: SocialMedia.linkedin, url: ''},
    {icon: SocialMedia.facebook, url: 'https://www.facebook.com/sharer/sharer.php?u='},
    {icon: SocialMedia.twitter, url: 'https://twitter.com/intent/tweet?url='},
    {icon: SocialMedia.instagram, url: ''},
  ];

  const renderSocialMediaLinks = () =>
    socials.map((media) => (
      <A href={media.url + window.location.href}>
        <Icon icon={IconType[media.icon]} className="Article__SocialMediaLink" />
      </A>
    ));

  const renderSocialMediaLinksMobile = () =>
    socials.map((media) => (
      <div className="Article__SocialMediaLinkWrapper">
        <A href={media.url + window.location.href}>
          <Icon icon={IconType[media.icon]} className="Article__SocialMediaLinkMobile" />
        </A>
      </div>
    ));

  return (
    <>
      <div className="Article">
        <div className="Article__wrapper">
          <div className="Article__content">
            <div className="Article__header">
              <h1 className="Article__title">{article?.title}</h1>
              <div className="Article__author-wrapper">
                <div>
                  <img className="Article__author-avatar" src={article?.author.avatar} alt={article?.author.name} />
                  <p className="Article__user">by {article?.author.name}</p>
                </div>
                {/* Share btn */}
                <div style={{position: 'relative'}}>
                  <Icon
                    size={25}
                    icon={IconType.shareCircle}
                    className="Article__SocialMediaShareBtn"
                    onClick={() => toggleSocialVisible()}
                  />
                  {/* <div className="Article__likes-mobile">
                    <Icon size={25} icon={IconType.thumbsUp} className="Article__likes__thumbsUp" />
                    <span>1232</span>
                  </div> */}
                  <div className={`Article__social-mobile ${socailVisible && 'visible'}`}>
                    {renderSocialMediaLinksMobile()}
                  </div>
                </div>
              </div>
              <p className="Article__date">
                {article?.datePosted}
                <span className="Article__time">{article?.readTime}</span>
              </p>
            </div>
            {!article?.banner ? (
              <div className="Article__banner" style={{background: '#697386'}} />
            ) : (
              <div className="Article__banner">
                <img src={article?.banner} alt={article.title} />
              </div>
            )}
            <div className="Article__body" dangerouslySetInnerHTML={{__html: article?.content as string}} />
          </div>
        </div>
      </div>

      {/* Social Liks */}
      <div className="Article__Socials__wrapper">
        <div className="Article__Socials">
          <h3>Share to support thenewboston community</h3>
          <div className="Article__social-icons">{renderSocialMediaLinks()}</div>
        </div>
        <div className="Article__likes">
          <Icon size={25} icon={IconType.thumbsUp} className="Article__likes__thumbsUp" />
          <p>1232</p>
        </div>
      </div>
    </>
  );
};

export default Article;
