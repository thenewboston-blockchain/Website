import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, TableVertical} from 'components';

import Overview from './GovernanceOverview.png';

const GovernanceOverview: FC = () => {
  const renderGlossary = (): ReactNode => {
    return (
      <TableVertical
        altColors
        rows={[
          ['Boosts', 'Locked coins that represent a users trust in a node to act as a network representative'],
          ['Budget', 'A shared account managed by the government that requires a multisig to access'],
          ['Daily Refill Rate', 'The rate at which points replenish per network day'],
          ['Government', 'A group of individuals elected by registered users to govern'],
          ['Locked Coins', 'Coins that are frozen for a set amount of time to prevent them from being withdrawn'],
          ['Registered Users', 'Individuals with usernames'],
          ['Treasury Board', 'Highest voted members of government who are responsible for minting new coins'],
          ['Username', 'A globally unique network identifier used in place of an account number'],
          ['Vote', 'A registered users choice for governor'],
        ]}
      />
    );
  };

  return (
    <DocContainer className="GovernanceOverview" title="Overview" lastUpdated="07 Mar 2021">
      <p>
        Our governance structure enables user voting for all core aspects of the network, both in terms of people and
        nodes. Any user from the public is able to apply to become a governor where other users are then able to vote
        for their desired candidates. The nodes that are responsible for the initial validation of transactions are also
        chosen by the users through a "boosting" system as described in later sections.
      </p>
      {renderGlossary()}
      <DocImage alt="governance-overview" maxWidth={1200} src={Overview} />
    </DocContainer>
  );
};

export default GovernanceOverview;
