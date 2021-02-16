import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet} from 'components';

const BankApiBankTransactions: FC = () => {
  return (
    <DocContainer className="BankApiBankTransactions" title="Bank Transactions" lastUpdated="15 Jan 2021">
      <p>
        Bank transactions represent a single transaction within a block. They reference both the recipient account and
        the parent block. Bank transactions are stored separate from the block due to the fact that when viewing an
        individual account, the unrelated transactions (fees) that were paid are not needed. This allows for better
        performance also prevents unnecessary data from being sent over the network.
      </p>
      <p>Bank transactions are created automatically by the bank during block processing.</p>

      <DocEndpoint endpoint="/bank_transactions" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="bank transactions" />
      <RequestResponseSnippet
        code={`{
  "count": 2116,
  "next": "http://143.110.137.54/bank_transactions?limit=2&offset=52",
  "previous": "http://143.110.137.54/bank_transactions?limit=2&offset=48",
  "results": [
    {
      "id": "a7fb060d-e442-4dd4-8604-3b0e67f691aa",
      "block": {
        "id": "167707b6-ad59-4b59-9bae-875b0cd604e0",
        "created_date": "2020-11-20T08:11:05.091231Z",
        "modified_date": "2020-11-20T08:11:05.091279Z",
        "balance_key": "2088e602b6b742ff9d47495730a22e03841f46accd911541c413b7ef421a62f9",
        "sender": "f0fe0fdff41db888a0938882502ee809f6874c015aa09e11e38c8452d4175535",
        "signature": "74508c8a2ca9810938b10443862d2f875375f6e67a9472e5ffcb03dd51d35c485dbf91577a0978e05825c7c2a7a4fcc15623d0573fe48f980c7ccf5e7d55b304"
      },
      "amount": 1,
      "recipient": "dfddf07ec15cbf363ecb52eedd7133b70b3ec896b488460bcecaba63e8e36be5"
    },
    {
      "id": "14330e7d-729a-4f22-b277-28d368ac46cc",
      "block": {
        "id": "74b9d153-aca8-46b0-9c82-55a1e0dd4958",
        "created_date": "2020-11-20T07:43:34.261742Z",
        "modified_date": "2020-11-20T07:43:34.261789Z",
        "balance_key": "e9321848d3f496bd4a5713b892c0a2c229c64b5a5fa2d2f56f33f3bd6aea5d80",
        "sender": "addf211d203c077bc5c6b78f41ddc68481804539de4bd3fd736fa853514551c0",
        "signature": "19726b9acc9b77fd5a8f1828e27f7b81db22d9ed3c8f1f267aaddbe1573bfbcfa80fe95bfb88b7f1d54e5736039760762723a6c017e3af9e92d4ef609b850406"
      },
      "amount": 1,
      "recipient": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c"
    }
  ]
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiBankTransactions;
