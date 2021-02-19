import React, {FC} from 'react';

import {DocContainer, DocImage, TableBorderGrid} from 'components';

import DailyRefillRate from './DailyRefillRate.png';

const GovernancePointsAndRefillLogic: FC = () => {
  return (
    <DocContainer className="GovernancePointsAndRefillLogic" title="Points And Refill Logic" lastUpdated="15 Feb 2021">
      <p>
        The network is unable to use human time as a reliable form of measurement due to challenges of syncing all
        global nodes which is needed for validation. In our network, time is measured in confirmation blocks. This
        method of measurement will fluctuate heavily early on (in relation to human time) but will become more accurate
        as the network grows.
      </p>

      <p>
        <strong>Time</strong> <br />1 network day = 1,000 blocks (avg # of confirmation blocks per day)
      </p>

      <p>
        <strong>Exchange Rate</strong> <br />
        10,000 points per locked coin
      </p>

      <p>
        <strong>Daily Refill Rate</strong> <br />
        +2,500 points per locked coin
      </p>

      <p>This results in a 100% point refill every ~4 days.</p>

      <DocImage alt="daily-refill-rate" maxWidth={720} src={DailyRefillRate} />

      <TableBorderGrid
        headers={['Events', 'Point Balance']}
        rows={[
          ['User locks 24 coins', '240,000 (refill rate of 60,000 points/day)'],
          ['User spends 200,000 points submitting a project proposal', '40,000'],
          ['1 network day passes', '100,000'],
          ['1 network day passes', '160,000'],
        ]}
        title="Example:"
      />
    </DocContainer>
  );
};

export default GovernancePointsAndRefillLogic;
