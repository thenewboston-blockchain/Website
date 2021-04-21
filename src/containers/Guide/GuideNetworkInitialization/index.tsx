import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import GenesisBlock from './GenesisBlock.png';
import GenesisBlockComposition from './GenesisBlockComposition.png';
import PVInitializationProcess from './PVInitializationProcess.png';
import PVInitializationProcessMultipleCandidates from './PVInitializationProcessMultipleCandidates.png';
import ScheduleGeneration from './ScheduleGeneration.png';

const GuideNetworkInitialization: FC = () => {
  return (
    <DocContainer className="GuideNetworkInitialization" title="Network Initialization" lastUpdated="21 Apr 2021">
      <p>
        The beta network will be initialized by a single node and a genesis block. This will be the very first block in
        the beta blockchain.
      </p>
      <DocImage alt="genesis block" maxWidth={400} src={GenesisBlock} />
      <p>
        The genesis block will consist of the minimum amount of information required to initialize a new network
        including:
      </p>
      <DocList variant="ul">
        <li>All account information from alpha</li>
        <li>A record of the origin node</li>
        <li>The initial PV schedule which will only include a single node, that being itself</li>
      </DocList>
      <DocImage alt="genesis block composition" maxWidth={500} src={GenesisBlockComposition} />
      <p>
        At this point in time the network is ready to set it's very first PV via the <strong>PV initialization</strong>{' '}
        process. This process will be run every time the network switches to a new PV. The goal of this process is to
        add more nodes (future PVs) to the schedule to ensure that the network will always have an active PV. The
        process is described below.{' '}
      </p>
      <DocImage alt="pv initialization process" maxWidth={700} src={PVInitializationProcess} />
      <p>
        This logic behind this process is more clear as additional nodes join the network. Below we look at an example
        network with a PV schedule limit of 5 nodes.
      </p>
      <DocImage
        alt="pv initialization process multiple candidates"
        maxWidth={700}
        src={PVInitializationProcessMultipleCandidates}
      />
      <p>
        In the event that one or more nodes are tied in terms of boost, the nodes will be ranked by NID alphabetically
        and the first one chosen.
      </p>
      <DocImage alt="schedule generation" maxWidth={600} src={ScheduleGeneration} />
    </DocContainer>
  );
};

export default GuideNetworkInitialization;
