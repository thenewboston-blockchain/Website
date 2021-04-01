import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const BankApiBanks: FC = () => {
  return (
    <DocContainer className="BankApiBanks" title="Banks" lastUpdated="31 Mar 2021">
      <p>
        All banks have the option of connecting to other banks. Although it is not a requirement, it is often useful for
        a bank to inspect the trust levels assigned by other banks. This data is used primarily in determining which
        primary validator to elect as well as which confirmation validators to connect to and purchase services from.
      </p>

      <DocEndpoint endpoint="/banks?limit=2&offset=4" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="banks" />
      <RequestResponseSnippet
        code={`{
  "count": 17,
  "next": "http://143.110.137.54/banks?limit=2&offset=6",
  "previous": "http://143.110.137.54/banks?limit=2&offset=2",
  "results": [
    {
      "account_number": "da8500cb8e2ffd728f919cfae82b1c4e97ca2558f2545ab1b020a4172642dce3",
      "ip_address": "34.202.233.224",
      "node_identifier": "3d6de056dc9ecbca2b4c832017dcb5dbdc2c95dd3175244acf7dfbc21add76de",
      "port": 80,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "trust": "0.00"
    },
    {
      "account_number": "c4caa42b2a01b31ee187468ac63bd64745f67ec3b20191a54eb55ba20d5adbb0",
      "ip_address": "18.191.29.186",
      "node_identifier": "8990b681d8d14b3bf2cd38782c6053bb365cc54616f06ec8d88d9dadb8aa0780",
      "port": 80,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "trust": "0.00"
    }
  ]
}`}
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
    "trust": 76.43
  },
  "node_identifier": "35f4c988f425809ca7f5d0b319cdf8f7d7aba1b064fd0efc85d61fa0f4d05145",
  "signature": "93952df29ae3885fd9c9f88721314236bdb53ca5632b2959dcf5cf3c38cb8b96ca57ff84c5337eb164f803237f901abcb0c41a9f71e14aa2fb3159c7ad7a7509"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "account_number": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5",
  "ip_address": "143.110.137.54",
  "node_identifier": "6dbaff44058e630cb375955c82b0d3bd7bc7e20cad93e74909a8951f747fb8a4",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "trust": "76.43"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiBanks;
