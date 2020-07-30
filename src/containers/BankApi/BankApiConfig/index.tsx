import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const BankApiConfig: FC = () => {
  return (
    <DocContainer className="BankApiConfig" title="Config">
      <p>
        All nodes will provide config data detailing their current configuration details as well as their primary
        validator selection. This information is used not only by connecting clients but also by all other nodes in
        order to ensure proper connection settings.
      </p>

      <DocEndpoint endpoint="/config" method="GET" />
      <RequestResponseSnippet
        code={`{
  "primary_validator": {
    "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
    "ip_address": "192.168.1.74",
    "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
    "port": 8000,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "4.0000000000000000",
    "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
    "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
    "seed_block_identifier": "",
    "daily_confirmation_rate": null,
    "trust": "100.00"
  },
  "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
  "ip_address": "192.168.1.232",
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "port": 8000,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": "1.0000000000000000",
  "node_type": "BANK"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiConfig;
