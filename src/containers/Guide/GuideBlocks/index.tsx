import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {
  A,
  CalloutType,
  DocCallout,
  DocContainer,
  DocImage,
  DocList,
  DocSubHeader,
  TableBorderGrid,
  TableVertical,
} from 'components';

import BalanceLockAndKey from './BalanceLockAndKey.png';
import BlockDetails from './BlockDetails.png';
import './Blocks.scss';

const GuideBlocks: FC = () => {
  return (
    <DocContainer className="GuideBlocks" title="Blocks" lastUpdated="21 Feb 2021">
      <p>
        A block is a group of one or more transactions. There are often multiple transactions (usually fees) with
        different recipients within a single block. Let's inspect the structure of a block by first examining the
        simplified scenario below.
      </p>
      <DocSubHeader>Example</DocSubHeader>
      <p>In this example, Amy sends 100 coins to Brian:</p>

      <TableBorderGrid
        rows={[
          [<strong>Description</strong>, <strong>Coins</strong>],
          ['Coins sent to Brian', '100'],
          ['Bank fees', '2'],
          ['Validator fees', '1'],
          ['Total cost of transaction for Amy', '103'],
        ]}
      />

      <p>The network must validate several aspects of this block and all related transactions, including:</p>
      <TableVertical
        altColors
        rows={[
          [<strong>Validation</strong>, <strong>Notes</strong>],
          [
            'Amy has signed the block',
            'The term "sign" is preferred over "create" because Amy might sign (authorize) blocks that she did not originate, for example, as Amy adds items to her cart on a shopping website, this builds the block',
          ],
          [
            'The block is not being validated more than once',
            'This is critical for preventing banks and validators from sending or validating the same block multiple times to collect additional transaction fees',
          ],
          ['Amy has enough coins in her account', ''],
        ]}
      />
      <p>
        See <NavLink to="/guide/transaction-fees">Transaction Fees</NavLink> for details on the fees that relate to this
        transaction.
      </p>
      <DocSubHeader>Dissecting a block</DocSubHeader>
      <p>
        The signing process produces digital signatures using the{' '}
        <A href="https://ed25519.cr.yp.to/">Ed25519 Digital Signature Algorithm</A>. This ensures that the account owner
        has indeed signed all the transactions within a block.
      </p>
      <DocCallout type={CalloutType.note}>
        Although in many explanations of the network the account "owner" is often referred to by name, the actual
        network architecture never stores the name of individuals. Instead, each account refers to the owner by their
        account number.
      </DocCallout>
      <p>
        The account number (often referred to as the "public-key" in cryptography) is not only important for identifying
        a user's account when others wish to send coins to this user. It is also important during the verification
        process in which blocks must be correctly verified to ensure that the sender (account owner) has authorized the
        related transactions. So, a more realistic representation of a block is the following:
      </p>
      <DocImage alt="block details" maxWidth={530} src={BlockDetails} />

      <p>
        Before discussing how a block is created, we must first focus on an integral aspect of the network balance sheet
        called the <strong>balance lock</strong>.
      </p>
      <p>
        Every account on the balance sheet includes a related balance lock. This is a value that the account owner must
        provide in order to "unlock" or spend their coin balance. The method to unlock a balance lock uses balance keys,
        which are provided within the message of every block.
      </p>
      <p>
        Every message within a block is hashed, and that hash value will become the next balance lock. Because every
        block contains a unique balance key (as created by the previous block), this ensures that for every block sent
        over the network, the balance lock of the sender's account gets updated. So, banks and validators cannot process
        the same block more than once. Here is the entire process in more details:
      </p>

      <DocImage alt="balance lock and key" maxWidth={1400} src={BalanceLockAndKey} />

      <p>
        There is one exception to the method in which balance locks are determined. Usually, the hash value of the
        account owner's last sent block message determines the account's balance lock. This, however, leaves out the
        scenario in which the account owner must access their coin balance for the very first time before a block has
        ever been sent. This occurs when a separate user has sent funds to an account for the very first time, but
        before that recipient sends any coins (signs any blocks) themselves. Here, the balance lock for the account will
        be the recipient's account number.
      </p>
      <p>So, the following two rules outline how balance locks are determined:</p>
      <DocList variant="ul">
        <li>If an owner has never sent coins before, the balance lock is equal to their account number.</li>
        <li>Otherwise, the balance lock is equal to the hash value of their most recently sent block's message.</li>
      </DocList>
      <DocCallout type={CalloutType.important}>
        The balance lock for an account is only updated when that account owner sends blocks. The balance "lock and key"
        system is similar to the lock and key for a mailbox. No mailbox key is required when inserting mail into a
        mailbox. A key is only necessary for opening the mailbox to access the contents inside.
      </DocCallout>
    </DocContainer>
  );
};

export default GuideBlocks;
