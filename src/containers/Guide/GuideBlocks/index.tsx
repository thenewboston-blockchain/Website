import React, {FC} from 'react';

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
import {NavLink} from 'react-router-dom';

import BalanceLockAndKey from './BalanceLockAndKey.png';
import BlockDetails from './BlockDetails.png';
import './GuideBlocks.scss';

const GuideBlocks: FC = () => {
  return (
    <DocContainer className="GuideBlocks" title="Blocks" lastUpdated="07 Mar 2021">
      <p>
        A block is a group of one or more transactions. Within a single block, there are often multiple transactions
        (usually fees) with different recipients. The following simplified example outlines the structure of a block.
      </p>
      <DocSubHeader>Example</DocSubHeader>
      <p>Amy sends 100 coins to her friend Brian.</p>

      <TableBorderGrid
        rows={[
          [<strong>Description</strong>, <strong>Coins</strong>],
          ['Coins being sent to Brian', '100'],
          ['Node fee', <span className="GuideBlocks__text-light">2</span>],
          ['PV fee', <span className="GuideBlocks__text-light">1</span>],
          ['Total', '103'],
        ]}
      />

      <p>
        After Amy creates the block shown above, the network must validate several aspects of the block and all related
        transactions, including the following:
      </p>
      <TableVertical
        altColors
        rows={[
          [<strong>Validation</strong>, <strong>Description</strong>],
          [
            'Amy has signed the block.',
            'The term "sign" is preferred over "create" because Amy might sign (authorize) blocks that she did not originate. For example, a shopping website builds the block while Amy adds items to her cart.',
          ],
          ['Amy has enough coins in her account.', 'The users cannot spend more coins than what they have.'],
          [
            'The block is not being validated more than once.',
            'This is critical for preventing nodes from collecting additional transaction fees by validating the same block multiple times.',
          ],
        ]}
      />
      <p>
        See <NavLink to="/guide/transaction-fees">Transaction Fees</NavLink> for details about fees that relate to
        transactions.
      </p>
      <DocSubHeader>Dissecting a block</DocSubHeader>
      <p>
        The signing process produces digital signatures using the{' '}
        <A href="https://ed25519.cr.yp.to/">Ed25519 Digital Signature Algorithm</A>. This ensures that the account owner
        has indeed signed the set of transactions within any given block.
      </p>
      <DocCallout type={CalloutType.note}>
        Although the account owner is often referred to by name, the actual network architecture never stores the name
        of individuals. Instead, each account relates to the owner by their account number.
      </DocCallout>
      <p>
        In cryptography, the account number is often referred to as the <strong>public-key</strong>. An account number
        is not only important for identifying a user's account when others wish to send coins to this user. It is also
        used during the verification process in which blocks must be correctly verified to ensure that the sender
        (account owner) has authorized the related transactions. So, a more realistic and detailed representation of a
        block is the following:
      </p>

      <DocImage alt="block details" maxWidth={530} src={BlockDetails} />

      <p>
        Before we can go into more detail regarding exactly how a block is created, we first need to understand an
        integral aspect of the network balance sheet called the balance lock.
      </p>
      <p>
        Every account on the balance sheet includes a related balance lock. This is a value that the account owner must
        provide to "unlock" or spend their coin balance. The method to unlock a balance lock is through using balance
        keys, which are provided within the message of every block.
      </p>
      <p>
        Every message within a block is hashed, and that hash value will become the next balance lock. Because every
        block contains a unique balance key (as created by the previous block), this ensures that for every block sent
        over the network, the balance lock of the sender's account gets updated. So, nodes and validators cannot process
        the same block more than once. Here is this entire process in details:
      </p>

      <DocImage alt="balance lock and key" maxWidth={1400} src={BalanceLockAndKey} />
      <DocCallout type={CalloutType.note}>
        There is one exception to the method in which balance locks are determined. Usually, the hash value of the
        account owner's last sent block message determines the account's balance lock. This, however, leaves out the
        scenario in which the account owner must access their coin balance for the very first time, before a block has
        ever been sent. This occurs when a separate user has sent funds to an account for the very first time, but
        before that recipient sends any coins (signs any blocks) themselves. In this case, the balance lock for the
        account will be the recipient's account number.
      </DocCallout>

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
