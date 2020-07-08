import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './Blocks.scss';

const Blocks = () => {
  return (
    <section className="Blocks">
      <h1 className="page-title">Blocks</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default Blocks;
