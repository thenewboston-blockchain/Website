import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {CalloutType, DocCallout, DocContainer, DocImage, DocList} from 'components';

import PVInitializationProcess from './PVInitializationProcess.png';
import PVInitializationProcessMultipleCandidates from './PVInitializationProcessMultipleCandidates.png';
import Round from './Round.png';
import Schedule from './Schedule.png';
import ScheduleGeneration from './ScheduleGeneration.png';

const GuideScheduling: FC = () => {
  return (
    <DocContainer className="GuideScheduling" title="Scheduling" lastUpdated="22 Apr 2021">
      <p>
        Before a new PV is able to begin generating blocks, it must first run the scheduling process. This process will
        run every time the network switches PVs. The goal of this process is to add more validators to the schedule to
        ensure that the network will always have an active PV. The details of the process are outlined below.
      </p>

      <DocCallout type={CalloutType.important}>
        Note that this process involves boost which will be covered in the{' '}
        <NavLink to="/governance/locked-coins-and-boosting">Locked Coins &amp; Boosting</NavLink> section.
      </DocCallout>
      <DocImage alt="scheduling process" maxWidth={700} src={PVInitializationProcess} />

      <hr />

      <p>
        This logic behind this process is more clear as additional nodes join the network. Below we look at an example
        network with a schedule limit of 5 nodes.
      </p>
      <DocImage
        alt="scheduling process multiple candidates"
        maxWidth={700}
        src={PVInitializationProcessMultipleCandidates}
      />

      <hr />

      <p>
        In the event that one or more nodes are tied in terms of boost, the nodes will be ranked by NID alphabetically
        and the first one chosen.
      </p>
      <DocImage alt="schedule generation" maxWidth={600} src={ScheduleGeneration} />

      <DocCallout type={CalloutType.warning}>
        The following documentation is out of date. For information on the updated scheduling process, please refer to
        the <NavLink to="/guide/network-initialization">Network Initialization</NavLink> section.
      </DocCallout>

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

export default GuideScheduling;
