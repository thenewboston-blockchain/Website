import React from 'react';

import RequestResponse from 'components/RequestResponse';

import accountsResponse from './code-snippets/accounts-response';

import './Accounts.scss';

const Accounts = () => {
  return (
    <section className="Accounts">
      <h1 className="page-title">Accounts</h1>
      <p>
        Banks will store information of all accounts that have sent blocks through them. Banks will also assign a trust
        level to each account they are tracking in order to determine future transactions fees. More trusted accounts
        generally pay lower transaction fees.
      </p>

      <h2 className="endpoint">GET /accounts</h2>
      <RequestResponse code={accountsResponse} heading="Response" />
    </section>
  );
};

export default Accounts;
