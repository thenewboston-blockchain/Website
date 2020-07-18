import React from 'react';

import BalanceLockAndKey from './BalanceLockAndKey.png';
import BlockDetails from './BlockDetails.png';

import './Blocks.scss';

const Blocks = () => {
  return (
    <section className="Blocks">
      <h1 className="page-title">Blocks</h1>
      <p>
        A block is a group of one or more transactions. There are often multiple transactions (usually fees) to
        different recipients within a single block. We can inspect the structure of a block by first examining a
        simplified overview below. In this example, Amy is sending 100 points to her friend Brian.
      </p>

      <table className="border-grid">
        <tbody>
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
        </tbody>
      </table>

      <p>
        After Amy creates the block shown above, the network must validate several aspects of the block and all related
        transactions including verification that:
      </p>

      <ol className="mb-20">
        <li>The block was signed by Amy</li>
        <ol type="a">
          <li>
            the term "signing" is preferred over "created" because Amy may sign (authorize) blocks that she did not
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
        The signing process produces digital signatures using the{' '}
        <a rel="noopener noreferrer" href="https://ed25519.cr.yp.to/">
          Ed25519 Digital Signature Algorithm
        </a>{' '}
        to ensure that the set of transactions within a given block were indeed signed by the account owner. Although in
        many explanations of the network the "owner" of an account is often referred to by name, in the actual network
        architecture individuals' names are never stored. Instead, each account will refer to the owner by their account
        number.
      </p>
      <p>
        The account number (often referred to as the "public-key" in public-key cryptography) is not only used to
        identify your account when other users wish to send you points, but is also used during the verification process
        in which blocks must be correctly verified in order to ensure the related transactions have been authorized by
        the sender (account owner). Therefore, a more realistic representation of a block would be as follows.
      </p>

      <div className="img-container">
        <img alt="block details" className="block-details" src={BlockDetails} />
      </div>

      <p>
        Before we can go into more details regarding exactly how a block is created, we first need to understand an
        integral aspect of the network balance sheet called the balance lock. Every account on the balance sheet
        includes a related balance lock. This is a value that must be provided by the account owner in order to "unlock"
        or spend their point balance. The method to unlock a balance lock is done through the use of balance keys, which
        are provided within the message of every block.
      </p>
      <p>
        Every message within a block will be hashed and that hash value will be used as the next balance lock. Since
        every block contains a unique balance key (as created by the previous block), this will ensure that for every
        block sent over the network the balance lock will become updated, therefore preventing banks and validators from
        processing the same block multiple times.
      </p>

      <div className="img-container">
        <img alt="balance lock and key" className="balance-lock-and-key" src={BalanceLockAndKey} />
      </div>

      <p>
        Note that there is one exception to the method in which balance locks are determined. The majority of the time
        it is determined by the hash value of the account owner's last sent block message. This does however leave out
        the scenario in which the account owner must access their point balance for the very first time before a block
        has ever been sent. This occurs when a separate user has sent funds to an account for the very first time, but
        before that recipient has sent any points (created any blocks) themselves. In this case, the balance lock for
        the account will be set to the recipients account number. Therefore, the rules of how balance locks are
        determined can be simplified as follows:
      </p>

      <ol className="mb-20">
        <li>If an owner has never sent points before, the balance lock is equal to their account number</li>
        <li>Otherwise, the balance lock is equal to the hash value of their most recently sent blocks message</li>
      </ol>

      <p>
        <strong>Important Note:</strong> The balance lock for an account is only updated when that account owner is
        sending blocks. The balance "lock and key" system is similar to the lock and key for a mailbox. No mailbox key
        is required by others when inserting mail into your mailbox, only when opening the mailbox to access the
        contents inside is when a key is required.
      </p>
    </section>
  );
};

export default Blocks;
