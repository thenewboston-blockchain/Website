import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const BankApiBankTransactions: FC = () => {
  return (
    <DocContainer className="BankApiBankTransactions" title="Bank Transactions">
      <p>
        Bank transactions represent a single transaction within a block. They reference both the recipient account and
        the parent block. Bank transactions are stored separate from the block due to the fact that when viewing an
        individual account, the unrelated transactions (fees) that were paid are not needed. This allows for better
        performance also prevents unnecessary data from being sent over the network.
      </p>
      <p>Bank transactions are created automatically by the bank during block processing.</p>

      <DocEndpoint endpoint="/bank_transactions" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "id": "a85a4692-e03d-4419-8b25-813598b367bd",
    "block": {
      "id": "e00c5522-1b73-4a46-bd03-629d446eec19",
      "created_date": "2020-07-14T03:14:36.436771Z",
      "modified_date": "2020-07-14T03:14:36.436796Z",
      "balance_key": "efa253d24ee516fe5ed45bb4e47a3146026e97f766df1cdb13663ec62174e214",
      "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "signature": "a1bbd321ad6d3f74f027de5a2c19457779fe1466708c2ea3dc9bf993a4048471025928cabcea934cf681930657ff661f05452f34630e5ea45d962e828899af00"
    },
    "amount": "12.5000000000000000",
    "recipient": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc"
  },
  {
    "id": "9273bcdb-61c9-4bc3-91c8-ebc4c2fe5894",
    "block": {
      "id": "e00c5522-1b73-4a46-bd03-629d446eec19",
      "created_date": "2020-07-14T03:14:36.436771Z",
      "modified_date": "2020-07-14T03:14:36.436796Z",
      "balance_key": "efa253d24ee516fe5ed45bb4e47a3146026e97f766df1cdb13663ec62174e214",
      "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "signature": "a1bbd321ad6d3f74f027de5a2c19457779fe1466708c2ea3dc9bf993a4048471025928cabcea934cf681930657ff661f05452f34630e5ea45d962e828899af00"
    },
    "amount": "1.0000000000000000",
    "recipient": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8"
  },
  {
    "id": "7f5cf013-f58a-4e80-97aa-f03309b1a4dd",
    "block": {
      "id": "e00c5522-1b73-4a46-bd03-629d446eec19",
      "created_date": "2020-07-14T03:14:36.436771Z",
      "modified_date": "2020-07-14T03:14:36.436796Z",
      "balance_key": "efa253d24ee516fe5ed45bb4e47a3146026e97f766df1cdb13663ec62174e214",
      "sender": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
      "signature": "a1bbd321ad6d3f74f027de5a2c19457779fe1466708c2ea3dc9bf993a4048471025928cabcea934cf681930657ff661f05452f34630e5ea45d962e828899af00"
    },
    "amount": "4.0000000000000000",
    "recipient": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314"
  }
]`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiBankTransactions;
