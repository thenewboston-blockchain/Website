import React, {FC} from 'react';

import {CalloutType, DocCallout, DocContainer, DocImage, DocList} from 'components';
import AccountLock from './AccountLock.png';

const GuideAccountLock: FC = () => {
  return (
    <DocContainer className="GuideAccountLock" title="Account Lock" lastUpdated="24 Apr 2021">
      <p>
        Every account on the network has a related <strong>account lock</strong>. The purpose of this lock is to prevent
        nodes from being able to process the same requests multiple times in an attempt to collect additional fees. All
        signed requests will include the account lock for that account in the message. After a request has been
        validated and the block has been added to the blockchain, the account lock will change.
      </p>
      <p>
        Account locks are be determined by hashing the message of the most recent signed request for a given account.
        The inclusion of this hash within the message itself produces a unique account lock each iteration. The constant
        changing of account locks and in turn the signature required to validate the message prevents nodes from being
        able to process the same signed request multiple times.
      </p>

      <DocImage alt="account lock" maxWidth={1400} src={AccountLock} />
      <DocCallout type={CalloutType.note}>
        There is one exception to the method in which account locks are determined. Usually, the hash value of the
        account owner's last signed request message determines their account lock. This, however, leaves out the
        scenario in which the account owner is creating a signed request for the very first time. This occurs when a
        separate user has sent funds to an account but before the recipient has made any requests themselves. In this
        case, the account lock for the recipient will be their account number.
      </DocCallout>

      <p>So, the following two rules outline how account locks are determined:</p>
      <DocList variant="ul">
        <li>
          If an account owner has never made a signed request before, their account lock is equal to their account
          number.
        </li>
        <li>Otherwise, the account lock is equal to the hash value of their most recent signed request message.</li>
      </DocList>
    </DocContainer>
  );
};

export default GuideAccountLock;
