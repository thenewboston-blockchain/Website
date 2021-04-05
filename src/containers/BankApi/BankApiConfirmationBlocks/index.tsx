import React, {FC} from 'react';

import {
  DocContainer,
  DocEndpoint,
  DocList,
  QueryParamsOffsetAndLimit,
  RequestResponseSnippet,
  TableParams,
} from 'components';

const BankApiConfirmationBlocks: FC = () => {
  return (
    <DocContainer className="BankApiConfirmationBlocks" title="Confirmation Blocks" lastUpdated="30 Mar 2021">
      <p>
        Confirmation blocks are blocks that have been signed by a validator as confirmation that it has been added to
        their blockchain. The general flow from bank account to confirmation block is as follows:
      </p>

      <DocList variant="ol">
        <li>Accounts will send transactions to their bank</li>
        <li>
          The bank will create a bank block from the received transactions and send that bank block to the validator
        </li>
        <li>After successful validation, the validator will send a confirmation block back to the bank</li>
      </DocList>

      <DocEndpoint endpoint="/confirmation_blocks" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="confirmation blocks" />
      <RequestResponseSnippet
        code={`{
  "count": 1654,
  "next": "http://143.110.137.54/confirmation_blocks?limit=50&offset=50",
  "previous": null,
  "results": [
    {
      "id": "e7c5c2e0-8ed1-4eb3-abd8-97fa2e5ca8db",
      "created_date": "2020-10-08T02:18:07.908635Z",
      "modified_date": "2020-10-08T02:18:07.908702Z",
      "block_identifier": "824614aa97edb391784b17ce6956b70aed31edf741c1858d43ae4d566b2a13ed",
      "block": "c6fc11cf-8948-4d32-96c9-d56caa6d5b24",
      "validator": "e2a138b0-ebe9-47d2-a146-fb4d9d9ca378"
    },
    {
      "id": "78babf4b-74ed-442e-b5ab-7b23345c18f8",
      "created_date": "2020-10-08T02:18:07.998146Z",
      "modified_date": "2020-10-08T02:18:07.998206Z",
      "block_identifier": "824614aa97edb391784b17ce6956b70aed31edf741c1858d43ae4d566b2a13ed",
      "block": "c6fc11cf-8948-4d32-96c9-d56caa6d5b24",
      "validator": "97a878ac-328a-47b6-ac93-be6deee75d94"
    },
    ...
    {
      "id": "7894e41e-140d-4651-879c-25a3bad2640a",
      "created_date": "2020-10-11T23:23:52.112441Z",
      "modified_date": "2020-10-11T23:23:52.112505Z",
      "block_identifier": "2d0436023e6037439f11c7273a8a2a8af7ea9b10bcb4cfd5b839cfbeafa1c282",
      "block": "a3c262de-69dd-4a84-a389-70492ccfed0a",
      "validator": "97a878ac-328a-47b6-ac93-be6deee75d94"
    }
  ]
}`}
        heading="Response (Bank > client)"
      />

      <DocEndpoint endpoint="/confirmation_blocks" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'object',
            description: 'Original bank block and a list of updated account balances of all accounts involved',
            param: 'message',
          },
          {
            dataType: 'string',
            description: 'Validators node identifier',
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
    "block": {
      "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "message": {
        "balance_key": "e6a41b658e17ab2db4355176c8160de6a66b07e5cbdd85244b55b38b4fd26e92",
        "txs": [
          {
            "amount": 4.125,
            "recipient": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc"
          },
          {
            "amount": 1,
            "recipient": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8"
          },
          {
            "amount": 4,
            "recipient": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314"
          }
        ]
      },
      "signature": "d857184b7d3121a8f9dccab09062fafc82dd0fb30a5d53e19ab25a587171bb9c6b33858353cd3ff7ddc1ad2bfc59a885e85827799bcfc082fd048f9bf34bd404"
    },
    "block_identifier": "4c9595b2b661a23e665256d6826ae940bd4ea82bef0c1ba7b3104e40a4c42b91",
    "updated_balances": [
      {
        "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
        "balance": "4294967014.5000000000000000",
        "balance_lock": "729ce6ce619aeedf260221c7687c51d8a6845fbb5407b11c8cd26eaa7c8a6125"
      },
      {
        "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
        "balance": "191.5000000000000000"
      },
      {
        "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
        "balance": "18.0000000000000000"
      },
      {
        "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
        "balance": "72.0000000000000000"
      }
    ]
  },
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "signature": "b4d335fa7662216acba06c18d93c6cfb688c8057cbe9193ddc8e6fb3702ba1d979e43b09e06c6c7c38358bbee5243dc37a52c5212298c2259be48285e3da130c"
}`}
        heading="Request (Validator > Bank)"
      />
    </DocContainer>
  );
};

export default BankApiConfirmationBlocks;
