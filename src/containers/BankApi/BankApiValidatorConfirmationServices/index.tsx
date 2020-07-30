import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const BankApiValidatorConfirmationServices: FC = () => {
  return (
    <DocContainer className="BankApiValidatorConfirmationServices" title="Validator Confirmation Services">
      <p>
        Validator confirmation services represent an agreement between a confirmation validator and a bank. They state
        that the confirmation validator will sign and send all confirmed blocks to the bank for a specified period of
        time.
      </p>
      <p>
        More information about the confirmation process can be found in the{' '}
        <NavLink to="/guide/confirmation-services">Confirmation Services</NavLink> section of the guide.
      </p>

      <DocEndpoint endpoint="/validator_confirmation_services" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "id": "be9fbc3b-d4df-43d5-9bea-9882a6dd27f6",
    "created_date": "2020-07-09T22:10:35.312956Z",
    "modified_date": "2020-07-09T22:10:37.393578Z",
    "end": "2020-08-09T22:10:24Z",
    "start": "2020-07-09T22:10:25Z",
    "validator": "51461a75-dd8d-4133-81f4-543a3b054149"
  },
  {
    "id": "e2055637-67ff-4479-aec6-a8095d513862",
    "created_date": "2020-07-09T22:10:35.312956Z",
    "modified_date": "2020-07-09T22:10:37.393578Z",
    "end": "2020-08-09T22:10:24Z",
    "start": "2020-07-09T22:10:25Z",
    "validator": "10308b02-d577-484e-953c-0a2bdb5e3d83"
  }
]`}
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
      <RequestResponseSnippet
        code={`{
  "message": {
    "end": "2020-07-09T22:10:25Z",
    "start": "2020-08-09T22:10:25Z"
  },
  "node_identifier": "59479a31c3b91d96bb7a0b3e07f18d4bf301f1bb0bde05f8d36d9611dcbe7cbf",
  "signature": "2a4b90e97566d4c46cb302e8297841ebe0b9f5ce6f30217721dedb4bfdc48944d14f46032e33246b6a60a942bc48fd9541057b7b1c635d4346436deab9f4bf01"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "id": "2558fd55-e132-4667-8d39-d3b5e8eb9c4d",
  "created_date": "2020-07-10T02:38:44.917554Z",
  "modified_date": "2020-07-10T02:38:44.917601Z",
  "end": "2020-07-09T22:10:25Z",
  "start": "2020-08-09T22:10:25Z",
  "validator": "fcd2dce8-9e4f-4bf1-8dac-cdbaf64e5ce8"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiValidatorConfirmationServices;
