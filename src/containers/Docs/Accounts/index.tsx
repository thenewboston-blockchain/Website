import React from 'react';

import AccountDetailsDiagram from './AccountDetails.png';
import AccountsDiagram from './Accounts.png';
import KeyPair from 'assets/images/key-pair.png';

import './Accounts.scss';

const Accounts = () => {
  return (
    <section className="Accounts">
      <h1 className="page-title">Accounts</h1>
      <p>
        <strong>Account managers</strong> are software applications (such as a mobile application or desktop software)
        that are used by users to send, receive, and store points. To send points, users enter the amount they wish to
        send along with the account number of the recipient and submit it to the network for processing. To receive
        points, users share their own account number with other users on the network who will then be able to form
        transactions themselves.
      </p>
      <div className="img-container">
        <img alt="accounts diagram" className="accounts-diagram" src={AccountsDiagram} />
      </div>
      <p>
        When users first download an account manager, it will take the user through the process of creating a{' '}
        <strong>key pair</strong>. A key pair consists of two keys, a <strong>signing key</strong> and an{' '}
        <strong>account number</strong>. These keys serve many different purposes in the network.
      </p>
      <div className="img-container">
        <img alt="key pair diagram" className="key-pair-diagram" src={KeyPair} />
      </div>
      <p>
        The account number of the account is similar to a username, but is unique across the entire network (rather than
        a single website). All accounts are secured through the use of signing keys. Signing keys can be used to prove
        ownership of points. They are also used in the process of "signing" a transaction. This allows for the ability
        of users to create secure transactions that can further be validated by the network without revealing the
        signing key itself. The signing key should always remain private to the account owner.
      </p>
      <p>A simplified overview of each key is as follows:</p>
      <p>
        <strong>Signing key</strong>
        <ul>
          <li>must remain private to the owner</li>
          <li>allows the owner to securely sign (authorize) the sending of points</li>
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
              the account number can be used to prove ownership of the signing key, and therefore the owner, without
              revealing the signing key itself
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
      <p>
        Account manager applications can manage multiple accounts (key pairs) for a single user. A more accurate
        representation of user transactions can be seen in the following diagram.
      </p>
      <div className="img-container">
        <img alt="accounts details diagram" className="account-details-diagram" src={AccountDetailsDiagram} />
      </div>
      <p>The terms "account" and "user account" are used interchangeably throughout this paper.</p>
    </section>
  );
};

export default Accounts;
