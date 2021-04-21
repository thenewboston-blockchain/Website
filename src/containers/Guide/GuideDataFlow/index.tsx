import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import NetworkFlow from './NetworkFlow.png';
import RequestFlow from './RequestFlow.png';

const GuideDataFlow: FC = () => {
  return (
    <DocContainer className="GuideDataFlow" title="Data Flow" lastUpdated="21 Apr 2021">
      <DocImage alt="request flow" maxWidth={600} src={RequestFlow} />
      <p>
        <strong>User Request Flow</strong>
      </p>
      <DocList variant="ol">
        <li>Users send requests to their active node.</li>
        <li>
          Their active node will forward that request to the current PV which they will know from the most recent PV
          schedule which is stored on the blockchain. If a request is accidentally forwarded to any node that is not the
          PV then that node will route the request to the correct PV. This may happen immediately after the PV has
          switched but before the updated blockchain has had a chance to propagate fully throughout the network.
        </li>
        <li>
          The PV will validate the block. If the block is valid the PV will add it to it's blockchain and then broadcast
          the block to all other nodes in the validators. If the block is invalid the PV will not add it to it's
          blockchain, but still forward the invalid block to the validators.
        </li>
        <li>
          Any node in the network may listen to any validator for any new blocks that have been added to their
          blockchain. Validators will only add a block to their blockchain once they receive the majority of receipt
          confirmations from all other validators.
        </li>
      </DocList>
      <DocImage alt="network flow" maxWidth={760} src={NetworkFlow} />
      <p>
        <strong>Network Data Flow</strong>
      </p>
      <DocList variant="ol">
        <li>Nodes will forward user requests to the PV.</li>
        <li>The PV will then generate a blockchain, which is simply an ordered list of valid requests.</li>
        <li>That blockchain will then be broadcast to all other validators for verification.</li>
      </DocList>
    </DocContainer>
  );
};

export default GuideDataFlow;
