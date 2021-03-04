import React, {FC} from 'react';
import {Helmet} from 'react-helmet-async';

export interface PageTitleProps {
  title: string;
  ogDescription?: string;
  ogImageUrl?: string;
  ogTitle?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  ogUrl?: string;
}

export const defaultOgDescription =
  'Learn to code, collaborate on projects, gain experience, build a community, and earn coins by contributing.';
export const defaultOgImageUrl = 'https://www.thenewboston.com/logo192.png';
export const defaultOgType = 'website';
export const defaultOgUrl = 'https://www.thenewboston.com/';

const PageTitle: FC<PageTitleProps> = ({
  title,
  ogDescription = defaultOgDescription,
  ogImageUrl = defaultOgImageUrl,
  ogTitle = `${title} | thenewboston`,
  ogType = defaultOgType,
  ogUrl = defaultOgUrl,
}) => {
  return (
    <Helmet>
      <title>{title} | thenewboston</title>
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default PageTitle;
