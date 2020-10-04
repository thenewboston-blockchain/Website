import React, {FC} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {A, MarketingButton} from 'components';

import {ApplicationMethod, Opening, OpeningCategoryUrlParams} from 'types/openings';
import {SocialMedia} from 'types/social-media';

import './OpeningDetails.scss';

const OpeningDetails: FC<Opening> = ({
  applicationMethods,
  categories,
  description,
  payNotes,
  position,
  reportsTo,
  responsibilities,
  slug,
  technologyRequirements,
}) => {
  const history = useHistory();
  const {category} = useParams<OpeningCategoryUrlParams>();

  const goToListing = () => {
    history.push(`/openings/${category}`);
  };

  const renderApplicationMethodList = () => {
    const customLinks = {
      [SocialMedia.facebook]: '',
      [SocialMedia.github]: '',
      [SocialMedia.linkedin]: 'https://www.linkedin.com/in/buckyroberts/',
      [SocialMedia.reddit]: 'https://www.reddit.com/message/compose?to=/r/thenewboston',
      [SocialMedia.slack]: '',
      [SocialMedia.twitter]: '',
    };

    const rows = applicationMethods.map(({channel, note}: ApplicationMethod) => (
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
      <div className="OpeningDetails__position">{position}</div>
      <div className="OpeningDetails__description">{description}</div>
      {renderStringList(responsibilities, 'Responsibilities')}
      {renderStringList(technologyRequirements, 'Technology Requirements')}
      {renderReportsToList()}
      {renderStringList(payNotes, 'Pay')}
      {renderApplicationMethodList()}
    </>
  );

  const renderReportsToList = () => {
    const listItems = reportsTo.map(({githubUsername, name}) => (
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
      <button className="OpeningDetails__BackButton" onClick={goToListing}>
        Back
      </button>
      {renderContent()}
    </div>
  );
};

export default OpeningDetails;
