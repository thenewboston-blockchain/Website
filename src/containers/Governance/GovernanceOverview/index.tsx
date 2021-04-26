import React, {FC, ReactNode} from 'react';

import {DocContainer, DocImage, TableVertical} from 'components';

import Overview from './GovernanceOverview.png';

const GovernanceOverview: FC = () => {
  const renderGlossary = (): ReactNode => {
    return (
      <TableVertical
        altColors
        rows={[
          ['Boosts', 'Locked coins that represent a users trust in a node to act as a validator'],
          ['Budget', 'Shared account managed by the government that requires a multisig to access'],
          ['Daily Refill Rate', 'The rate at which points replenish per network day'],
          ['Government', 'Group of individuals elected by registered users to govern'],
          ['Locked Coins', 'Coins that are frozen for a set amount of time to prevent them from being withdrawn'],
          ['Network Day', '1,000 block long segment of the blockchain'],
          ['Registered Users', 'Individuals with usernames'],
          ['Treasury Board', 'Highest voted members of government who are responsible for minting new coins'],
          ['Username', 'Globally unique network identifier used in place of an account number'],
          ['Vote', 'Registered users choice for governor'],
        ]}
      />
    );
  };

  return (
    <DocContainer className="GovernanceOverview" title="Overview" lastUpdated="07 Mar 2021">
      <p>
        Our governance structure enables user voting for all core aspects of the network, both in terms of people and
        validation nodes. Any user from the public is able to apply to become a governor where other users are then able
        to vote for their desired candidates. The nodes that are responsible for the validation of blocks are also
        chosen by the users through a "boosting" system as described in later sections.
      </p>
      {renderGlossary()}
      <DocImage alt="governance-overview" maxWidth={1200} src={Overview} />
    </DocContainer>
  );
};

export default GovernanceOverview;
