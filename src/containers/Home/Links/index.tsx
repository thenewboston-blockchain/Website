import React from 'react';
import {useHistory} from 'react-router';

import {EmojiIcon, EmojiType} from 'components';
import {ROUTES, URLS} from 'constants/routes';
import {useWindowDimensions} from 'hooks';
import breakpoints from 'styles/breakpoints';

import * as S from './Styles';

const Links = () => {
  const history = useHistory();
  const {width} = useWindowDimensions();

  const items = [
    {
      description: 'Chat with our community',
      emoji: EmojiType.Discord,
      emojiBgColor: '#4F52FF',
      isExternal: true,
      title: 'Discord',
      url: URLS.discord,
    },
    {
      description: 'Learn more about us',
      emoji: EmojiType.ThoughtBalloon,
      emojiBgColor: '#FFB802',
      isExternal: false,
      title: 'FAQ',
      url: ROUTES.faq,
    },
    {
      description: 'Stay updated with us',
      emoji: EmojiType.Newspaper,
      emojiBgColor: '#2DA15D',
      isExternal: true,
      title: 'Blog',
      url: URLS.blog,
    },
    {
      description: 'Send us a direct email',
      emoji: EmojiType.Mail,
      emojiBgColor: '#0085FF',
      isExternal: true,
      title: 'Contact Us',
      url: URLS.contact,
    },
  ];

  const getEmojiContainerSize = () => {
    if (width > parseInt(breakpoints.large, 10)) {
      return 176;
    }
    return 136;
  };

  const getEmojiSize = () => {
    if (width > parseInt(breakpoints.large, 10)) {
      return 64;
    }
    return 48;
  };

  const navigate = (isExternal: boolean, url: string) => {
    if (isExternal) {
      const target = url.includes('mailto:') ? '_self' : '_blank';
      window.open(url, target, 'noreferrer noopener');
    } else {
      history.push(url);
    }
  };

  return (
    <S.Container>
      {items.map((item) => (
        <S.Item key={item.title} role="button" tabIndex={0} onClick={() => navigate(item.isExternal, item.url)}>
          <EmojiIcon
            emoji={item.emoji}
            size={getEmojiContainerSize()}
            emojiSize={getEmojiSize()}
            color={item.emojiBgColor}
          />
          <S.ItemTitle>{item.title}</S.ItemTitle>
          <S.ItemDescription>{item.description}</S.ItemDescription>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Links;
