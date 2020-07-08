import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './ValidatorConfirmationServices.scss';

const ValidatorConfirmationServices = () => {
  return (
    <section className="ValidatorConfirmationServices">
      <h1 className="page-title">ValidatorConfirmationServices</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default ValidatorConfirmationServices;
