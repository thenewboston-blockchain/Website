import React, {FC} from 'react';

import {CalloutType, DocCallout, DocContainer, DocImage, DocList} from 'components';
import AccountLock from './AccountLock.png';

const GuideAccountLock: FC = () => {
  return (
    <DocContainer className="GuideAccountLock" title="Account Lock" lastUpdated="24 Apr 2021">
      <p>
        Every account on the network has a related <strong>account lock</strong>. The purpose of this lock is to prevent
        nodes from being able to process the same user requests multiple times in an attempt to collect additional fees.
        Users will include their account lock in all signed requests they create. Once a request has been validated and
        added to the blockchain as a block, the account lock will change.
      </p>
      <p>
        Account locks are be determined by hashing the message of the most recent signed request for a given account.
        The inclusion of this hash within the message of signed requests results in an updated account lock, even when
        all other fields remain the same. The constant changing of account locks and therefore the signature necessary
        to validate the message prevents nodes from processing identical signed requests multiple times.
      </p>

      <DocImage alt="account lock" maxWidth={1400} src={AccountLock} />
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

export default GuideAccountLock;
