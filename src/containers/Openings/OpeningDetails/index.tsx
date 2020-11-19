import React, {FC, ReactNode} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {A, Icon, IconType, MarketingButton} from 'components';

import {Opening} from 'types/openings';
import {SocialMedia} from 'types/social-media';

import './OpeningDetails.scss';

const customLinks = {
  [SocialMedia.facebook]: '',
  [SocialMedia.github]: '',
  [SocialMedia.linkedin]: 'https://www.linkedin.com/in/buckyroberts/',
  [SocialMedia.reddit]: 'https://www.reddit.com/message/compose?to=/r/thenewboston',
  [SocialMedia.slack]: '',
  [SocialMedia.twitter]: '',
  [SocialMedia.youtube]: '',
};

interface ComponentProps {
  opening: Opening;
}

const OpeningDetails: FC<ComponentProps> = ({opening}) => {
  const history = useHistory();
  const location = useLocation<{from?: string}>();

  const handleBackClick = (): void => {
    if (location.state?.from) {
      history.goBack();
      return;
    }

    history.replace(`/openings/${opening.category}`);
  };

  const renderApplicationMethodList = (): ReactNode => {
    const rows = opening.applicationMethods.map(({channel, note}) => (
      <div className="OpeningDetails__application-method-row" key={channel}>
        <MarketingButton
          className="OpeningDetails__MarketingButton"
          customLink={customLinks[channel]}
          website={channel}
        />
        {note && <span className="OpeningDetails__application-method-note">{note}</span>}
      </div>
    ));

    return (
      <>
        <div className="OpeningDetails__list-label">
          To apply, leave a message in the #intros channel with the position you are interested in!
        </div>
        <div className="OpeningDetails__application-method-container">{rows}</div>
      </>
    );
  };

  const renderContent = (): ReactNode => (
    <>
      <div className="OpeningDetails__position">{opening.position}</div>
      <div className="OpeningDetails__description">{opening.description}</div>
      {renderStringList(opening.responsibilities, 'Responsibilities')}
      {renderStringList(opening.technologyRequirements, 'Technology Requirements')}
      {renderReportsToList()}
      {renderStringList(opening.payNotes, 'Pay')}
      {renderApplicationMethodList()}
    </>
  );

  const renderReportsToList = (): ReactNode => {
    const listItems = opening.reportsTo.map(({githubUsername, name}) => (
      <li key={name}>
        {name}{' '}
        {githubUsername && (
          <>
            <span>-</span>{' '}
            <A className="OpeningDetails__A" href={`https://github.com/${githubUsername}`}>
              {githubUsername}
            </A>
          </>
        )}
      </li>
    ));
    return (
      <>
        <div className="OpeningDetails__list-label">Reports To</div>
        <ul className="OpeningDetails__ul">{listItems}</ul>
      </>
    );
  };

  const renderStringList = (listData: string[], listLabel: string): ReactNode => {
    return (
      <>
        <div className="OpeningDetails__list-label">{listLabel}</div>
        <ul className="OpeningDetails__ul">
          {listData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="OpeningDetails">
      <div className="OpeningDetails__back-container" onClick={handleBackClick} role="button" tabIndex={0}>
        <Icon className="OpeningDetails__back-icon" icon={IconType.arrowLeft} />
        <span className="OpeningDetails__back-text">Back</span>
      </div>
      {renderContent()}
    </div>
  );
};

export default OpeningDetails;
