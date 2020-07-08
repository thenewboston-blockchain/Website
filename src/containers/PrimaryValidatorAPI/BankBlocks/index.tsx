import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './BankBlocks.scss';

const BankBlocks = () => {
  return (
    <section className="BankBlocks">
      <h1 className="page-title">Bank Blocks</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default BankBlocks;
