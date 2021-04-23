import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {CalloutType, DocCallout, DocContainer, DocImage, DocList} from 'components';

import PVInitializationProcess from './PVInitializationProcess.png';
import PVInitializationProcessMultipleCandidates from './PVInitializationProcessMultipleCandidates.png';
import Round from './Round.png';
import ScheduleGeneration from './ScheduleGeneration.png';

const GuideScheduling: FC = () => {
  return (
    <DocContainer className="GuideScheduling" title="Scheduling" lastUpdated="22 Apr 2021">
      <p>
        Before a new PV is able to begin generating blocks, it must first run the scheduling process. This process will
        run every time the network switches PVs. The goal of this process is to add more validators to the schedule to
        ensure that the network will always have an active PV. The details of the process are outlined below.
      </p>

      <DocCallout type={CalloutType.note}>
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

      <DocList variant="ol">
        <li>Each of the scheduled validators will act as PV for one block day.</li>
        <li>After the PV generates a block, that block will be sent to all other CVs for additional confirmation.</li>
        <li>
          Once &gt;50% of CVs confirm receipt, each CV will validate the block and upon successful validation add the
          block to it's blockchain.
        </li>
      </DocList>

      <DocCallout type={CalloutType.important}>
        All scheduling information is stored on the blockchain. The propagation of schedule blocks throughout the
        network allow all nodes to remain aware of the validators.
      </DocCallout>

      <p>
        The job of the PV is not to maintain the single source of truth for all account balances, but rather propose a
        valid ordering of blocks to forward to the CVs. This architecture not only allows for a highly efficient method
        of distributed consensus, but also maintains a shared state across a peer-to-peer network by enabling all CVs to
        produce identical blockchains.
      </p>
      <DocImage alt="round" maxWidth={460} src={Round} />
    </DocContainer>
  );
};

export default GuideScheduling;
