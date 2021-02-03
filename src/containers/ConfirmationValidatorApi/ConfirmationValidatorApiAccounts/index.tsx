import React, {FC} from 'react';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiAccounts: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiAccounts" title="Accounts" lastUpdated="15 Jan 2021">
      <p>
        The confirmation validators will maintain the account numbers, balances and balance locks for all accounts on
        the network.
      </p>

      <DocEndpoint endpoint="/accounts" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="accounts" />
      <RequestResponseSnippet
        code={`{
  "count": 352,
  "next": "http://54.183.17.224/accounts?limit=50&offset=50",
  "previous": null,
  "results": [
    {
      "id": "4cb1cdbe-ebbf-43c8-9f86-826aaa2af250",
      "account_number": "9bfa37627e2dba0ae48165b219e76ceaba036b3db8e84108af73a1cce01fad35",
      "balance": 6,
      "balance_lock": "749f6faa4eeeda50f51334e903a1eaae084435d53d2a85fb0993a518fef27273"
    },
    {
      "id": "9c6dd61a-438c-4a95-b1d2-33f90bd7f6ad",
      "account_number": "2e86f48216567302527b69eae6c6a188097ed3a9741f43cc3723e570cf47644c",
      "balance": 460,
      "balance_lock": "aca94f4d2f472c6b9b662f60aab247b9c6aef2079d63b870e2cc02308a7c822b"
    }
  ]
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/accounts/<account_number>/balance" method="GET" />
      <RequestResponseSnippet
        code={`{
  "balance": 6
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/accounts/<account_number>/balance_lock" method="GET" />
      <RequestResponseSnippet
        code={`{
  "balance_lock": "749f6faa4eeeda50f51334e903a1eaae084435d53d2a85fb0993a518fef27273"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiAccounts;
