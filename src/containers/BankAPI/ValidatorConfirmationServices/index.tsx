import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './ValidatorConfirmationServices.scss';

const ValidatorConfirmationServices = () => {
  return (
    <section className="Validator Confirmation Services">
      <h1 className="page-title">Validator Confirmation Services</h1>
      <p>
        Validator confirmation services represent an agreement between a confirmation validator and a bank. They state
        that the confirmation validator will sign and send all confirmed blocks to the bank for a specified period of
        time.
      </p>
      <p>
        When a bank wishes to purchase confirmation services from a confirmation validator, the bank will simply send a
        transaction to the confirmation validator for any amount. Since the confirmation validators confirm all blocks
        on the network, upon receiving this payment it is implied that the sending account number (if a connected bank)
        is purchasing confirmation services. The confirmation validator will create the ValidatorConfirmationService
        object by making a POST request to the bank. This way, both nodes will be aware that the payment has been
        received and the agreement has been accepted.
      </p>

      <h2 className="endpoint">GET /validator_confirmation_services</h2>
      <RequestResponse
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
    </section>
  );
};

export default ValidatorConfirmationServices;
