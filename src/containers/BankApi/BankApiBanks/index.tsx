import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const BankApiBanks: FC = () => {
  return (
    <DocContainer className="BankApiBanks" title="Banks">
      <p>
        All banks have the option of connecting to other banks. Although it is not a requirement, it is often useful for
        a bank to inspect the trust levels assigned by other banks. This data is used primarily in determining which
        primary validator to elect as well as which confirmation validators to connect to and purchase services from.
      </p>
      <p>
        More information about banks can be found in the <NavLink to="/guide/banks">Banks</NavLink> section of the
        guide.
      </p>

      <DocEndpoint endpoint="/banks" method="GET" />
      <RequestResponseSnippet
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

      <DocEndpoint endpoint="/banks/<node_identifier>" method="PATCH" />
      <TableParams
        items={[
          {
            dataType: 'decimal',
            description: 'Amount of trust',
            param: 'trust',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "trust": 76.26
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "d11c5f7fcc5f541a94ceee7c73972b21c73912e41f06cc22989863fa22529f55d0b81bc9f95a203191be0259518bdfe073de77d87a7230d37bb14f21666ee40a"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
  "ip_address": "192.168.1.232",
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": "1.0000000000000000",
  "trust": "76.26"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiBanks;
