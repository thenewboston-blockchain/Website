import React, {FC, useState} from 'react';
import {useHistory} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';

import './AppCard.scss';

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
    <div className="AppCard" role="button" onClick={handleClickCard} tabIndex={0}>
      <img alt={title} className="AppCard__banner" loading="lazy" src={bannerUrl} />
      <div className="AppCard__bottom-container">
        <div className="AppCard__details-container">
          <div className="AppCard__app-title-description-container">
            <h1 className="AppCard__app-title">{title}</h1>
            <p className="AppCard__app-description">{description}</p>
          </div>
          <div
            className="AppCard__app-website"
            role="button"
            onClick={handleVisitWebsite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={0}
          >
            <span className="AppCard__app-website-text">{isHovered ? websiteUrl : 'Website'}</span>
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
