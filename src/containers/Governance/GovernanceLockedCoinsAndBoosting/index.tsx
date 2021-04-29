import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import NodeBoosting from './NodeBoosting.png';

const GovernanceLockedCoinsAndBoosting: FC = () => {
  return (
    <DocContainer
      className="GovernanceLockedCoinsAndBoosting"
      title="Locked Coins & Boosting"
      lastUpdated="28 Apr 2021"
    >
      <p>
        Users have the ability to lock any amount of coins that they own. By locking coins, the network will place a
        freeze on those coins for a set amount of time to prevent them from being withdrawn. This reduces the amount of
        coins in circulation while increasing their stability and value.
      </p>
      <p>In return for locked coins users will receive:</p>
      <DocList variant="ul">
        <li>Points</li>
        <li>The ability to boost a node of their choosing</li>
      </DocList>
      <p>
        Points are used to perform various actions on the network. Certain actions are available to all users while
        other actions are restricted to governors only. Unlike coins, points refill over time. The refill rate is
        proportional to the amount of coins locked.
      </p>
      <DocImage alt="node boosting" maxWidth={540} src={NodeBoosting} />
    </DocContainer>
  );
};

export default GovernanceLockedCoinsAndBoosting;
