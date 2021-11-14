import React, {useState} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import {useHistory} from 'react-router';

import {ROUTES} from 'constants/routes';
import {SFC} from 'types/generic';

import * as S from './Styles';

type Props = {
  description: string;
  logoUrl: string;
  title: string;
  websiteUrl: string;
};

const AppDetailsTopSection: SFC<Props> = ({className, description, logoUrl, title, websiteUrl}) => {
  const history = useHistory();

  const [isWebsiteHovered, setIsWebsiteHovered] = useState(false);

  const handleVisitWebsite = (): void => {
    window.open(websiteUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <S.Background className={className}>
      <S.Container>
        <S.BackContainer onClick={() => history.push(ROUTES.apps)} role="button" tabIndex={0}>
          <S.BackIcon icon={IconType.chevronLeft} size={28} totalSize={28} />
          <S.BackText>Apps List</S.BackText>
        </S.BackContainer>
        <S.Main>
          <S.Avatar src={logoUrl} shape="square" size={104} />
          <S.DetailsContainer>
            <S.AppTitle>{title}</S.AppTitle>
            <S.AppTagline>{description}</S.AppTagline>
            <S.AppWebsiteContainer
              role="button"
              onClick={handleVisitWebsite}
              onMouseEnter={() => setIsWebsiteHovered(true)}
              onMouseLeave={() => setIsWebsiteHovered(false)}
              tabIndex={0}
            >
              <S.AppWebsiteText>{isWebsiteHovered ? websiteUrl : 'Website'}</S.AppWebsiteText>
              <Icon
                icon={isWebsiteHovered ? IconType.arrowRight : IconType.chevronRight}
                size={isWebsiteHovered ? 20 : 16}
                totalSize={isWebsiteHovered ? 20 : 16}
              />
            </S.AppWebsiteContainer>
          </S.DetailsContainer>
        </S.Main>
      </S.Container>
    </S.Background>
  );
};

export default AppDetailsTopSection;
