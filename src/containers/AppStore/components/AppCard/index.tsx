import React, {FC, useState} from 'react';
import {useHistory} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';
import {Avatar} from 'components';

import './AppCard.scss';

type Props = {
  bannerUrl: string;
  description: string;
  id: string;
  logoUrl: string;
  title: string;
  websiteUrl: string;
};

const AppCard: FC<Props> = ({bannerUrl, description, id, logoUrl, title, websiteUrl}) => {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const handleClickCard = (): void => {
    history.push(`/app-store/${id}`);
  };

  const handleVisitWebsite = (): void => {
    window.open(websiteUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="AppCard" role="button" onClick={handleClickCard} tabIndex={0}>
      <img alt={title} className="AppCard__banner" loading="lazy" src={bannerUrl} />
      <div className="AppCard__bottom-container">
        <Avatar className="AppCard__avatar" src={logoUrl} shape="square" size={56} />
        <div className="AppCard__details-container">
          <h1 className="AppCard__app-title">{title}</h1>
          <p className="AppCard__app-description">{description}</p>
          <div
            className="AppCard__app-website"
            role="button"
            onClick={handleVisitWebsite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
          >
            <span className="AppCard__app-website-text">Website</span>
            <Icon
              icon={isHovered ? IconType.arrowRight : IconType.chevronRight}
              size={isHovered ? 20 : 16}
              totalSize={isHovered ? 20 : 16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
