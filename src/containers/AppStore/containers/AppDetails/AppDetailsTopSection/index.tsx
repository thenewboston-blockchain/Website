import React, {FC, useState} from 'react';
import clsx from 'clsx';

import {Icon, IconType} from '@thenewboston/ui';
import {useHistory} from 'react-router';
import {Avatar, Container} from 'components';

import './AppDetailsTopSection.scss';

type Props = {
  className?: string;
  description: string;
  logoUrl: string;
  title: string;
  websiteUrl: string;
};

const AppDetailsTopSection: FC<Props> = ({className, description, logoUrl, title, websiteUrl}) => {
  const history = useHistory();
  const [isWebsiteHovered, setIsWebsiteHovered] = useState(false);
  const handleVisitWebsite = (): void => {
    window.open(websiteUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <Container className={clsx('AppDetailsTopSection', className)}>
      <div className="AppDetailsTopSection__back" onClick={() => history.push('/app-store')} role="button" tabIndex={0}>
        <Icon className="AppDetailsTopSection__back-icon" icon={IconType.chevronLeft} size={28} totalSize={28} />
        <span className="AppDetailsTopSection__back-text">Apps List</span>
      </div>
      <div className="AppDetailsTopSection__main">
        <Avatar className="AppDetailsTopSection__avatar" src={logoUrl} shape="square" size={104} />
        <div className="AppDetailsTopSection__details-container">
          <h1 className="AppDetailsTopSection__app-title">{title}</h1>
          <p className="AppDetailsTopSection__app-description">{description}</p>
          <div
            className="AppDetailsTopSection__app-website"
            role="button"
            onClick={handleVisitWebsite}
            onMouseEnter={() => setIsWebsiteHovered(true)}
            onMouseLeave={() => setIsWebsiteHovered(false)}
            tabIndex={0}
          >
            <span className="AppDetailsTopSection__app-website-text">{isWebsiteHovered ? websiteUrl : 'Website'}</span>
            <Icon
              icon={isWebsiteHovered ? IconType.arrowRight : IconType.chevronRight}
              size={isWebsiteHovered ? 20 : 16}
              totalSize={isWebsiteHovered ? 20 : 16}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AppDetailsTopSection;
