import React from 'react';
import {NavLink} from 'react-router-dom';

import RequestResponse from 'components/RequestResponse';

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
      <p>
        More information about account can be found in the <NavLink to="/guide/accounts">Accounts</NavLink> section of
        the guide.
      </p>

      <h2 className="endpoint">GET /accounts</h2>
      <RequestResponse
        code={`[
  {
    "id": "9eca00a5-d925-454c-a8d6-ecbb26ec2f76",
    "created_date": "2020-07-08T02:14:59.307535Z",
    "modified_date": "2020-07-08T02:14:59.307553Z",
    "account_number": "4d2ec91f37bc553bc538e91195669b666e26b2ea3e4e31507e38102a758d4f86",
    "trust": "75.21"
  },
  {
    "id": "ae4d43b0-5c34-4e56-8266-0e3531268815",
    "created_date": "2020-07-08T02:15:12.271834Z",
    "modified_date": "2020-07-08T02:15:12.271852Z",
    "account_number": "a29baa6ba36f6db707f8f8dacfa82d5e8a28fa616e8cc96cf6d7790f551d79f2",
    "trust": "94.63"
  }
]`}
        heading="Response"
      />
    </section>
  );
};

export default Accounts;
