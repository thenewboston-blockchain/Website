import React, {FC, useState} from 'react';

import {A} from 'components';
import Icon, {IconType} from 'components/Icon';
import {Opening} from 'types/openings';
import './OpeningsOpening.scss';

const OpeningsOpening: FC<Opening> = ({
  applicationMethods,
  description,
  payNotes,
  position,
  reportsTo,
  responsibilities,
  technologyRequirements,
}) => {
  const [expanded, setExpanded] = useState(false);

  const renderApplicationMethodList = () => {
    const listItems = applicationMethods.map(({channel, note}) => (
      <li key={channel}>
        {channel}
        {note && <span> - {note}</span>}
      </li>
    ));
    return (
      <>
        <div className="OpeningsOpening__list-label">Reports To</div>
        <ul className="OpeningsOpening__ul">{listItems}</ul>
      </>
    );
  };

  const renderExpandCollapseToggle = () => (
    <div
      className="OpeningsOpening__expand-collapse-container"
      onClick={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
    >
      <Icon
        className="OpeningsOpening__expand-collapse-icon"
        icon={expanded ? IconType.minus : IconType.plus}
        size={16}
      />
      <div className="OpeningsOpening__expand-collapse-text">{expanded ? 'Collapse' : 'Expand'}</div>
    </div>
  );

  const renderExpandedContent = () => (
    <>
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
            <A className="OpeningsOpening__github-username-link" href={`https://github.com/${githubUsername}`}>
              {githubUsername}
            </A>
          </>
        )}
      </li>
    ));
    return (
      <>
        <div className="OpeningsOpening__list-label">Reports To</div>
        <ul className="OpeningsOpening__ul">{listItems}</ul>
      </>
    );
  };

  const renderStringList = (listData: string[], listLabel: string) => {
    const listItems = listData.map((item: string) => <li key={item}>{item}</li>);
    return (
      <>
        <div className="OpeningsOpening__list-label">{listLabel}</div>
        <ul className="OpeningsOpening__ul">{listItems}</ul>
      </>
    );
  };

  return (
    <div className="OpeningsOpening">
      <div className="OpeningsOpening__position">{position}</div>
      <div className="OpeningsOpening__description">{description}</div>
      {expanded && renderExpandedContent()}
      {renderExpandCollapseToggle()}
    </div>
  );
};

export default OpeningsOpening;
