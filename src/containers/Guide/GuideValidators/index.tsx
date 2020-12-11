import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import ConfirmationValidatorOverview from './ConfirmationValidatorOverview.png';

const GuideValidators: FC = () => {
  return (
    <DocContainer className="GuideValidators" title="Validators" lastUpdated="07 Dec 2020">
      <p>
        The purpose of the validator is most importantly to validate transactions. As we discussed in a previous
        section, upon validation of a block the validator will append that block onto their blockchain and also update
        the balances of all accounts involved.
      </p>
      <p>
        The validator's root account file and blockchain (record of all confirmed transactions since the account file
        creation) are always made publicly available for the following purposes:
      </p>
      <DocList variant="ul">
        <li>Allowing all network participants (users, banks, and validators) to audit all data</li>
        <li>
          Allowing confirmation validators to continuously confirm all account balances and maintain frequent backups
        </li>
      </DocList>
      <p>
        Validators will also assign trust levels to banks. A bank's trust will be based on any number of criteria as
        determined by the validator, but common factors may include improperly formatted transactions and server
        reliability. Validators will also collect transaction fees from transactions sent to them from the banks using a
        tier-based fee structure based on bank trust levels. This is why it is important to build and maintain trust
        with all nodes in the network.
      </p>
      <p>
        In addition to the elected primary validator for the network, the network will also be composed of several
        confirmation validators. The purpose of confirmation validators is to both continuously validate and back up all
        account balances, as well as serve as backups in the case where the primary validator were to go offline.
      </p>

      <DocImage alt="confirmation validator overview" maxWidth={760} src={ConfirmationValidatorOverview} />

      <p>
        Confirmation validators are unable to process incoming blocks directly while actively verifying blocks from the
        primary validator. This is because if they were to do so, the network would then have two separate sources of
        truth. If a confirmation validator was ever to begin processing incoming blocks, this would create a new network
        separate from the main network. Since banks are only permitted to have one primary validator, they would have to
        choose between the original validator and the new one. Networks are essentially defined by the primary
        validator.
      </p>
      <p>
        <strong>Important Note:</strong> While syncing, if a confirmation validator ever receives data from the primary
        validator that is inaccurate or otherwise unable to be verified, the confirmation validator will reject the
        updates and immediately end synchronization with the primary validator. Upon notification of the inaccurate data
        (sent to them from the confirmation validators), the banks will switch primary validators as well as punish the
        original validator in the form of reduced trust.
      </p>
    </DocContainer>
  );
};

export default GuideValidators;
