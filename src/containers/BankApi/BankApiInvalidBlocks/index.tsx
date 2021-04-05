import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const BankApiInvalidBlocks: FC = () => {
  return (
    <DocContainer className="BankApiInvalidBlocks" title="Invalid Blocks" lastUpdated="31 Mar 2021">
      <p>
        Invalid blocks are blocks sent from confirmation validators to their banks as an indication that a block that
        had been received from the primary validator was unable to be validated. This may be due to improper formatting,
        an invalid signature, incorrect calculations, or an intentional attempt by the primary validator to cheat the
        system by providing inaccurate account balances.
      </p>
      <p>
        As banks receive these invalid block notices from their confirmation validators, they will automatically
        decrease the trust of their primary validator. The amount by which the primary validators trust is decreased is
        calculated based on the weighted trust of the sending confirmation validator.
      </p>

      <DocEndpoint endpoint="/invalid_blocks" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="invalid blocks" />
      <RequestResponseSnippet
        code={`{
  "count": 234,
  "next": "http://143.110.137.54/invalid_blocks?limit=2&offset=2",
  "previous": null,
  "results": 
  [
    {
      "id": "2bcd53c5-19f9-4226-ab04-3dfb17c3a1fe",
      "created_date": "2020-07-11T18:44:16.518695Z",
      "modified_date": "2020-07-11T18:44:16.518719Z",
      "block_identifier": "65ae26192dfb9ec41f88c6d582b374a9b42ab58833e1612452d7a8f685dcd4d5",
      "block": "3ff4ebb0-2b3d-429b-ba90-08133fcdee4e",
      "confirmation_validator": "fcd2dce8-9e4f-4bf1-8dac-cdbaf64e5ce8",
      "primary_validator": "51461a75-dd8d-4133-81f4-543a3b054149"
    },
    {
      "id": "c6fc11cf-8948-4d32-96c9-d56caa6d5b24",
      "created_date": "2020-07-11T19:44:16.518695Z",
      "modified_date": "2020-07-11T19:44:16.518719Z",
      "block_identifier": "5da3758cdd6b2c9d5ed60471f15654622bc5eae047d71d995c0df3180e6097c0",
      "block": "402d5976-cbaa-4d89-b5d7-bddfe0aa5a3d",
      "confirmation_validator": "fcd2dce8-9e4f-4bf1-8dac-cdbaf64e5ce8",
      "primary_validator": "51461a75-dd8d-4133-81f4-543a3b054149"
    },
  ]
}`}
        heading="Response (Bank > client)"
      />

      <DocEndpoint endpoint="/invalid_blocks" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'object',
            description: 'Original block, block identifier, and primary validator NID',
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
        "balance_key": "ce51f0d9facaa7d3e69657429dd3f961ce70077a8efb53dcda508c7c0a19d2e3",
        "txs": [
          {
            "amount": 12.5,
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
      "signature": "ee5a2f2a2f5261c1b633e08dd61182fd0db5604c853ebd8498f6f28ce8e2ccbbc38093918610ea88a7ad47c7f3192ed955d9d1529e7e390013e43f25a5915c0f"
    },
    "block_identifier": "65ae26192dfb9ec41f88c6d582b374a9b42ab58833e1612452d7a8f685dcd4d5",
    "primary_validator_node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521"
  },
  "node_identifier": "59479a31c3b91d96bb7a0b3e07f18d4bf301f1bb0bde05f8d36d9611dcbe7cbf",
  "signature": "c61ef8067307f8a48979a656699709e415692eb7b7b0083e3cd41da4ff6cb388e7347896b5cacb0a74200390d228b30547f73a72029ebd4ed10482db5e925b0c"
}`}
        heading="Request (Validator > Bank)"
      />

      <RequestResponseSnippet
        code={`{
  "id": "2bcd53c5-19f9-4226-ab04-3dfb17c3a1fe",
  "created_date": "2020-07-11T18:44:16.518695Z",
  "modified_date": "2020-07-11T18:44:16.518719Z",
  "block_identifier": "65ae26192dfb9ec41f88c6d582b374a9b42ab58833e1612452d7a8f685dcd4d5",
  "block": "3ff4ebb0-2b3d-429b-ba90-08133fcdee4e",
  "confirmation_validator": "fcd2dce8-9e4f-4bf1-8dac-cdbaf64e5ce8",
  "primary_validator": "51461a75-dd8d-4133-81f4-543a3b054149"
}`}
        heading="Response (Bank > Validator)"
      />
    </DocContainer>
  );
};

export default BankApiInvalidBlocks;
