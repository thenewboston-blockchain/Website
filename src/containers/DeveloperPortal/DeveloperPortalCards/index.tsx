import React, {FC} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import {Button, Container} from 'components';
import {useHistory} from 'react-router';
import ArchitectureIcon from '../icons/ArchitectureIcon';
import ProjectsIcon from '../icons/ProjectsIcon';
import './DeveloperPortalCards.scss';

const DeveloperPortalCards: FC = () => {
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
            Our living whitepaper is a constantly evolving set of technical docs about thenewboston blockchain
            architecture, including its Governance model. This is a must-read for all developers on thenewboston
            blockchain.
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
            Earn coins by building apps, games, tools, and other software for thenewboston network. Learn how to submit
            your project proposal, or study how other community members structure their own projects.
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
};

export default DeveloperPortalCards;
