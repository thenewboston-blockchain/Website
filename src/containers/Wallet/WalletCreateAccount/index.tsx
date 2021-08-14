import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubSection} from 'components';

import AccountOverview from './AccountOverview.png';
import CreateNewAccountModal from './CreateNewAccountModal.png';

enum WalletCreateAccountNav {
  accountOverview = 'account-overview',
}

const WalletCreateAccount: FC = () => {
  return (
    <DocContainer className="WalletCreateAccount" title="Create an Account" lastUpdated="07 Dec 2020">
      <p>
        <strong>Accounts</strong> are anonymous digital identities on the network where coins may be sent to and from.
        To create an account, click the plus button to the right of "Accounts" on the left side menu. After filling out
        a Nickname for your account, click the "Create" button to create the account.
      </p>

      <DocImage alt="create new account modal" bordered maxWidth={1200} src={CreateNewAccountModal} />

      <DocSubSection id={WalletCreateAccountNav.accountOverview} title="Account Overview">
        <p>
          After creating an account, you will be taken to your account overview page. Here you can see your balance,
          account number, and signing key. Your account number is what you will share with anyone who wishes to send you
          coins.
        </p>
        <p>
          Unlike your account number, your signing key must be kept private. The signing key is what allows users the
          ability to send coins from that account. It is similar to a password in traditional web applications. Anyone
          with access to your signing key is therefore able to access your funds, which is why it is critical to keep it
          secure.
        </p>

        <DocImage alt="account overview" bordered maxWidth={1200} src={AccountOverview} />
      </DocSubSection>
    </DocContainer>
  );
};

export default WalletCreateAccount;
