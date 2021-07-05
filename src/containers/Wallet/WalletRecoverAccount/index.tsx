import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import RecoverAccount from './RecoverAccount.png';

const WalletRecoverAccount: FC = () => {
  return (
    <DocContainer className="WalletRecoverAccount" title="Recover an Account" lastUpdated="07 July 2021">
      <p>
        To recover an account, you will need the signing key of the account. First click the plus button to the right of
        "Accounts" on the left side menu. Choose "Add Existing Account" option.
      </p>
      <p>
        After filling out a Nickname for the account and the signing key, click the "Add" button to create the account.
      </p>

      <DocImage alt="recover account modal" bordered maxWidth={1200} src={RecoverAccount} />
    </DocContainer>
  );
};

export default WalletRecoverAccount;
