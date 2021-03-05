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

export const defaultOg = {
  description:
    'Learn to code, collaborate on projects, gain experience, build a community, and earn coins by contributing.',
  imageUrl: 'https://www.thenewboston.com/logo192.png',
  type: 'website',
  url: 'https://www.thenewboston.com/',
};

const PageTitle: FC<PageTitleProps> = ({
  title,
  ogDescription = defaultOg.description,
  ogImageUrl = defaultOg.imageUrl,
  ogTitle = `${title} | thenewboston`,
  ogType = defaultOg.type,
  ogUrl = defaultOg.url,
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
