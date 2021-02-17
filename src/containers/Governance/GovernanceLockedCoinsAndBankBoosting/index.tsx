import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import BankBoosting from './BankBoosting.png';

const GovernanceLockedCoinsAndBankBoosting: FC = () => {
  return (
    <DocContainer
      className="GovernanceLockedCoinsAndBankBoosting"
      title="Locked Coins & Bank Boosting"
      lastUpdated="15 Feb 2021"
    >
      <p>
        Registered users have the ability to lock any amount of coins that they own. By locking coins, the network will
        place a freeze on those coins for a set amount of time to prevent them from being withdrawn. This reduces the
        amount of coins in circulation while increasing their stability and value.
      </p>

      <p>In return for locked coins registered users will receive:</p>

      <DocList variant="ul">
        <li>Points</li>
        <li>The ability to boost a Bank of their choosing</li>
      </DocList>

      <p>
        Points are used to perform various actions on the network. Certain actions (such as submitting project
        proposals) are available to all registered users while other actions (such as voting on project proposals) are
        restricted to government members only. Unlike coins, points refill over time. The refill rate is proportional to
        the amount of coins locked.
      </p>

      <p>
        The top X boosted Banks in the network will act as delegates to elect a PV. The weight of a Bank's vote is equal
        to the total amount of boosts they recieve. In the event of a tie, the X + 1 boosted Bank will break the tie.
        The amount of locked coins along with the Bank the user chooses to boost will be stored on the blockchain.
      </p>

      <DocImage alt="bank-boosting" maxWidth={720} src={BankBoosting} />
    </DocContainer>
  );
};

export default GovernanceLockedCoinsAndBankBoosting;
