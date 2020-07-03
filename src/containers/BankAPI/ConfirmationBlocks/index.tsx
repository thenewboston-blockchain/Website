import React from 'react';

import ParamsTable from 'components/ParamsTable';
import RequestResponse from 'components/RequestResponse';

import clientToBankResponse from './code-snippets/client-to-bank-response';
import validatorToBankRequest from './code-snippets/validator-to-bank-request';

import './ConfirmationBlocks.scss';

const ConfirmationBlocks = () => (
  <div className="ConfirmationBlocks">
    <h1 className="page-title">Confirmation Blocks</h1>
    <p>
      Confirmation blocks are blocks that have been signed by a validator as confirmation that it has been added to
      their blockchain. The general flow from bank account to confirmation block is as follows:
    </p>

    <ol>
      <li>Accounts will send transactions to their bank</li>
      <li>
        The bank will create a bank block from the received transactions and send that bank block to the validator
      </li>
      <li>After successful validation, the validator will send a confirmation block back to the bank</li>
    </ol>

    <h2 className="endpoint">GET /confirmation_blocks</h2>
    <RequestResponse code={clientToBankResponse} heading="Response (Bank > client)" />

    <h2 className="endpoint">POST /confirmation_blocks</h2>
    <ParamsTable
      items={[
        {
          param: 'block_identifier',
          dataType: 'string',
          description: 'hashed head block of the validators blockchain',
        },
        {
          param: 'message',
          dataType: 'object',
          description: 'original bank block and a list of updated account balances of all accounts involved',
        },
        {
          param: 'node_identifier',
          dataType: 'string',
          description: 'validators node identifier',
        },
        {
          param: 'signature',
          dataType: 'string',
          description: 'hex value of the signed message',
        },
      ]}
    />
    <RequestResponse code={validatorToBankRequest} heading="Request (Validator > Bank)" />
  </div>
);

export default ConfirmationBlocks;
