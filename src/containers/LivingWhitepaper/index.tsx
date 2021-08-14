import React, {FC, useState} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import {Button, Divider} from 'components';
import {useHistory} from 'react-router';
import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import LivingWhitepaperIcon from './assets/LivingWhitepaperIcon.webp';
import LivingWhitepaperCover from './assets/LivingWhitepaperCover.webp';

import './LivingWhitepaper.scss';

const LivingWhitepaper: FC = () => {
  const history = useHistory();
  const [isPrincipalEntitiesTopicHovered, setIsPrincipalEntitiesTopicHovered] = useState(false);
  const [isPrincipalEventsTopicHovered, setIsPrincipalEventsTopicHovered] = useState(false);
  const [isArchitectureTopicHovered, setIsArchitectureTopicHovered] = useState(false);

  return (
    <DeveloperPortalLayout pageName="Living Whitepaper">
      <div className="LivingWhitepaper__hero">
        <div className="LivingWhitepaper__hero-title">
          <div className="LivingWhitepaper__hero-title-living">L I V I N G</div>
          <div className="LivingWhitepaper__hero-title-whitepaper">Whitepaper</div>
        </div>
        <img alt="Living whitepaper icon" className="LivingWhitepaper__hero-icon" src={LivingWhitepaperIcon} />
      </div>
      <div className="LivingWhitepaper__main">
        <div className="LivingWhitepaper__main-left">
          <div className="LivingWhitepaper__main-title">Living Whitepaper</div>
          <div className="LivingWhitepaper__main-description">
            This documentation outlines an efficient and scalable peer-to-peer consensus mechanism that allows for
            highly efficient transaction validation within a decentralized network.
          </div>
          <div className="LivingWhitepaper__main-buttons">
            <Button
              className="LivingWhitepaper__button-explore"
              onClick={() => history.push('/developer/whitepaper/principal-entities')}
            >
              Explore Document
            </Button>
            {/* TODO: remove when PDF is ready */}
            {/* <Button variant="outlined">Download PDF</Button> */}
          </div>
          <Divider />
          <div className="LivingWhitepaper__language-title">Language</div>
          <div className="LivingWhitepaper__language-description">
            thenewboston whitepaper is currently available in English Language. The community is working on other
            languages. Stay tuned!
          </div>
        </div>
        <div className="LivingWhitepaper__main-right">
          <img alt="Living whitepaper cover" className="LivingWhitepaper__cover-image" src={LivingWhitepaperCover} />
        </div>
      </div>
      <div className="LivingWhitepaper__topics">
        <div className="LivingWhitepaper__topics-title">
          <div className="LivingWhitepaper__topics-title--main">Topics</div>
          <div className="LivingWhitepaper__topics-title--side">In this document</div>
        </div>
        <div
          className="LivingWhitepaper__topic"
          onClick={() => history.push('/developer/whitepaper/principal-entities')}
          onFocus={() => {}}
          onMouseLeave={() => setIsPrincipalEntitiesTopicHovered(false)}
          onMouseOver={() => setIsPrincipalEntitiesTopicHovered(true)}
          role="button"
          tabIndex={0}
        >
          <div className="LivingWhitepaper__topic-title">
            Principal Entities on the Network
            {isPrincipalEntitiesTopicHovered && (
              <Icon className="LivingWhitepaper__topic-icon" icon={IconType.arrowRight} size={20} totalSize={24} />
            )}
          </div>
          <div className="LivingWhitepaper__topic-description">
            This documentation outlines an efficient and scalable peer-to-peer consensus mechanism that allows for
            highly efficient transaction validation within a decentralized network.
          </div>
        </div>
        <div
          className="LivingWhitepaper__topic"
          onClick={() => history.push('/developer/whitepaper/principal-events')}
          onFocus={() => {}}
          onMouseLeave={() => setIsPrincipalEventsTopicHovered(false)}
          onMouseOver={() => setIsPrincipalEventsTopicHovered(true)}
          role="button"
          tabIndex={0}
        >
          <div className="LivingWhitepaper__topic-title">
            Principal Events and Processes on the Network
            {isPrincipalEventsTopicHovered && (
              <Icon className="LivingWhitepaper__topic-icon" icon={IconType.arrowRight} size={20} totalSize={24} />
            )}
          </div>
          <div className="LivingWhitepaper__topic-description">
            Nodes register on the network through a Node Registration block. This block informs the network that there
            is an additional server on the network and includes their IP, a Network ID, and so on.
          </div>
        </div>
        <div
          className="LivingWhitepaper__topic"
          onClick={() => history.push('/developer/whitepaper/architecture')}
          onFocus={() => {}}
          onMouseLeave={() => setIsArchitectureTopicHovered(false)}
          onMouseOver={() => setIsArchitectureTopicHovered(true)}
          role="button"
          tabIndex={0}
        >
          <div className="LivingWhitepaper__topic-title">
            Architecture - Deep Dive
            {isArchitectureTopicHovered && (
              <Icon className="LivingWhitepaper__topic-icon" icon={IconType.arrowRight} size={20} totalSize={24} />
            )}
          </div>
          <div className="LivingWhitepaper__topic-description">
            All blocks follow the same general structure. This structure provides a clear description of change to one
            or more objects in the network, including both the original request and the resulting updates.
          </div>
        </div>
      </div>
      <Divider />
    </DeveloperPortalLayout>
  );
};

export default LivingWhitepaper;
