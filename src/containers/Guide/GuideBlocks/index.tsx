import React, {FC} from 'react';

import {A, DocContainer, DocImage, DocList, TableBorderGrid} from 'components';

import BalanceLockAndKey from './BalanceLockAndKey.png';
import BlockDetails from './BlockDetails.png';
import './Blocks.scss';

const GuideBlocks: FC = () => {
  return (
    <DocContainer className="GuideBlocks" title="Blocks">
      <p>
        A block is a group of one or more transactions. There are often multiple transactions (usually fees) to
        different recipients within a single block. We can inspect the structure of a block by first examining a
        simplified overview below. In this example, Amy is sending 100 coins to her friend Brian.
      </p>

      <TableBorderGrid
        rows={[
          ['Coins being sent to Brian', '100.00'],
          ['Bank fees', <span className="GuideBlocks__text-light">2 coins</span>],
          ['Validator fees', <span className="GuideBlocks__text-light">1 coin</span>],
          ['Total', '103.00'],
        ]}
      />

      <p>
        After Amy creates the block shown above, the network must validate several aspects of the block and all related
        transactions including verification that:
      </p>

      <DocList variant="ol">
        <li>Amy signed the block.</li>
        <ol type="a">
          <li>
            The term "signing" is preferred over "created" because Amy may sign (authorize) blocks that she did not
            originate.
          </li>
          <ol type="i">
            <li>For example, a shopping website that builds the block as Amy adds items to her cart</li>
          </ol>
        </ol>
        <li>Amy has enough coins in her account.</li>
        <li>The block is not being validated more than once.</li>
        <ol type="a">
          <li>
            This is critical for preventing banks and validators from sending or validating the same block multiple
            times in the attempt to collect additional transaction fees
          </li>
        </ol>
      </DocList>

      <p>
        The signing process produces digital signatures using the{' '}
        <A href="https://ed25519.cr.yp.to/">Ed25519 Digital Signature Algorithm</A> to ensure that the account owner
        indeed signed the set of transactions within a given block. Although in many explanations of the network the
        account "owner" is often referred to by name, in the actual network architecture the individuals' names are
        never stored. Instead, each account will refer to the owner by their account number.
      </p>
      <p>
        The account number (often referred to as the "public-key" in public-key cryptography) is not only used to
        identify your account when other users wish to send you coins, but it is also used during the verification
        process in which blocks must be correctly verified to ensure that the sender (account owner) has authorized the
        related transactions. Therefore, a more realistic representation of a block would be as follows.
      </p>

      <DocImage alt="block details" maxWidth={530} src={BlockDetails} />

      <p>
        Before we can go into more detail regarding exactly how a block is created, we first need to understand an
        integral aspect of the network balance sheet called the balance lock. Every account on the balance sheet
        includes a related balance lock. This is a value that the account owner must provide in order to "unlock" or
        spend their coin balance. The method to unlock a balance lock is done through the use of balance keys, which are
        provided within the message of every block.
      </p>
      <p>
        Every message within a block will be hashed and that hash value will be used as the next balance lock. Since
        every block contains a unique balance key (as created by the previous block), this will ensure that for every
        block sent over the network the balance lock will become updated. Therefore, banks and validators will not
        process the same block multiple times.
      </p>

      <DocImage alt="balance lock and key" maxWidth={1400} src={BalanceLockAndKey} />

      <p>
        Note that there is one exception to the method in which balance locks are determined. The majority of the time
        the hash value of the account owner's last sent block message determines this. This does, however, leave out the
        scenario in which the account owner must access their coin balance for the very first time before a block has
        ever been sent. This occurs when a separate user has sent funds to an account for the very first time, but
        before that recipient has sent any coins (created any blocks) themselves. In this case, the balance lock for the
        account will be set to the recipient's account number. Therefore, the rules of how balance locks are determined
        can be simplified as follows:
      </p>

      <DocList variant="ol">
        <li>If an owner has never sent coins before, the balance lock is equal to their account number.</li>
        <li>Otherwise, the balance lock is equal to the hash value of their most recently sent block's message.</li>
      </DocList>

      <p>
        <strong>Important Note:</strong> The balance lock for an account is only updated when that account owner is
        sending blocks. The balance "lock and key" system is similar to the lock and key for a mailbox. No mailbox key
        is required when inserting mail into your mailbox. Only when opening the mailbox to access the contents inside
        is when a key is required.
      </p>
    </DocContainer>
  );
};

export default GuideBlocks;
