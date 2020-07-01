import React from 'react';

import AccountsSimple from './AccountsSimple.png';
import KeyPair from 'assets/images/KeyPair.png';

import './Accounts.scss';

const Accounts = () => {
  return (
    <section className="Accounts">
      <h1 className="page-title">Accounts</h1>
      <p>
        <strong>Accounts</strong> are anonymous digital identities on the network where points may be sent to and from.{' '}
        <strong>Account managers</strong> are software applications (such as a mobile application or desktop software)
        that are used by individuals to create new accounts, manage existing accounts, and to send points. When sending
        points, users enter the amount they wish to send along with the account number of the recipient and submit it to
        the network for processing. To receive points, users share their own account number with other users on the
        network who will then be able to form blocks themselves.
      </p>

      <div className="img-container">
        <img alt="accounts simple" className="accounts-simple" src={AccountsSimple} />
      </div>

      <p>
        When users first download an account manager, it will take the user through the process of creating a{' '}
        <strong>key pair</strong>. A key pair consists of two keys, a <strong>signing key</strong> and an{' '}
        <strong>account number</strong>. These keys serve many different purposes in the network.
      </p>
      <div className="img-container">
        <img alt="key pair" className="key-pair" src={KeyPair} />
      </div>
      <p>
        The account number of an account is similar to a username, but is unique across the entire network (rather than
        a single website). All accounts are secured through the use of signing keys. Signing keys can be used to prove
        ownership of points. They are also used in the process of "signing" a block. This allows for the ability of
        users to create secure transactions that can further be validated by the network without revealing the signing
        key itself. The signing key should always remain private to the account owner.
      </p>
      <p>A simplified overview of each key is as follows:</p>
      <p>
        <strong>Signing key</strong>
        <ul>
          <li>must remain private to the owner</li>
          <li>allows the account owner to securely sign (authorize) the sending of points</li>
        </ul>
      </p>
      <p>
        <strong>Account number</strong>
        <ul>
          <li>is made public to the network</li>
          <li>acts as a receiving address</li>
          <ul>
            <li>other users are able to send points to you using your account number</li>
          </ul>
          <li>used in verifying the sender when validating transactions</li>
          <ul>
            <li>
              the account number can be used to prove ownership of the signing key, and therefore the account owner,
              without revealing the signing key itself
            </li>
            <li>
              this is done through the use of asymmetric cryptography (specifically digital signatures) which we will
              cover in a later section
            </li>
          </ul>
        </ul>
      </p>
      <p>
        <strong>Important Note:</strong> Users are not limited to a single account. Users are able to create and manage
        several accounts (key pairs) through the same account manager application. This can be thought of as an
        individual having multiple email addresses, but managing all of their email accounts from a single app.
      </p>
      <p>The terms "account" and "user account" are used interchangeably throughout this documentation.</p>
    </section>
  );
};

export default Accounts;
