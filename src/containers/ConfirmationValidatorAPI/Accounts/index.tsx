import React from 'react';

import RequestResponse from 'components/RequestResponse';

import accountsResponse from './code-snippets/accounts-response';

import './Accounts.scss';

const Accounts = () => {
  return (
    <section className="Accounts">
      <h1 className="page-title">Accounts</h1>
      <p>Accounts</p>

      <h2 className="endpoint">GET /accounts</h2>
      <RequestResponse code={accountsResponse} heading="Response" />
    </section>
  );
};

export default Accounts;
