import React from 'react';

import ParamsTable from 'components/ParamsTable';
import RequestResponse from 'components/RequestResponse';

import BankRegistrations from './BankRegistrations.png';

import './BankRegistration.scss';

import code from './code-snippets/code-snippet';

const BankRegistration = () => (
  <div className="BankRegistration">
    <h1 className="page-title">Bank Registration</h1>
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
      <img alt="bank registrations" className="bank-registrations" src={BankRegistrations} />
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
    <RequestResponse code={code} heading="Request (Bank > Validator)" />
  </div>
);

export default BankRegistration;
