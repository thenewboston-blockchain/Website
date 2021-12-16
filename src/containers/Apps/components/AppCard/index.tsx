import React, {FC} from 'react';
import {useHistory} from 'react-router';

import {ROUTES} from 'constants/routes';
import * as S from './Styles';

type Props = {
  thumbnailUrl: string;
  slug: string;
  title: string;
  category: string;
  thumbnailSize?: number;
};

const AppCard: FC<Props> = ({thumbnailUrl, slug, title, category, thumbnailSize = 280}) => {
  const history = useHistory();

  const handleClickCard = (): void => {
    history.push(`${ROUTES.apps}/${slug}`);
  };

  return (
    <S.Container role="button" onClick={handleClickCard} tabIndex={0}>
      <S.Thumbnail alt={title} loading="lazy" src={thumbnailUrl} size={thumbnailSize} />
      <S.BottomContainer>
        <S.AppTitle>{title}</S.AppTitle>
        <S.AppCategory>{category}</S.AppCategory>
      </S.BottomContainer>
    </S.Container>
  );
};

export default AppCard;
