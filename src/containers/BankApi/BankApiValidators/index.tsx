import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet} from 'components';

const BankApiValidators: FC = () => {
  return (
    <DocContainer className="BankApiValidators" title="Validators" lastUpdated="15 Jan 2021">
      <p>Banks will maintain a record of all validators, both primary and confirmation, that they are connected to.</p>
      <p>
        More information about validators can be found in the <NavLink to="/guide/validators">Validators</NavLink>{' '}
        section of the guide.
      </p>

      <DocEndpoint endpoint="/validators" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="validators" />
      <RequestResponseSnippet
        code={`{
  "count": 10,
  "next": "http://54.219.178.46/validators?limit=2&offset=2",
  "previous": null,
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

export default BankApiValidators;
