import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet} from 'components';

const PrimaryValidatorApiValidators: FC = () => {
  return (
    <DocContainer className="PrimaryValidatorApiValidators" title="Validators" lastUpdated="15 Jan 2021">
      <p>
        The primary validator will maintain a record of all validators on the network. The primary validator will also
        send confirmation blocks to all connected confirmation validators for re-validation after a block has been
        validated and added to the blockchain.
      </p>

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
      "root_account_file": "https://gist.githubusercontent.com/buckyroberts/0688f136b6c1332be472a8baf10f78c5/raw/323fcd29672e392be2b934b82ab9eac8d15e840f/alpha-00.json",
      "root_account_file_hash": "0f775023bee79884fbd9a90a76c5eacfee38a8ca52735f7ab59dab63a75cbee1",
      "seed_block_identifier": "",
      "daily_confirmation_rate": null,
      "trust": "0.00"
    },
    {
      "account_number": "d5c4db217c032ef21df84be4201766b73e623940ce6d95aedf153da2f8c38626",
      "ip_address": "54.67.72.197",
      "node_identifier": "61dbf00c2dd7886f01fda60aca6fffd9799f4612110fe804220570add6b28923",
      "port": null,
      "protocol": "http",
      "version": "v1.0",
      "default_transaction_fee": 1,
      "root_account_file": "https://gist.githubusercontent.com/buckyroberts/0688f136b6c1332be472a8baf10f78c5/raw/323fcd29672e392be2b934b82ab9eac8d15e840f/alpha-00.json",
      "root_account_file_hash": "0f775023bee79884fbd9a90a76c5eacfee38a8ca52735f7ab59dab63a75cbee1",
      "seed_block_identifier": "",
      "daily_confirmation_rate": null,
      "trust": "0.00"
    }
  ]
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/validators/<node_identifier>" method="GET" />
      <RequestResponseSnippet
        code={`{
  "account_number": "d5c4db217c032ef21df84be4201766b73e623940ce6d95aedf153da2f8c38626",
  "ip_address": "54.67.72.197",
  "node_identifier": "61dbf00c2dd7886f01fda60aca6fffd9799f4612110fe804220570add6b28923",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "root_account_file": "https://gist.githubusercontent.com/buckyroberts/0688f136b6c1332be472a8baf10f78c5/raw/323fcd29672e392be2b934b82ab9eac8d15e840f/alpha-00.json",
  "root_account_file_hash": "0f775023bee79884fbd9a90a76c5eacfee38a8ca52735f7ab59dab63a75cbee1",
  "seed_block_identifier": "",
  "daily_confirmation_rate": null,
  "trust": "0.00"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default PrimaryValidatorApiValidators;
