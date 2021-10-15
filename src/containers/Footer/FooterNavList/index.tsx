import React, {FC} from 'react';

import {A} from 'components';
import {Link} from 'react-router-dom';

import * as S from './Styles';

interface NavLink {
  isExternal?: boolean;
  title: React.ReactNode;
  url: string;
}

export interface FooterNavListProps {
  header: string;
  links: NavLink[];
}

const FooterNavList: FC<FooterNavListProps> = ({header, links}) => {
  return (
    <S.Container data-testid="FooterNavList">
      <S.Header>{header}</S.Header>
      {links.map((link) => (
        <S.Item key={link.url}>
          {link.isExternal ? (
            <S.ExternalLink href={link.url} newWindow={false}>
              {link.title}
            </S.ExternalLink>
          ) : (
            <S.InternalLink to={link.url}>{link.title}</S.InternalLink>
          )}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default FooterNavList;
