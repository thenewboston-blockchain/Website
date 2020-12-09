import React, {FC} from 'react';

import KeyPair from 'assets/images/KeyPair.png';
import {DocContainer, DocImage, DocList} from 'components';

import AccountsSimple from './AccountsSimple.png';

const GuideAccounts: FC = () => {
  return (
    <DocContainer className="GuideAccounts" title="Accounts" lastUpdated="07 Dec 2020">
      <p>
        <strong>Accounts</strong> are anonymous digital identities on the network where coins may be sent to and from.{' '}
        <strong>Account managers</strong> are software applications (such as a mobile application or desktop software)
        that individuals use to create new accounts, manage existing accounts, and to send coins. When sending coins,
        users enter the amount they wish to send along with the account number of the recipient and submit it to the
        network for processing. To receive coins, users share their own account number with other users on the network
        who will then be able to form blocks themselves.
      </p>

      <DocImage alt="accounts simple" maxWidth={600} src={AccountsSimple} />

      <p>
        When users first download an account manager, it will take the user through the process of creating a{' '}
        <strong>key pair</strong>. A key pair consists of two keys, a <strong>signing key</strong> and an{' '}
        <strong>account number</strong>.
      </p>

      <DocImage alt="key pair" maxWidth={380} src={KeyPair} />

      <p>
        The account number of an account is like a username, but is unique across the entire network (rather than a
        single website). The use of signing keys secures all accounts. Signing keys can prove ownership of coins. They
        are also used in the process of "signing" a block. This allows for the ability of users to create secure
        transactions that the network can further validate without revealing the signing key itself. The signing key
        should always remain private to the account owner.
      </p>

      <p>A simplified overview of each key is as follows:</p>

      <p>
        <strong>Signing key</strong>
      </p>

      <DocList variant="ul">
        <li>Must remain private to the owner</li>
        <li>Allows the account owner to securely sign (authorize) the sending of coins</li>
      </DocList>

      <p>
        <strong>Account number</strong>
      </p>

      <DocList variant="ul">
        <li>Made public to the network</li>
        <li>Acts as a receiving address</li>
        <ul>
          <li>Other users can send coins to you using your account number</li>
        </ul>
        <li>Used in verifying the sender when validating transactions</li>
        <ul>
          <li>
            The account number can prove ownership of the signing key, and therefore the account owner, without
            revealing the signing key itself
          </li>
          <li>
            The use of asymmetric cryptography (specifically digital signatures) achieves this, which we will cover in a
            later section
          </li>
        </ul>
      </DocList>

      <p>
        <strong>Important Note:</strong> Users can have more than one account. Users can create and manage several
        accounts (key pairs) through the same account manager application. This can be thought of as an individual
        having multiple email addresses, but managing all of their email accounts from a single app.
      </p>
      <p>The terms "account" and "user account" are used interchangeably throughout this documentation.</p>
    </DocContainer>
  );
};

export default GuideAccounts;
