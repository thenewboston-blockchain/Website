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
    history.push(`/app-store/${id}`);
  };

  const handleVisitWebsite = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.stopPropagation(); // prevent from calling the click event at parent, i.e. clicking of card
    window.open(websiteUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <S.Container role="button" onClick={handleClickCard} tabIndex={0}>
      <S.Banner alt={title} className="AppCard__banner" loading="lazy" src={bannerUrl} />
      <S.BottomContainer className="AppCard__bottom-container">
        <S.DetailsContainer className="AppCard__details-container">
          <S.AppTitleDescriptionContainer className="AppCard__app-title-description-container">
            <S.AppTitle className="AppCard__app-title">{title}</S.AppTitle>
            <S.AppDescription className="AppCard__app-description">{description}</S.AppDescription>
          </S.AppTitleDescriptionContainer>
          <S.AppWebsite
            className="AppCard__app-website"
            role="button"
            onClick={handleVisitWebsite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
          >
            <S.AppWebsiteText className="AppCard__app-website-text">
              {isHovered ? websiteUrl : 'Website'}
            </S.AppWebsiteText>
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
