import React from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import {Button, Container} from 'components';
import {useHistory} from 'react-router';
import ArchitectureIcon from '../icons/ArchitectureIcon';
import ProjectsIcon from '../icons/ProjectsIcon';
import './DeveloperPortalCards.scss';

export default function DeveloperPortalCards() {
  const history = useHistory();

  return (
    <div className="DeveloperPortalCards">
      <Container className="DeveloperPortalCards__container">
        <div className="DeveloperPortalCards__card">
          <div className="DeveloperPortalCards__card-icon">
            <ArchitectureIcon size={36} />
          </div>
          <div className="DeveloperPortalCards__card-title">Living Whitepaper</div>
          <div className="DeveloperPortalCards__card-description">
            Lorm Ipsun dolor sit Lorm Ipsun dolor sitLorm Ipsun dolor sit,dolor sitLorm Ipsun dolor sit,dolor sit
          </div>
          <Button
            className="DeveloperPortalCards__card-button"
            variant="outlined"
            onClick={() => history.push('/developer/whitepaper')}
          >
            Learn More
            <Icon icon={IconType.chevronRight} size={16} />
          </Button>
        </div>
        <div className="DeveloperPortalCards__card">
          <div className="DeveloperPortalCards__card-icon">
            <ProjectsIcon size={36} />
          </div>
          <div className="DeveloperPortalCards__card-title">Projects</div>
          <div className="DeveloperPortalCards__card-description">
            Lorm Ipsun dolor sit Lorm Ipsun dolor sitLorm Ipsun dolor sit,dolor sitLorm Ipsun dolor sit,dolor sit
          </div>
          <Button
            className="DeveloperPortalCards__card-button"
            variant="outlined"
            onClick={() => history.push('/projects')}
          >
            Learn More
            <Icon icon={IconType.chevronRight} size={16} />
          </Button>
        </div>
      </Container>
    </div>
  );
}
