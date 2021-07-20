import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const BankApiConfig: FC = () => {
  return (
    <DocContainer className="BankApiConfig" title="Config" lastUpdated="07 Dec 2020">
      <p>
        All nodes will provide config data detailing their current configuration details as well as their primary
        validator selection. This information is used not only by connecting clients but also by all other nodes in
        order to ensure proper connection settings.
      </p>

      <DocEndpoint endpoint="/config" method="GET" />
      <RequestResponseSnippet
        code={`{
  "primary_validator": {
    "account_number": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c",
    "ip_address": "54.183.17.224",
    "node_identifier": "2262026a562b0274163158e92e8fbc4d28e519bc5ba8c1cf403703292be84a51",
    "port": null,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": 1,
    "root_account_file": "https://gist.githubusercontent.com/buckyroberts/0688f136b6c1332be472a8baf10f78c5/raw/323fcd29672e392be2b934b82ab9eac8d15e840f/alpha-00.json",
    "root_account_file_hash": "0f775023bee79884fbd9a90a76c5eacfee38a8ca52735f7ab59dab63a75cbee1",
    "seed_block_identifier": "",
    "daily_confirmation_rate": null,
    "trust": "100.00"
  },
  "account_number": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5",
  "ip_address": "143.110.137.54",
  "node_identifier": "6dbaff44058e630cb375955c82b0d3bd7bc7e20cad93e74909a8951f747fb8a4",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": 1,
  "node_type": "BANK"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiConfig;
