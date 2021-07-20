import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, QueryParamsOffsetAndLimit, RequestResponseSnippet, TableParams} from 'components';

const BankApiAccounts: FC = () => {
  return (
    <DocContainer className="BankApiAccounts" title="Accounts" lastUpdated="31 Mar 2021">
      <p>
        Banks will store information of all accounts that have sent blocks through them. Banks will also assign a trust
        level to each account they are tracking in order to determine future transactions fees. More trusted accounts
        generally pay lower transaction fees.
      </p>
      <p>
        For more information, see <NavLink to="/guide/accounts">Accounts</NavLink>.
      </p>

      <DocEndpoint endpoint="/accounts" method="GET" />
      <QueryParamsOffsetAndLimit returnedEntityName="accounts" />
      <RequestResponseSnippet
        code={`{
  "count": 87,
  "next": "http://143.110.137.54/accounts?limit=2&offset=2",
  "previous": null,
  "results": [
    {
      "id": "5a8c7990-393a-4299-ae92-2f096a2c7f43",
      "created_date": "2020-10-08T02:18:07.346849Z",
      "modified_date": "2020-10-08T02:18:07.346914Z",
      "account_number": "a37e2836805975f334108b55523634c995bd2a4db610062f404510617e83126f",
      "trust": "0.00"
    },
    {
      "id": "2682963f-06b1-47d7-a2e1-1f8ec6ae98dc",
      "created_date": "2020-10-08T02:39:44.071810Z",
      "modified_date": "2020-10-08T02:39:44.071853Z",
      "account_number": "cc8fb4ebbd2b9a98a767e801ac2b0d296ced88b5d3b7d6d6e12e1d2d7635d724",
      "trust": "0.00"
    }
  ]
}`}
        heading="Response"
      />
      <DocEndpoint endpoint="/accounts/<account_number>" method="PATCH" />
      <TableParams
        items={[
          {
            dataType: 'decimal',
            description: 'Amount of trust',
            param: 'trust',
          },
        ]}
      />
      <RequestResponseSnippet
        code={`{
  "message": {
    "trust": 99.98
  },
  "node_identifier": "d5356888dc9303e44ce52b1e06c3165a7759b9df1e6a6dfbd33ee1c3df1ab4d1",
  "signature": "f41788fe19690a67abe3336d4ca84565c090691efae0e5cdd8bf02e126842215080405013b8461f734d091e673e9edefca53a51773fda59bbebcef77ab8e2901"
}`}
        heading="Request"
      />
      <RequestResponseSnippet
        code={`{
  "id": "64426fc5-b3ac-42fb-b75b-d5ccfcdc6872",
  "created_date": "2020-07-14T02:59:22.204580Z",
  "modified_date": "2020-07-21T00:58:01.013685Z",
  "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
  "trust": "99.98"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default BankApiAccounts;
