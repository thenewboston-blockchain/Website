import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const PrimaryValidatorApiConfig: FC = () => {
  return (
    <DocContainer className="PrimaryValidatorApiConfig" title="Config" lastUpdated="07 Dec 2020">
      <p>
        All nodes will provide config data detailing their current configuration details. This information is used by
        all other nodes in order to ensure proper connection settings.
      </p>

      <DocEndpoint endpoint="/config" method="GET" />
      <RequestResponseSnippet
        code={`{
  "primary_validator": {
    "account_number": "50853ce6c8cc2e5744042f1be4be5dc51cdf28f0fa60926c161ffa888ea29070",
    "ip_address": "20.188.56.203",
    "node_identifier": "feb7597c998f47582c83dcd0befcb6560693164f9d3c116c3a01fe624e495bd9",
    "port": null,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": 1,
    "root_account_file": "http://20.188.56.203/media/root_account_file.json",
    "root_account_file_hash": "b2885f94cd099a8c5ba5355ff9cdd69252b4cad2541e32d20152702397722cf5",
    "seed_block_identifier": "",
    "daily_confirmation_rate": 5,
    "trust": "100.00"
  },
  "account_number": "1a105575c681c5c4bbd9e88a90346f356051646dcee254afd5fdc67782cc6e56",
  "ip_address": "20.188.33.93",
  "node_identifier": "4a02e9e03ca6f2e64fe8dc675da73e31b8112e435439189012944f0b7adebf50",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "root_account_file": "http://20.188.33.93/media/root_account_file.json",
  "root_account_file_hash": "b2885f94cd099a8c5ba5355ff9cdd69252b4cad2541e32d20152702397722cf5",
  "seed_block_identifier": "",
  "daily_confirmation_rate": 100,
  "node_type": "PRIMARY_VALIDATOR"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default PrimaryValidatorApiConfig;
