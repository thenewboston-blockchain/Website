import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiConfirmationBlocks: FC = () => {
  return (
    <DocContainer
      className="ConfirmationValidatorApiConfirmationBlocks"
      title="Confirmation Blocks"
      lastUpdated="07 Dec 2020"
    >
      <p>
        Primary validators will send confirmation blocks to confirmation validators for re-validation after a block has
        been added to the blockchain.
      </p>

      <DocEndpoint endpoint="/confirmation_blocks" method="POST" />
      <RequestResponseSnippet
        code={`{
  "message": {
    "block": {
      "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "message": {
        "balance_key": "e6a41b658e17ab2db4355176c8160de6a66b07e5cbdd85244b55b38b4fd26e92",
        "txs": [
          {
            "amount": 60,
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
        "balance": 4294967014,
        "balance_lock": "729ce6ce619aeedf260221c7687c51d8a6845fbb5407b11c8cd26eaa7c8a6125"
      },
      {
        "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
        "balance": 191
      },
      {
        "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
        "balance": 18
      },
      {
        "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
        "balance": 72
      }
    ]
  },
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "signature": "b4d335fa7662216acba06c18d93c6cfb688c8057cbe9193ddc8e6fb3702ba1d979e43b09e06c6c7c38358bbee5243dc37a52c5212298c2259be48285e3da130c"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "block": {
    "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
    "message": {
      "balance_key": "e6a41b658e17ab2db4355176c8160de6a66b07e5cbdd85244b55b38b4fd26e92",
      "txs": [
        {
          "amount": 60,
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
      "balance": 4294967014,
      "balance_lock": "729ce6ce619aeedf260221c7687c51d8a6845fbb5407b11c8cd26eaa7c8a6125"
    },
    {
      "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
      "balance": 191
    },
    {
      "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
      "balance": 18
    },
    {
      "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
      "balance": 72
    }
  ]
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/confirmation_blocks/<block_identifier>/queued" method="GET" />
      <RequestResponseSnippet
        code={`{
  "message": {
    "block": {
      "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "message": {
        "balance_key": "e6a41b658e17ab2db4355176c8160de6a66b07e5cbdd85244b55b38b4fd26e92",
        "txs": [
          {
            "amount": 60,
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
        "balance": 4294967014,
        "balance_lock": "729ce6ce619aeedf260221c7687c51d8a6845fbb5407b11c8cd26eaa7c8a6125"
      },
      {
        "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
        "balance": 191
      },
      {
        "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
        "balance": 18
      },
      {
        "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
        "balance": 72
      }
    ]
  },
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "signature": "b4d335fa7662216acba06c18d93c6cfb688c8057cbe9193ddc8e6fb3702ba1d979e43b09e06c6c7c38358bbee5243dc37a52c5212298c2259be48285e3da130c"
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/confirmation_blocks/<block_identifier>/valid" method="GET" />
      <RequestResponseSnippet
        code={`{
  "message": {
    "block": {
      "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "message": {
        "balance_key": "e6a41b658e17ab2db4355176c8160de6a66b07e5cbdd85244b55b38b4fd26e92",
        "txs": [
          {
            "amount": 60,
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
        "balance": 4294967014,
        "balance_lock": "729ce6ce619aeedf260221c7687c51d8a6845fbb5407b11c8cd26eaa7c8a6125"
      },
      {
        "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
        "balance": 191
      },
      {
        "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
        "balance": 18
      },
      {
        "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
        "balance": 72
      }
    ]
  },
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "signature": "b4d335fa7662216acba06c18d93c6cfb688c8057cbe9193ddc8e6fb3702ba1d979e43b09e06c6c7c38358bbee5243dc37a52c5212298c2259be48285e3da130c"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiConfirmationBlocks;
