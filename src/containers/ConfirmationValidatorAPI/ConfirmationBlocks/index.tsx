import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './ConfirmationBlocks.scss';

const ConfirmationBlocks = () => (
  <div className="ConfirmationBlocks">
    <h1 className="page-title">Confirmation Blocks</h1>
    <p>Hey</p>

    <h2 className="endpoint">GET /sample</h2>
    <RequestResponse code={`{}`} heading="Response" />
  </div>
);

export default ConfirmationBlocks;
