import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, DocList, RequestResponseSnippet, TableParams} from 'components';

const BankApiConfirmationBlocks: FC = () => {
  return (
    <DocContainer className="BankApiConfirmationBlocks" title="Confirmation Blocks">
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

      <p>
        More information about the confirmation process can be found in the{' '}
        <NavLink to="/guide/confirmation-services">Confirmation Services</NavLink> section of the guide.
      </p>

      <DocEndpoint endpoint="/confirmation_blocks" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "id": 1,
    "created_date": "2020-05-28T23:41:54.749018Z",
    "modified_date": "2020-05-28T23:41:54.749040Z",
    "block_identifier": "65ae26192dfb9ec41f88c6d582b374a9b42ab58833e1612452d7a8f685dcd4d5",
    "block": 1,
    "validator": 1
  }
]`}
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
