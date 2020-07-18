import React from 'react';
import {NavLink} from 'react-router-dom';

import ParamsTable from 'components/ParamsTable';
import RequestResponse from 'components/RequestResponse';

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

    <p>
      More information about the confirmation process can be found in the{' '}
      <NavLink to="/guide/confirmation-services">Confirmation Services</NavLink> section of the guide.
    </p>

    <h2 className="endpoint">GET /confirmation_blocks</h2>
    <RequestResponse
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
    <RequestResponse
      code={`{
  "block_identifier": "65ae26192dfb9ec41f88c6d582b374a9b42ab58833e1612452d7a8f685dcd4d5",
  "message": {
    "block": {
      "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
      "signature": "194308c4e6df46e17fa0b4fd2f460727d7a93eb622d2071a4aa53923f8fc5b88a750bd20eafe119cdb6f7e554dcb52c96b1a6d02ec614d3cefb2118bc4ea1d0d",
      "txs": [
        {
          "amount": 2,
          "balance_key": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
          "recipient": "bank_001"
        },
        {
          "amount": 2,
          "balance_key": "dd131b8345f7e1b4b1f61106058fc8ae037e8ee8529acc444fa7d1c189f8cfc6",
          "recipient": "validator_001"
        }
      ]
    },
    "updated_balances": []
  },
  "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
  "signature": "9fb251dc4952ffcd35d52718558885e766f90821893eef9e940200a7a3c4bb40f6eb74d8a6e8b362e596c8d398480b0979993de588e1e5b034f34a50644a3503"
}`}
      heading="Request (Validator > Bank)"
    />
  </div>
);

export default ConfirmationBlocks;
