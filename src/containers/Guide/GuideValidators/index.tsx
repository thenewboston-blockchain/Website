import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import ConfirmationValidatorOverview from './ConfirmationValidatorOverview.png';

const GuideValidators: FC = () => {
  return (
    <DocContainer className="GuideValidators" title="Validators">
      <p>
        The purpose of the validator is most importantly to validate transactions. As we discussed in a previous
        section, upon validation of a block the validator will append that block onto their blockchain and also update
        the balances of all accounts involved.
      </p>
      <p>
        The validators root account file and blockchain (record of all confirmed transactions since the account file
        creation) are always made publicly available for the following purposes:
      </p>
      <DocList variant="ul">
        <li>allowing all network participants (users, banks, and validators) to audit all data</li>
        <li>
          allowing confirmation validators to continuously confirm all account balances and maintain frequent backups
        </li>
      </DocList>
      <p>
        In addition to transaction validation, validators will also assign trust levels to banks. The assignment of
        banks trust will be based on any number of criteria as determined by the validator, but common factors may
        include improperly formatted transactions and server reliability. Validators will also collect transaction fees
        from transactions sent to them from the banks using a tier based fee structure based on bank trust levels. This
        is why it is important to build and maintain trust with all nodes in the network.
      </p>
      <p>
        Validators also provide additional network information such as a log of all connected banks, statistics on
        connected banks (Tx error rate, total Txs, etc...), and other optional network analytics as well. Many of these
        are not a requirement as they are outside the main responsibilities of the validator, however validators that
        offer additional information services to the network will build trust faster than those that do not. This is
        because banks would prefer validators that are both more reliable and offer more services than others.
      </p>
      <p>
        In addition to the elected primary validator for the network, the network will also be composed of several
        confirmation validators. The purpose of confirmation validators are to both continuously validate and backup all
        account balances, as well as serve as backups in the case where the primary validator were to go offline.
      </p>
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
        updates and immediately end synchronization with the primary validator. The banks, upon notification of the
        inaccurate data (sent to them from the confirmation validators) will switch primary validators as well as punish
        the original validator in the form of reduced trust.
      </p>

      <DocImage alt="confirmation validator overview" maxWidth={760} src={ConfirmationValidatorOverview} />

      <p>
        Confirmation validators are free to either continue acting as a backup on the main network or split off to form
        their own network at any time, but banks will always remain free to choose which network they wish to
        participate in. By splitting off of the main network, the banks remaining on the original network will decrease
        their trust levels of all nodes (both banks and validators) on the new network. Banks will also lose trust in
        other banks if they are caught communicating with validators outside of their network. This is because they will
        suspect that the offending bank is intending to switch networks soon, therefore harming the original network.
      </p>
      <p>
        When a new confirmation validator joins the network, they must reach out to the banks directly. This is done so
        that the confirmation validators are not reliant on the existing primary validator, which may or may not have
        the confirmation validators best interest in mind.
      </p>
      <p>
        Banks must also register with primary validators before they are accepted onto the network by that validator.
        This is done in a similar fashion to the registration process between user accounts and banks. To register,
        banks will pay a registration fee to the validator. The validator will then place the registration in a
        "pending" state as it performs a network background check of the applying bank. During this process, validators
        will check the bank's trust level with other existing banks. Banks must also prove that they are configured
        properly to act as a bank node. This is done through the ability to act as a server by responding properly to
        network requests made from the validator to the bank's IP address. This verification prevents end users from
        acting as banks by sending transactions directly to the validator.
      </p>
      <p>
        Banks will also register with confirmation validators for two main reasons. The first reason is that this will
        act as a safety net in the event the current primary validator goes offline. Since one of the confirmation
        validators will become the new primary validator, the bank will already be registered and not experience any
        delays in block processing. The second reason is to receive additional confirmation blocks. This topic will be
        discussed in more detail in later sections.
      </p>
      <p>
        Registration fees and transaction fees between user accounts and banks, as well as between banks and validators
        generally follow a simple rule. That is initial registration fees are a fixed cost while transaction fees are
        tiered based on trust levels.
      </p>
    </DocContainer>
  );
};

export default GuideValidators;
