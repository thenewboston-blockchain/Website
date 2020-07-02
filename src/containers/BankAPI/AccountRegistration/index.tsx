import React from 'react';

import ParamsTable from 'components/ParamsTable';
import RequestResponse from 'components/RequestResponse';

import bankToValidatorRequest from './code-snippets/bank-to-validator-request';
import clientToBankRequest from './code-snippets/client-to-bank-request';
import clientToBankResponse from './code-snippets/client-to-bank-response';

import './AccountRegistration.scss';

const AccountRegistration = () => (
  <div className="AccountRegistration">
    <h1 className="page-title">Account Registration</h1>
    <p>
      Users are required to register their account(s) with a bank before they are able to send transactions through that
      bank.
    </p>

    <h2 className="endpoint">POST /account_registrations</h2>
    <ParamsTable
      items={[
        {
          param: 'account_number',
          dataType: 'string',
          description: 'account number of the registering account',
        },
        {
          param: 'message',
          dataType: 'object',
          description: 'balance key for the account_number and Txs for bank registration fee and validator Tx fee',
        },
        {
          param: 'signature',
          dataType: 'string',
          description: 'hex value of the signed message',
        },
      ]}
    />

    <RequestResponse code={clientToBankRequest} heading="Request (client > Bank)" />
    <RequestResponse code={clientToBankResponse} heading="Response (Bank > client)" />
    <p>
      Upon successful account registration, the bank will create a bank block with the given data and send it to the
      validator for validation. After successful validation, the validator will send a confirmation block back to the
      bank and the bank will create the account and update the account registration status to accepted.
    </p>
    <RequestResponse code={bankToValidatorRequest} heading="Request (Bank > Validator)" />
  </div>
);

export default AccountRegistration;
