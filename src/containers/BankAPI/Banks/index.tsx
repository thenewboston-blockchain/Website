import React from 'react';
import {NavLink} from 'react-router-dom';

import RequestResponse from 'components/RequestResponse';

import './Banks.scss';

const Banks = () => {
  return (
    <section className="Banks">
      <h1 className="page-title">Banks</h1>
      <p>
        All banks have the option of connecting to other banks. Although it is not a requirement, it is often useful for
        a bank to inspect the trust levels assigned by other banks. This data is used primarily in determining which
        primary validator to elect as well as which confirmation validators to connect to and purchase services from.
      </p>
      <p>
        More information about banks can be found in the <NavLink to="/guide/banks">Banks</NavLink> section of the
        guide.
      </p>

      <h2 className="endpoint">GET /banks</h2>
      <RequestResponse
        code={`[
  {
    "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
    "ip_address": "83.168.1.232",
    "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
    "port": 80,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "1.0000000000000000",
    "trust": "100.00"
  },
  {
    "account_number": "db1a9ac3c356ab744ab4ad5256bb86c2f6dfaa7c1aece1f026a08dbd8c7178f2",
    "ip_address": "74.124.1.68",
    "node_identifier": "3214108063cda7b259782c57ff8cec343ad2f1ad35baf38c3503db5cf6f3b2f7",
    "port": 80,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "2.5000000000000000",
    "trust": "98.32"
  }
]`}
        heading="Response"
      />
    </section>
  );
};

export default Banks;
