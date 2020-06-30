import React from 'react';

import SigningProcess from './SigningProcess.png';
import TransactionDetails from './TransactionDetails.png';
import TransactionDetailsSimple from './TransactionDetailsSimple.png';

import './Blocks.scss';

const Blocks = () => {
  return (
    <section className="Blocks">
      <h1 className="page-title">Blocks</h1>
      <p>
        Now that we have covered the basics of all nodes in the system, we can now inspect more closely the technical
        details of blocks. A block is a representation of a complete transaction. The term “complete” is needed to
        clarify that there are often multiple transactions (usually fees) to different recipients within a single block.
        A block is what will be sent from Amy's account to her bank, and what the bank will then forward to the
        validator. We can now take a closer look at the example discussed earlier.
      </p>

      <table>
        <tr>
          <td>Points being sent to Brian</td>
          <td>100.00</td>
        </tr>
        <tr>
          <td>Bank fees</td>
          <td className="light">2 points</td>
        </tr>
        <tr>
          <td>Validator fees</td>
          <td className="light">1 point</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>103.00</td>
        </tr>
      </table>

      <p>
        In the block above, Amy is sending 100 points to Brian. In doing so, the system must validate several aspects of
        the transfer including verification that:
      </p>

      <ol>
        <li>The block was signed by Amy</li>
        <ol type="a">
          <li>
            the term “signing” is preferred over “created” because Amy may sign (authorize) blocks that she did not
            originate
          </li>
          <ol type="i">
            <li>for example a shopping website that builds the block as Amy adds items to her cart</li>
          </ol>
        </ol>
        <li>Amy has enough points in her account</li>
        <li>The block is not being validated more than once</li>
        <ol type="a">
          <li>
            this is critical for preventing banks and validators from sending or validating the same block multiple
            times in the attempt to collect additional transaction fees
          </li>
        </ol>
      </ol>

      <p>
        The signing process produces digital signatures using the Ed25519 algorithm to ensure that the set of
        transactions within a given block were indeed signed by the account owner. Although in previous explanations of
        the system the “owner” of an account was often referred to by name, in the actual network architecture
        individuals' names are never stored. Instead, each balance will refer to the owner by their account number.
      </p>
      <p>
        The account number (often referred to as the “public-key” in public-key cryptography) is not only used to
        identify your account when other users wish to send you points, but is also used during the verification process
        in which blocks must be correctly verified in order to ensure the related transactions have been authorized by
        the sender (account owner). Therefore, a more realistic representation of a block would be as follows.
      </p>

      <div className="img-container">
        <img
          alt="transaction details simple diagram"
          className="transaction-details-simple"
          src={TransactionDetailsSimple}
        />
      </div>

      <p>
        Before we can go into more details regarding exactly how a block is created, we first need to understand an
        integral aspect of the network balance sheet called the balance lock. Every account on the balance sheet
        includes a related balance lock. This is a value that must be provided by the account owner in order to “unlock”
        or spend their point balance. The method to unlock a balance lock is done through the use of balance keys, which
        are provided within the transactions of every block.
      </p>
      <p>
        Each transaction within a block will be hashed and that hash value will be used as the next balance lock. Since
        every transaction contains a unique balance key (as created by the previous transaction), this will ensure that
        for every transaction made over the network the balance lock will become updated, therefore preventing banks and
        validators from sending or processing the same block (payments) multiple times.
      </p>

      <div className="img-container">
        <img alt="transaction details diagram" className="transaction-details" src={TransactionDetails} />
      </div>

      <p>
        Note that there is one exception to the method in which balance locks are determined. The majority of the time
        it is determined by the hash value of the account owner's last sent transaction. This does however leave out the
        scenario in which the owner must access their point balance for the very first time before a transaction has
        ever been sent. This occurs when a separate user has sent funds to an account for the very first time, but
        before that recipient has sent any points (created any transactions) themselves. In this case, the balance lock
        for the account will be set to the account number. Therefore, the rules of how balance locks are determined can
        be simplified as follows:
      </p>

      <ol>
        <li>If an owner has never sent points before, the balance lock is equal to their account number</li>
        <li>Otherwise, the balance lock is equal to the hash value of their most recent sent transaction</li>
      </ol>

      <p>
        Important Note: The balance lock for an account is only updated when that account owner is sending points. The
        balance “lock and key” system is similar to the lock and key for a mailbox. No mailbox key is required by others
        when inserting mail into your mailbox, only when opening the mailbox to access the contents inside is when a key
        is required.
      </p>
      <p>The specifics of how an individual block is created is as follows:</p>

      <ol>
        <li>The most recent balance lock will be obtained from the network balance sheet</li>
        <li>When forming the first transaction in a block, the balance key will be set to that balance lock</li>
        <li>
          For every other transaction included in that block, the balance key will be set to the hash value of the
          previous transaction
        </li>
        <ol type="a">
          <li>the last hash value will be used as the new balance lock on the network balance sheet</li>
        </ol>
        <li>
          Once all transactions have been included in the block, a signature will be formed using all transactions as
          the input
        </li>
        <li>Account number will also be included in the block, this is necessary for two reasons:</li>
        <ol type="a">
          <li>identifying who signed the block (who is sending points)</li>
          <li>used in the signature verification process to ensure both:</li>
          <ol type="i">
            <li>the signers (senders) identity</li>
            <li>he signed transaction data can be verified</li>
          </ol>
        </ol>
      </ol>

      <p>A more detailed diagram of the signing processes and block creation is shown below.</p>

      <div className="img-container">
        <img alt="signing process diagram" className="signing-process" src={SigningProcess} />
      </div>
    </section>
  );
};

export default Blocks;
