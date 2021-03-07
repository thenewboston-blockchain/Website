import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import Budgets from './Budgets.png';

const GovernanceBudgets: FC = () => {
  return (
    <DocContainer className="GovernanceBudgets" title="Budgets" lastUpdated="07 Mar 2021">
      <p>
        The existing Treasury will be burnt in favor of an updated minting process by the Treasury Board. Minted coins
        will be deposited into a budget (account) collectively managed by all members of government.
      </p>
      <p>
        Both the minting process and the dispersion of coins from the budget will require a majority of signatures,
        similar to a multisig transaction.
      </p>

      <DocImage alt="budgets" maxWidth={760} src={Budgets} />
    </DocContainer>
  );
};

export default GovernanceBudgets;
