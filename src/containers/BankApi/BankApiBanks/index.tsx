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
        code={`{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "account_number": "336dfdf1eacb968511da967b2289e39361a33b823ef2cfabb9cd818b3110e2ee",
      "ip_address": "3.35.3.48",
      "node_identifier": "35f4c988f425809ca7f5d0b319cdf8f7d7aba1b064fd0efc85d61fa0f4d05145",
      "port": 80,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "trust": "100.00"
    },
    {
      "account_number": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5",
      "ip_address": "143.110.137.54",
      "node_identifier": "6dbaff44058e630cb375955c82b0d3bd7bc7e20cad93e74909a8951f747fb8a4",
      "port": null,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "trust": "12.34"
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
    "trust": "76.43"
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
