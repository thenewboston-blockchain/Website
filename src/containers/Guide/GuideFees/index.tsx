import React, {FC} from 'react';

import {DocContainer} from 'components';

const GuideFees: FC = () => {
  return (
    <DocContainer className="GuideFees" title="Fees" lastUpdated="24 Apr 2021">
      <p>
        Through the collection of fees, individuals are incentivized to maintain nodes for the network. Users will pay
        these fees to their active node in exchange for the processing of their request. Node owners set their own fee
        amounts. Users will consider these amounts when choosing their active nodes. Users often consider additional
        factors such as server reliability as well, however the node fee is often a large consideration.
      </p>
      <p>
        Besides the node fee, there is an additional fee paid to the PV. The governors will set this fee by majority
        vote, rather than having each validator set its own fee. This prevents nodes from needing to figure out a new PV
        fee after every PV change. The PV fee will be set directly on the blockchain, resulting in one unified PV fee
        across the entire network.
      </p>
    </DocContainer>
  );
};

export default GuideFees;
