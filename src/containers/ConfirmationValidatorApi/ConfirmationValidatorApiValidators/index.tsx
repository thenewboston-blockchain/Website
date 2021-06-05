import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const ConfirmationValidatorApiValidators: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiValidators" title="Validators" lastUpdated="3 Apr 2021">
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

      <DocEndpoint endpoint="/validators/<node_identifier>" method="PATCH" />
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
    "trust": 12.00
  },
  "node_identifier": "35f4c988f425809ca7f5d0b319cdf8f7d7aba1b064fd0efc85d61fa0f4d05145",
  "signature": "93952df29ae3885fd9c9f88721314236bdb53ca5632b2959dcf5cf3c38cb8b96ca57ff84c5337eb164f803237f901abcb0c41a9f71e14aa2fb3159c7ad7a7509"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "account_number": "d62165ea6102a74fd484176226cd6ed8f7fc779117138e3ee2d9881ff4fc5a04",
  "ip_address": "144.126.219.17",
  "node_identifier": "38ce9d9a245b2c5c923b1a6e8bbf5324a8cd57d71c977aef6a457740d7fd6451",
  "port": 80,
  "protocol": "http",
  "version": "v1.4",
  "default_transaction_fee": 1,
  "root_account_file": "http://144.126.219.17:80/media/root_account_file.json",
  "root_account_file_hash": "ab9b95e5bb1dc66dd57ebf2cb8a8dece41748389d68077f74c916659f4bd2f1b",
  "seed_block_identifier": "",
  "daily_confirmation_rate": 1,
  "trust": "12.00"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiValidators;
