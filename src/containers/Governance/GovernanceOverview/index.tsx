import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import Overview from './GovernanceOverview.png';

const GovernanceOverview: FC = () => {
  const renderGlossary = (): ReactNode => {
    return (
      <DocList variant="ul">
        <li>
          <strong>Boosts</strong> - locked coins that represent a users trust in a Bank to act as their representative
          when choosing a PV
        </li>
        <li>
          <strong>Budget</strong> - a shared account managed by the government that requires a multisig to access
        </li>
        <li>
          <strong>Daily Refill Rate</strong> - the rate at which points replenish per network day
        </li>
        <li>
          <strong>Government</strong> - a group of individuals elected by registered users to govern
        </li>
        <li>
          <strong>Locked Coins</strong> - coins that are frozen for a set amount of time to prevent them from being
          withdrawn
        </li>
        <li>
          <strong>Registered Users</strong> - individuals with usernames
        </li>
        <li>
          <strong>Treasury Board</strong> - highest voted members of government who are responsible for minting new
          coins
        </li>
        <li>
          <strong>Username</strong> - a globally unique network identifier used in place of an account number
        </li>
        <li>
          <strong>Vote</strong> - a registered users choice for governor
        </li>
      </DocList>
    );
  };
  return (
    <DocContainer
      className="GovernanceOverview"
      title="Overview"
      introSection={renderGlossary()}
      introTitle="Glossary"
      lastUpdated="15 Feb 2021"
    >
      <DocImage alt="governance-overview" maxWidth={1200} src={Overview} />
    </DocContainer>
  );
};

export default GovernanceOverview;
