import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import ValidationThreshold from './ValidationThreshold.png';

const GuideForkPrevention: FC = () => {
  return (
    <DocContainer className="GuideForkPrevention" title="Fork Prevention" lastUpdated="24 Apr 2021">
      <p>
        CVs will inform other CVs when a block has been received from the PV. This is to prevent intentional forks by
        ensuring the PV is not sending different blocks to different recipients. Once a CV receives matching blocks from
        &gt;50% of other CVs, the receiving CV will validate the block and upon successful validation, add the block to
        it's blockchain. If an invalid block (miscalculation) or a conflict block (fork attempt) is found then the CVs
        will reject that block and switch to the next scheduled PV.
      </p>

      <DocImage alt="validation threshold" maxWidth={800} src={ValidationThreshold} />
    </DocContainer>
  );
};

export default GuideForkPrevention;
