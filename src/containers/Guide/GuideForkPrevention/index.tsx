import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import ValidationThreshold from './ValidationThreshold.png';

const GuideForkPrevention: FC = () => {
  return (
    <DocContainer className="GuideForkPrevention" title="Fork Prevention" lastUpdated="06 Mar 2021">
      <p>
        Nodes will inform other nodes when a confirmation block is received from the PV. This is to prevent intentional
        forks by ensuring that the PV is not sending different blocks to different recipients. Once a node receives
        matching confirmation blocks from &gt;50% of eligible nodes, the receiving node will validate the block and upon
        successful validation add the block to it’s blockchain. If an invalid block (miscalculation) or a conflict block
        (fork attempt) is found then the scheduled nodes will reject that block and switch to the next scheduled node as
        PV.
      </p>

      <DocImage alt="validation threshold" maxWidth={800} src={ValidationThreshold} />
    </DocContainer>
  );
};

export default GuideForkPrevention;
