import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './BankBlocks.scss';

const BankBlocks = () => {
  return (
    <section className="BankBlocks">
      <h1 className="page-title">Bank Blocks</h1>
      <p>
        Bank blocks are blocks that have been signed by banks as a way of indicating that the block has passed initial
        validation. Blocks will be sent from end users to banks, and upon initial validation of those blocks the bank
        will sign the block and forward it to the primary validator for final validation.
      </p>

      <h2 className="endpoint">POST /bank_blocks</h2>
      <RequestResponse code={`{}`} heading="Request" />
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default BankBlocks;
