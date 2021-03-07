import React, {FC, ReactNode} from 'react';

import {DocContainer, TableVertical} from 'components';

import './GovernanceRatesAndAmounts.scss';

const GovernanceRatesAndAmounts: FC = () => {
  const renderConversionRates = (): ReactNode => {
    return (
      <>
        <h3 className="GovernanceRatesAndAmounts__table-heading">Conversion Rates</h3>
        <TableVertical
          altColors
          className="GovernanceRatesAndAmounts__TableVertical"
          rows={[
            ['1 network day', '1,000 blocks'],
            ['1 locked coin', '100,000 points'],
          ]}
        />
      </>
    );
  };

  const renderLockedCoinsAndBoost = (): ReactNode => {
    return (
      <>
        <h3 className="GovernanceRatesAndAmounts__table-heading">Locked Coins &amp; Boosts</h3>
        <TableVertical
          altColors
          className="GovernanceRatesAndAmounts__TableVertical"
          rows={[
            ['Lock time', '20 days'],
            [
              'Early unlock penalty',
              'Max penalty is 10% of locked coins and every 2 days the penalty decreases by 1% (when calculating penalty for early unlocking the penalty is always rounded up)',
            ],
          ]}
        />
      </>
    );
  };

  const renderPoints = (): ReactNode => {
    return (
      <>
        <h3 className="GovernanceRatesAndAmounts__table-heading">Points</h3>
        <TableVertical
          altColors
          className="GovernanceRatesAndAmounts__TableVertical"
          rows={[
            ['Cast vote for governor', '1 or more votes'],
            ['Update or remove governor application', '1,000,000 points'],
            ['Submit project proposal', '200,000,000 points'],
            ['Update or remove project proposal', '1,000,000 points'],
          ]}
        />
      </>
    );
  };

  const renderUsernamesAndVotes = (): ReactNode => {
    return (
      <>
        <h3 className="GovernanceRatesAndAmounts__table-heading">Usernames &amp; Votes</h3>
        <TableVertical
          altColors
          className="GovernanceRatesAndAmounts__TableVertical"
          rows={[
            ['Username fee', '1,000 coins'],
            ['Each additional vote', '500 coins'],
            ['Submit governor application', '10,000 coins'],
          ]}
        />
      </>
    );
  };

  return (
    <DocContainer className="GovernanceRatesAndAmounts" title="Rates & Amounts" lastUpdated="07 Mar 2021">
      {renderConversionRates()}
      {renderUsernamesAndVotes()}
      {renderLockedCoinsAndBoost()}
      {renderPoints()}
    </DocContainer>
  );
};

export default GovernanceRatesAndAmounts;
