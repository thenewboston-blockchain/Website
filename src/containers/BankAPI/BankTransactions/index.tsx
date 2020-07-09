import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './BankTransactions.scss';

const BankTransactions = () => {
  return (
    <section className="BankTransactions">
      <h1 className="page-title">Bank Transactions</h1>
      <p>
        Bank transactions represent a single transaction within a block. They reference both the recipient account and
        the parent block. Bank transactions are stored separate from the block due to the fact that when viewing an
        individual account, the unrelated transactions (fees) that were paid are not needed. This allows for better
        performance also prevents unnecessary data from being sent over the network.
      </p>
      <p>Bank transactions are created automatically by the bank during block processing.</p>

      <h2 className="endpoint">GET /bank_transactions</h2>
      <RequestResponse
        code={`[
  {
    "id": "b8903b26-3d54-4f2e-8c1b-de361b3a8b07",
    "amount": "2.3500000000000000",
    "recipient": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
    "block": "c1ad29ef-7342-4bf2-9e8c-f31379b4dcee"
  },
  {
    "id": "b3940419-1405-4486-b199-8c4ad3d2cdd3",
    "amount": "1.0000000000000000",
    "recipient": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
    "block": "c1ad29ef-7342-4bf2-9e8c-f31379b4dcee"
  },
  {
    "id": "89b810bb-7afa-49d0-bc31-fdef7ddfd7a0",
    "amount": "4.0000000000000000",
    "recipient": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
    "block": "c1ad29ef-7342-4bf2-9e8c-f31379b4dcee"
  }
]`}
        heading="Response"
      />
    </section>
  );
};

export default BankTransactions;
