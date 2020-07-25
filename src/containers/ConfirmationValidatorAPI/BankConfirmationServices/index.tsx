import React from 'react';

import {RequestResponse} from 'components';

import './BankConfirmationServices.scss';

const BankConfirmationServices = () => {
  return (
    <section className="BankConfirmationServices">
      <h1 className="page-title">Bank Confirmation Services</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default BankConfirmationServices;
