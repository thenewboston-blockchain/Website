import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import NodeBoosting from './NodeBoosting.png';

const GovernanceLockedCoinsAndBoosting: FC = () => {
  return (
    <DocContainer
      className="GovernanceLockedCoinsAndBoosting"
      title="Locked Coins & Boosting"
      lastUpdated="07 Mar 2021"
    >
      <p>
        Registered users have the ability to lock any amount of coins that they own. By locking coins, the network will
        place a freeze on those coins for a set amount of time to prevent them from being withdrawn. This reduces the
        amount of coins in circulation while increasing their stability and value.
      </p>

      <p>In return for locked coins registered users will receive:</p>

      <DocList variant="ul">
        <li>Points</li>
        <li>The ability to boost a node of their choosing</li>
      </DocList>

      <p>
        Points are used to perform various actions on the network. Certain actions (such as submitting project
        proposals) are available to all registered users while other actions (such as voting on project proposals) are
        restricted to government members only. Unlike coins, points refill over time. The refill rate is proportional to
        the amount of coins locked.
      </p>

      <p>
        The top X boosted nodes in the network will act as delegates to elect a PV. The weight of a nodes vote is equal
        to the total amount of boosts they receive. In the event of a tie, the X + 1 boosted node will break the tie.
        The amount of locked coins along with the node the user chooses to boost will be stored on the blockchain.
      </p>

      <DocImage alt="node boosting" maxWidth={640} src={NodeBoosting} />
    </DocContainer>
  );
};

export default GovernanceLockedCoinsAndBoosting;
