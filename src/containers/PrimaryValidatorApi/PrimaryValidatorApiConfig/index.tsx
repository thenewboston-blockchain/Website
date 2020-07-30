import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const PrimaryValidatorApiConfig: FC = () => {
  return (
    <DocContainer className="PrimaryValidatorApiConfig" title="Config">
      <p>
        All nodes will provide config data detailing their current configuration details. This information is used by
        all other nodes in order to ensure proper connection settings.
      </p>

      <DocEndpoint endpoint="/config" method="GET" />
      <RequestResponseSnippet
        code={`{
  "primary_validator": null,
  "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
  "ip_address": "64.225.47.205",
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": "4.0000000000000000",
  "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
  "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
  "seed_block_identifier": "",
  "daily_confirmation_rate": null,
  "node_type": "PRIMARY_VALIDATOR"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default PrimaryValidatorApiConfig;
