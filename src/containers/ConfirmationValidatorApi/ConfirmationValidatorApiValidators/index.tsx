import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiValidators: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiValidators" title="Validators" lastUpdated="15 Jan 2021">
      <p>Confirmation validators will maintain a record of all connected validators.</p>

      <DocEndpoint endpoint="/validators" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="validators" />
      <RequestResponseSnippet
        code={`{
  "count": 10,
  "next": "http://54.219.178.46/validators?limit=2&offset=6",
  "previous": "http://54.219.178.46/validators?limit=2&offset=2",
  "results": [
    {
      "account_number": "4699a423c455a40feb1d6b90b167584a880659e1bf9adf9954a727d534ff0c16",
      "ip_address": "54.219.178.46",
      "node_identifier": "b1b232503b3db3975524faf98674f22c83f4357c3d946431b8a8568715d7e1d9",
      "port": null,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "root_account_file": "http://54.219.178.46/media/root_account_file.json",
      "root_account_file_hash": "cc9390cc579dc8a99a1f34c1bea5d54a0f45b27ecee7e38662f0cd853f76744d",
      "seed_block_identifier": "",
      "daily_confirmation_rate": 1,
      "trust": "100.00"
    },
    {
      "account_number": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c",
      "ip_address": "54.183.17.224",
      "node_identifier": "2262026a562b0274163158e92e8fbc4d28e519bc5ba8c1cf403703292be84a51",
      "port": null,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "root_account_file": "http://54.183.17.224/media/root_account_file.json",
      "root_account_file_hash": "cc9390cc579dc8a99a1f34c1bea5d54a0f45b27ecee7e38662f0cd853f76744d",
      "seed_block_identifier": "",
      "daily_confirmation_rate": null,
      "trust": "100.00"
    }
  ]
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/validators/<node_identifier>" method="GET" />
      <RequestResponseSnippet
        code={`{
  "account_number": "4699a423c455a40feb1d6b90b167584a880659e1bf9adf9954a727d534ff0c16",
  "ip_address": "54.219.178.46",
  "node_identifier": "b1b232503b3db3975524faf98674f22c83f4357c3d946431b8a8568715d7e1d9",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "root_account_file": "http://54.219.178.46/media/root_account_file.json",
  "root_account_file_hash": "cc9390cc579dc8a99a1f34c1bea5d54a0f45b27ecee7e38662f0cd853f76744d",
  "seed_block_identifier": "",
  "daily_confirmation_rate": 1,
  "trust": "100.00"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiValidators;
