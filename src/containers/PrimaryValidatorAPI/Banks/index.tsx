import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './Banks.scss';

const Banks = () => {
  return (
    <section className="Banks">
      <h1 className="page-title">Banks</h1>
      <p>The primary validator will maintain a record of all connected banks on the network.</p>

      <h2 className="endpoint">GET /banks</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default Banks;
