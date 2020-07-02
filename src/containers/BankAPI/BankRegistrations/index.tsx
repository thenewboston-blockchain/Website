import React from 'react';

import ParamsTable from 'components/ParamsTable';
import RequestResponse from 'components/RequestResponse';

import bankToValidatorRequest from './code-snippets/bank-to-validator-request';
import bankToValidatorResponse from './code-snippets/bank-to-validator-response';
import validatorToBankRequest from './code-snippets/validator-to-bank-request';
import validatorToBankResponse from './code-snippets/validator-to-bank-response';

import BankRegistrationDiagram from './BankRegistrations.png';

import './BankRegistrations.scss';

const BankRegistrations = () => (
  <div className="BankRegistrations">
    <h1 className="page-title">Bank Registrations</h1>
    <p>
      Banks must register with validators before they are accepted onto the network by that validator. This is done in a
      similar fashion to the registration process between user accounts and banks. To register, banks will pay a
      registration fee to the validator.
    </p>
    <p>
      Rather than sending the registration request directly from client to the validator, the request will be sent
      through the bank. The bank will then forward it along to the validator. The purpose of routing the request through
      the bank is so that the bank can first create a record of the registration.
    </p>

    <div className="img-container">
      <img alt="bank registration diagram" className="bank-registration-diagram" src={BankRegistrationDiagram} />
    </div>

    <h2 className="endpoint">POST /bank_registrations</h2>
    <ParamsTable
      items={[
        {
          param: 'message',
          dataType: 'object',
          description: 'validator_node_identifier to register with and block payment for registration fee',
        },
        {
          param: 'node_identifier',
          dataType: 'string',
          description: 'node identifier of the bank',
        },
        {
          param: 'signature',
          dataType: 'string',
          description: 'hex value of the signed message',
        },
      ]}
    />

    <RequestResponse code={bankToValidatorRequest} heading="Request (Bank > Validator)" />
    <p>
      After receiving the registration request, the validator will create a bank registration which will be initially
      set to "pending". The validator then responds to the bank as confirmation that the request had been received.
    </p>
    <RequestResponse code={bankToValidatorResponse} heading="Response (Validator > Bank)" />
    <p>
      The validator then performs a network background check of the applying bank. During this process, validators will
      check the bank's trust level with other existing banks. Banks must also prove that they are configured properly to
      act as a bank node. This is done through the ability to act as a server by responding properly to network requests
      made from the validator to the bank's IP address. This verification prevents end users from acting as banks by
      sending transactions directly to the validator.
    </p>

    <h2 className="endpoint">{'PATCH /bank_registrations/{id}'}</h2>
    <ParamsTable
      items={[
        {
          param: 'message',
          dataType: 'object',
          description: 'status to indicate the result of the bank registration',
        },
        {
          param: 'node_identifier',
          dataType: 'string',
          description: 'node identifier of the primary validator',
        },
        {
          param: 'signature',
          dataType: 'string',
          description: 'hex value of the signed message',
        },
      ]}
    />

    <RequestResponse code={validatorToBankRequest} heading="Request (Validator > Bank)" />
    <RequestResponse code={validatorToBankResponse} heading="Response (Bank > Validator):" />
  </div>
);

export default BankRegistrations;
