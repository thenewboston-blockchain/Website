import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './Validators.scss';

const Validators = () => {
  return (
    <section className="Validators">
      <h1 className="page-title">Validators</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default Validators;
