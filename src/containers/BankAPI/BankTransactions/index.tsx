import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './BankTransactions.scss';

const BankTransactions = () => {
  return (
    <section className="BankTransactions">
      <h1 className="page-title">BankTransactions</h1>
      <p>Hey</p>

      <h2 className="endpoint">GET /sample</h2>
      <RequestResponse code={`{}`} heading="Response" />
    </section>
  );
};

export default BankTransactions;
