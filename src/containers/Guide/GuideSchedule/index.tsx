import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import Schedule from './Schedule.png';
import Round from './Round.png';

const GuideSchedule: FC = () => {
  return (
    <DocContainer className="GuideSchedule" title="Schedule" lastUpdated="06 Mar 2021">
      <p>
        A schedule will be created at the beginning of each block day to indicate which nodes will be assigned a turn as
        PV for that block day. All nodes on the network will have a record of the PV schedule. The process of how the
        schedule is determined is listed below.
      </p>

      <DocList variant="ol">
        <li>Each of the top 20 nodes will take turns acting as PV for a block day.</li>
        <li>
          During (or before) a node's turn as PV the other 19 nodes may vote to skip the upcoming PV node if any issues
          are found (performance, error, offline, etc...).
        </li>
        <li>
          After the PV validates and then signs a confirmation block it will be sent to the 19 other nodes for
          additional confirmation.
        </li>
        <li>
          Once &gt;50% of other nodes confirm receipt, each node will validate the block and upon successful validation
          add the block to it’s blockchain.
        </li>
        <li>
          This process will continue until all 20 nodes have had a turn as PV (or skipped) when a new schedule will be
          created and the process will start again.
        </li>
      </DocList>

      <p>
        At the beginning of each round the highest boosted nodes will produce the PV schedule to add to the blockchain.
        This will assign each node to a future set amount of blocks they will be responsible for initially validating.
      </p>

      <DocImage alt="round" maxWidth={500} src={Schedule} />

      <p>
        Each of the top 20 nodes will take turns acting as PV while the other 19 nodes act as auditing validators to
        validate the results.
      </p>

      <DocImage alt="round" maxWidth={520} src={Round} />
    </DocContainer>
  );
};

export default GuideSchedule;
