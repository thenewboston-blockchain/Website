import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import KeyPair from 'assets/images/KeyPair.png';
import {DocCallout, DocContainer, DocImage, DocList} from 'components';

import AccountsSimple from './AccountsSimple.png';

const GuideAccounts: FC = () => {
  return (
    <DocContainer className="GuideAccounts" title="Accounts" lastUpdated="16 Feb 2021">
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
        When users first download an account manager, it guides them through creating a <strong>key pair</strong>. A key
        pair comprises two keys, a <strong>signing key</strong> and an <strong>account number</strong>.
      </p>

      <DocImage alt="key pair" maxWidth={380} src={KeyPair} />

      <p>
        The account number of an account is like a username, but is unique across the entire network (rather than a
        single website). Using signing keys secures all accounts and prove ownership of coins. Signing keys are also
        used in the process of "signing" a block. This allows users to create secure transactions that the network can
        further validate without revealing the signing key itself. The signing key must always remain private to the
        account owner.
      </p>

      <p>A simplified overview of each key is the following:</p>

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
          <li>Any user can send coins to the owner of the account using this account number</li>
        </ul>
        <li>Verifies the sender when validating transactions</li>
        <ul>
          <li>
            The account number can prove ownership of the signing key, and consequently the account owner, without
            revealing the signing key itself
          </li>
          <li>
            Use of asymmetric cryptography (specifically digital signatures) achieves this (see
            <NavLink to="/guide/blocks"> Blocks</NavLink> for details)
          </li>
        </ul>
      </DocList>
      <DocCallout>
        Users can have more than one account, and they can create and manage several accounts (key pairs) through the
        same account manager application. This can be thought of as an individual having multiple email addresses, but
        managing all of their email accounts from a single app.
      </DocCallout>
      <p>The terms "account" and "user account" are used interchangeably throughout this documentation.</p>
    </DocContainer>
  );
};

export default GuideAccounts;
