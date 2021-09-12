import React, {FC, useState} from 'react';
import {useHistory} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';
import * as S from './Styles';

type Props = {
  bannerUrl: string;
  description: string;
  id: string;
  title: string;
  websiteUrl: string;
};

const AppCard: FC<Props> = ({bannerUrl, description, id, title, websiteUrl}) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const handleClickCard = (): void => {
    history.push(`/arcade/${id}`);
  };

  const handleVisitWebsite = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation(); // prevent from calling the click event at parent, i.e. clicking of card
    window.open(websiteUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <S.Container role="button" onClick={handleClickCard} tabIndex={0}>
      <S.Banner alt={title} loading="lazy" src={bannerUrl} />
      <S.BottomContainer>
        <S.DetailsContainer>
          <S.AppTitleDescriptionContainer>
            <S.AppTitle>{title}</S.AppTitle>
            <S.AppDescription>{description}</S.AppDescription>
          </S.AppTitleDescriptionContainer>
          <S.AppWebsite
            role="button"
            onClick={handleVisitWebsite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
          >
            <S.AppWebsiteText>{isHovered ? websiteUrl : 'Website'}</S.AppWebsiteText>
            <Icon
              icon={isHovered ? IconType.arrowRight : IconType.chevronRight}
              size={isHovered ? 20 : 16}
              totalSize={isHovered ? 20 : 16}
            />
          </S.AppWebsite>
        </S.DetailsContainer>
      </S.BottomContainer>
    </S.Container>
  );
};

export default AppCard;
