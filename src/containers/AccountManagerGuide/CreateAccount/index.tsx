import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import CreateNewAccount from './CreateNewAccount.png';

const CreateAccount: FC = () => {
  return (
    <DocContainer className="CreateAccount" title="Create an Account">
      <p>
        <strong>Accounts</strong> are anonymous digital identities on the network where points may be sent to and from.{' '}
        <strong>Account managers</strong> are software applications (such as a mobile application or desktop software)
        that individuals use to create new accounts, manage existing accounts, and to send points. When sending points,
        users enter the amount they wish to send along with the account number of the recipient and submit it to the
        network for processing. To receive points, users share their own account number with other users on the network
        who will then be able to form blocks themselves.
      </p>

      <DocImage alt="create new account" maxWidth={600} src={CreateNewAccount} />

      <p>Nice</p>
    </DocContainer>
  );
};

export default CreateAccount;
