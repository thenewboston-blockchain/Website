import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {A, MarketingButton} from 'components';

import {ApplicationMethod, Opening} from 'types/openings';
import {SocialMedia} from 'types/social-media';

import './OpeningDetails.scss';

const customLinks = {
  [SocialMedia.facebook]: '',
  [SocialMedia.github]: '',
  [SocialMedia.linkedin]: 'https://www.linkedin.com/in/buckyroberts/',
  [SocialMedia.reddit]: 'https://www.reddit.com/message/compose?to=/r/thenewboston',
  [SocialMedia.slack]: '',
  [SocialMedia.twitter]: '',
};

interface ComponentProps {
  opening: Opening;
}

const OpeningDetails: FC<ComponentProps> = ({opening}) => {
  const renderApplicationMethodList = () => {
    const rows = opening.applicationMethods.map(({channel, note}: ApplicationMethod) => (
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
          {rows.length > 1
            ? 'To apply, send us a message through any of the following channels:'
            : 'To apply, send us a message through the following channel:'}
        </div>
        <div className="OpeningDetails__application-method-container">{rows}</div>
      </>
    );
  };

  const renderContent = () => (
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

  const renderReportsToList = () => {
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

  const renderStringList = (listData: string[], listLabel: string) => {
    const listItems = listData.map((item: string) => <li key={item}>{item}</li>);
    return (
      <>
        <div className="OpeningDetails__list-label">{listLabel}</div>
        <ul className="OpeningDetails__ul">{listItems}</ul>
      </>
    );
  };

  return (
    <div className="OpeningDetails">
      <Link className="OpeningDetails__BackButton" to="/openings/TODO">
        Back
      </Link>
      {renderContent()}
    </div>
  );
};

export default OpeningDetails;
