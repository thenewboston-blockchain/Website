import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const ConfirmationValidatorApiUpgradeRequest: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiUpgradeRequest" title="Upgrade Request" lastUpdated="31 Mar 2021">
      <p>
        When a bank alters the trust levels of their validators, if the results indicate that there are now confirmation
        validators that are more trusted than the bank's primary validator, the bank will send out a request to the
        confirmation validators requesting one of them to upgrade to a primary validator. This is because the banks
        always prefer the most trusted validator to be the primary validator for the network.
      </p>

      <DocEndpoint endpoint="/upgrade_request" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'Node identifier of confirmation validator receiving the request',
            param: 'validator_node_identifier',
          },
          {
            dataType: 'string',
            description: 'Banks node identifier',
            param: 'node_identifier',
          },
          {
            dataType: 'string',
            description: 'Hex value of the signed message',
            param: 'signature',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "validator_node_identifier": "2262026a562b0274163158e92e8fbc4d28e519bc5ba8c1cf403703292be84a51"
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "90a365d1950b1765b973d3d21d763f9bea7eb1f9d1f33d6e9c3f8eb4803022f97ad3173474707b4786e556cccf4ca0a0e81d18edb655b090967c96c22c40140a"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "primary_validator": {
    "account_number": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c",
    "ip_address": "54.183.17.224",
    "node_identifier": "2262026a562b0274163158e92e8fbc4d28e519bc5ba8c1cf403703292be84a51",
    "port": 1337,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": 1,
    "root_account_file": "http://54.183.17.224/media/root_account_file.json",
    "root_account_file_hash": "cc9390cc579dc8a99a1f34c1bea5d54a0f45b27ecee7e38662f0cd853f76744d",
    "seed_block_identifier": "",
    "daily_confirmation_rate": null,
    "trust": 100.0
  },
  "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
  "ip_address": "54.219.178.46",
  "node_identifier": "b82a2fac55dd39f667a53157c68100ba856d07272f21e62b54155a5200415ff6",
  "port": 1337,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "root_account_file": "http://70.79.52.191:1337/media/root_account_file.json",
  "root_account_file_hash": "cc9390cc579dc8a99a1f34c1bea5d54a0f45b27ecee7e38662f0cd853f76744d",
  "seed_block_identifier": "",
  "daily_confirmation_rate": null,
  "node_type": "PRIMARY_VALIDATOR"
}`}
        heading="Response"
      />
      <TableParams
        items={[
          {
            dataType: 'OK',
            description: 'Accepted the request and upgraded to a Primary Validator',
            param: '200',
          },
          {
            dataType: 'Bad Request',
            description: 'Rejected the request',
            param: '400',
          },
        ]}
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiUpgradeRequest;
