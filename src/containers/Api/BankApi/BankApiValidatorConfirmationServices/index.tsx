import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const BankApiValidatorConfirmationServices: FC = () => {
  return (
    <DocContainer
      className="BankApiValidatorConfirmationServices"
      title="Validator Confirmation Services"
      lastUpdated="15 Jan 2021"
    >
      <p>
        Validator confirmation services represent an agreement between a confirmation validator and a bank. They state
        that the confirmation validator will sign and send all confirmed blocks to the bank for a specified period of
        time.
      </p>

      <DocEndpoint endpoint="/validator_confirmation_services" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="validator confirmation services" />
      <RequestResponseSnippet
        code={`{
  "count": 4,
  "next": "http://54.193.31.159/validator_confirmation_services?limit=2&offset=2",
  "previous": null,
  "results": [
    {
      "id": "b585ee1e-97fa-4014-b215-a16592e3ffeb",
      "created_date": "2020-11-29T07:52:42.860433Z",
      "modified_date": "2020-11-29T07:52:42.860459Z",
      "end": "2021-01-28T07:52:42.831382Z",
      "start": "2020-11-29T07:52:42.831382Z",
      "validator": "699ea481-8235-4669-b612-b9e1f825e3f2"
    },
    {
      "id": "4e23e065-8c7f-4da4-9b2e-b7a759f191f2",
      "created_date": "2020-11-29T07:54:16.302531Z",
      "modified_date": "2020-11-29T07:54:16.302556Z",
      "end": "2020-12-15T07:54:16.233806Z",
      "start": "2020-11-29T07:54:16.233806Z",
      "validator": "0e87bf5a-1b2c-46fc-8d50-89cb383db0f3"
    }
  ]
}`}
        heading="Response"
      />

      <p>
        When a bank wishes to purchase confirmation services from a confirmation validator, the bank will simply send a
        transaction to the confirmation validator for any amount. Since the confirmation validators confirm all blocks
        on the network, upon receiving this payment it is implied that the sending account number (if a connected bank)
        is purchasing confirmation services. The confirmation validator will create the ValidatorConfirmationService
        object by making a POST request to the bank. This way, both nodes will be aware that the payment has been
        received and the agreement has been accepted.
      </p>

      <DocEndpoint endpoint="/validator_confirmation_services" method="POST" />
      <TableParams
        items={[
          {
            dataType: 'string',
            description: 'The start date for validator confirmation services',
            param: 'start',
          },
          {
            dataType: 'string',
            description: 'The end date for validator confirmation services',
            param: 'end',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "start": "2020-12-17T16:01:05.474601",
    "end": "2020-12-19T16:01:05.474612"
  },
  "node_identifier": "eda664301159dac609f047d28b371bfe11837b3a6f86ca5a760cc7b789887c55",
  "signature": "6298bfd14244be036d25767c3bd12be8e4ad593273fe73284ad8438117f2ec3302a94cb5699860840fa7b86614ffcdcba567e4326ae93efe7f94f5a0574d7a0b"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "id": "a6e4f1b5-21ea-464d-ba24-027e48b1c1aa",
  "created_date": "2020-12-17T16:01:05.627955Z",
  "modified_date": "2020-12-17T16:01:05.627982Z",
  "end": "2020-12-19T16:01:05.474612Z",
  "start": "2020-12-17T16:01:05.474601Z",
  "validator": "d79345f0-ea3a-4bcd-9a42-d4cb23133ecc"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiValidatorConfirmationServices;
