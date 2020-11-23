import React, {FC} from 'react';

import {DocContainer, DocEndpoint, RequestResponseSnippet} from 'components';

const ConfirmationValidatorApiAccounts: FC = () => {
  return (
    <DocContainer className="ConfirmationValidatorApiAccounts" title="Accounts">
      <p>
        The confirmation validators will maintain the account numbers, balances and balance locks for all accounts on
        the network.
      </p>

      <DocEndpoint endpoint="/accounts" method="GET" />
      <RequestResponseSnippet
        code={`[
  {
    "id": "82bb14ab-00eb-41ba-8120-99ba80a74f5a",
    "account_number": "0cdd4ba04456ca169baca3d66eace869520c62fe84421329086e03d91a68acdb",
    "balance": "4294967051.0000000000000000",
    "balance_lock": "21cfd80a31930e801e97d34e3f00a7d9b5c01b2fb531a5ac14cd59d10ab446c8"
  },
  {
    "id": "77cf2b96-180e-4315-82a5-483a5e256923",
    "account_number": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc",
    "balance": "175.0000000000000000",
    "balance_lock": "484b3176c63d5f37d808404af1a12c4b9649cd6f6769f35bdf5a816133623fbc"
  },
  {
    "id": "d7df9c73-d381-4764-b4c8-90ca5e021d85",
    "account_number": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8",
    "balance": "14.0000000000000000",
    "balance_lock": "5e12967707909e62b2bb2036c209085a784fabbc3deccefee70052b6181c8ed8"
  },
  {
    "id": "e8b24ad7-f81e-4731-818e-9bbbc3336428",
    "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
    "balance": "56.0000000000000000",
    "balance_lock": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314"
  }
]`}
        heading="Response"
      />

      <DocEndpoint endpoint="/accounts/<account_number>/balance" method="GET" />
      <RequestResponseSnippet
        code={`{
  "balance": "4294967051.0000000000000000"
}`}
        heading="Response"
      />

      <DocEndpoint endpoint="/accounts/<account_number>/balance_lock" method="GET" />
      <RequestResponseSnippet
        code={`{
  "balance_lock": "21cfd80a31930e801e97d34e3f00a7d9b5c01b2fb531a5ac14cd59d10ab446c8"
}`}
        heading="Response"
      />
    </DocContainer>
  );
};

export default ConfirmationValidatorApiAccounts;
