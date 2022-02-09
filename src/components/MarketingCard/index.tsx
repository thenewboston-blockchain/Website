import React from 'react';

import {SFC} from 'types/generic';
import {SocialMedia} from 'types/social-media';
import {socialMediaDescriptions, socialMediaHandles, socialMediaUrls} from 'utils/social-media';

import {MARKETING_CARD_CONFIG} from './config';

import * as S from './Styles';
import './sprite.scss';

export interface MarketingCardProps {
  customLink?: string;
  website: SocialMedia;
}

const MarketingCard: SFC<MarketingCardProps> = ({customLink, website}) => {
  const {height, spriteClassName, width} = MARKETING_CARD_CONFIG[website];
  return (
    <S.LinkContainer href={customLink || socialMediaUrls[website]}>
      <S.Image className={spriteClassName} data-testid="MarketingCard__img" style={{height, width}} />
      <S.Handle data-testid="MarketingCard__handle">{socialMediaHandles[website]}</S.Handle>
      <S.Description data-testid="MarketingCard__description">
        <S.DescriptionHandle data-testid="MarketingCard__description__handle">
          {socialMediaHandles[website]}
        </S.DescriptionHandle>{' '}
        {socialMediaDescriptions[website]}
      </S.Description>
    </S.LinkContainer>
  );
};

export default MarketingCard;
