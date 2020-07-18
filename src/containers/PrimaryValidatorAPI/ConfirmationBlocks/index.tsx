import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './ConfirmationBlocks.scss';

const ConfirmationBlocks = () => (
  <div className="ConfirmationBlocks">
    <h1 className="page-title">Confirmation Blocks</h1>
    <p>
      Often referred to as a "confirmation", a block that has been signed by a validator as confirmation it has been
      added to their blockchain, indicating that the transactions have been validated and that the points have been
      successfully transferred
    </p>

    <h2 className="endpoint">GET /sample</h2>
    <RequestResponse code={`{}`} heading="Response" />
  </div>
);

export default ConfirmationBlocks;
