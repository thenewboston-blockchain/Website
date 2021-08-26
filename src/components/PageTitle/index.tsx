import React from 'react';
import {Helmet} from 'react-helmet-async';
import {SFC} from 'types/generic';

export interface PageTitleProps {
  ogDescription?: string;
  ogImageUrl?: string;
  ogTitle?: string;
  ogType?: 'website' | 'article' | 'profile' | 'book';
  ogUrl?: string;
  title: string;
}

export const defaultOg = {
  description:
    'Learn to code, collaborate on projects, gain experience, build a community, and earn coins by contributing.',
  imageUrl: 'https://www.thenewboston.com/logo192.png',
  type: 'website',
  url: 'https://www.thenewboston.com/',
};

const PageTitle: SFC<PageTitleProps> = ({
  ogDescription = defaultOg.description,
  ogImageUrl = defaultOg.imageUrl,
  ogTitle,
  ogType = defaultOg.type,
  ogUrl = defaultOg.url,
  title,
}) => {
  const titleToUse = `${title} | thenewboston`;
  const ogTitleToUse = ogTitle || titleToUse;
  return (
    <Helmet>
      <title>{titleToUse}</title>
      <meta name="description" property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:title" content={ogTitleToUse} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
    </Helmet>
  );
};

export default PageTitle;
