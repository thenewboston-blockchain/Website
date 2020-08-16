import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const BankApiValidators: FC = () => {
  return (
    <DocContainer className="BankApiValidators" title="Validators">
      <p>Banks will maintain a record of all validators, both primary and confirmation, that they are connected to.</p>
      <p>
        More information about validators can be found in the <NavLink to="/guide/validators">Validators</NavLink>{' '}
        section of the guide.
      </p>

      <DocEndpoint endpoint="/validators" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
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
  {
    "account_number": "4d2ec91f37bc553bc538e91195669b666e26b2ea3e4e31507e38102a758d4f86",
    "ip_address": "86.168.1.23",
    "node_identifier": "59479a31c3b91d96bb7a0b3e07f18d4bf301f1bb0bde05f8d36d9611dcbe7cbf",
    "port": 80,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "2.0000000000000000",
    "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
    "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
    "seed_block_identifier": "",
    "daily_confirmation_rate": "1.2000000000000000",
    "trust": "91.56"
  }
]`}
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
    "trust": 76.28
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "b9106148b9c6d445f6a5fe7bb54b552ac2ff639cb72e2af70f7565904120dbb2040987c6cad559d7aa3b507c8d475af9291e4faee4930b324996c7a3c0696805"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
  "ip_address": "192.168.1.75",
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "port": null,
  "protocol": "http",
  "version": "v1.0",
  "default_transaction_fee": "4.0000000000000000",
  "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
  "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
  "seed_block_identifier": "",
  "daily_confirmation_rate": null,
  "trust": "76.28"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiValidators;
