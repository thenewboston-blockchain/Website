import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const ConfirmationValidatorApiBanks: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiBanks" title="Banks" lastUpdated="3 Apr 2021">
      <p>The confirmation validators will maintain a record of all connected banks.</p>

      <DocEndpoint endpoint="/banks" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="banks" />
      <RequestResponseSnippet
        code={`{
  "count": 20,
  "next": "http://54.183.17.224/banks?limit=2&offset=2",
  "previous": null,
  "results": [
    {
      "account_number": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5",
      "ip_address": "143.110.137.54",
      "node_identifier": "6dbaff44058e630cb375955c82b0d3bd7bc7e20cad93e74909a8951f747fb8a4",
      "port": null,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "confirmation_expiration": null,
      "trust": "0.00"
    },
    {
      "account_number": "7977b7f7a6f52bf9ebda93694d9276e9e23049eb40b263799fb2a35fa9316b9b",
      "ip_address": "143.110.141.4",
      "node_identifier": "735bfc11f802dbb8365998703539823d751ac5f5f82905143fba8a84d967f29b",
      "port": null,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 2,
      "confirmation_expiration": null,
      "trust": "0.00"
    }
  ]
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/banks/<node_identifier>" method="GET" />
      <RequestResponseSnippet
        code={`{
  "account_number": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5",
  "ip_address": "143.110.137.54",
  "node_identifier": "6dbaff44058e630cb375955c82b0d3bd7bc7e20cad93e74909a8951f747fb8a4",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "confirmation_expiration": null,
  "trust": "0.00"
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
    "trust": 50.00
  },
  "node_identifier": "35f4c988f425809ca7f5d0b319cdf8f7d7aba1b064fd0efc85d61fa0f4d05145",
  "signature": "93952df29ae3885fd9c9f88721314236bdb53ca5632b2959dcf5cf3c38cb8b96ca57ff84c5337eb164f803237f901abcb0c41a9f71e14aa2fb3159c7ad7a7509"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "account_number": "9a275161478536d0a5b88ff05d429b9a9e63d0032a46e7a6a8f088da89c69da5",
  "ip_address": "13.57.215.62",
  "node_identifier": "59af0721c572e6032b835722b5fec22110daad069dc135f1e81794747dbe626f",
  "port": 80,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "trust": "50.00"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiBanks;
