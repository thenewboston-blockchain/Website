import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet} from 'components';

const PrimaryValidatorApiBanks: FC = () => {
  return (
    <DocContainer className="PrimaryValidatorApiBanks" title="Banks" lastUpdated="15 Jan 2021">
      <p>The primary validator will maintain a record of all connected banks on the network.</p>

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
    </DocContainer>
  );
};

export default PrimaryValidatorApiBanks;
