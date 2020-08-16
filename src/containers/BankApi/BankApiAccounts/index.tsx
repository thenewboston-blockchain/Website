import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocEndpoint, RequestResponseSnippet, TableParams} from 'components';

const BankApiAccounts: FC = () => {
  return (
    <DocContainer className="BankApiAccounts" title="Accounts">
      <p>
        Banks will store information of all accounts that have sent blocks through them. Banks will also assign a trust
        level to each account they are tracking in order to determine future transactions fees. More trusted accounts
        generally pay lower transaction fees.
      </p>
      <p>
        More information about account can be found in the <NavLink to="/guide/accounts">Accounts</NavLink> section of
        the guide.
      </p>

      <DocEndpoint endpoint="/accounts" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "id": "9eca00a5-d925-454c-a8d6-ecbb26ec2f76",
    "created_date": "2020-07-08T02:14:59.307535Z",
    "modified_date": "2020-07-08T02:14:59.307553Z",
    "account_number": "4d2ec91f37bc553bc538e91195669b666e26b2ea3e4e31507e38102a758d4f86",
    "trust": "75.21"
  },
  {
    "id": "ae4d43b0-5c34-4e56-8266-0e3531268815",
    "created_date": "2020-07-08T02:15:12.271834Z",
    "modified_date": "2020-07-08T02:15:12.271852Z",
    "account_number": "a29baa6ba36f6db707f8f8dacfa82d5e8a28fa616e8cc96cf6d7790f551d79f2",
    "trust": "94.63"
  }
]`}
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
