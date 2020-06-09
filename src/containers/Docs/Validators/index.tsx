import React from 'react';

import OverviewFull from './OverviewFull.png';
import ValidatorBackup from './ValidatorBackup.png';

import './Validators.scss';

const Validators = () => {
  return (
    <section className="Validators">
      <h1 className="page-title">Validators</h1>
      <p>
        The purpose of the validator is most importantly to validate transactions. As we discussed in a previous
        section, upon validation of a transaction the validator will append that transaction onto the transaction ledger
        and also update the balance sheet for the network.
      </p>
      <p>
        An additional task the validator will perform is continuously providing backups of both the transaction ledger
        and balance sheet for the following purposes:
      </p>
      <ul>
        <li>allowing the all network participants (end users, banks, and validators) to audit all data</li>
        <li>allowing backup validators to maintain frequent backups</li>
      </ul>
      <p>
        Validators will earn more trust the more often and further back they provide backups. If a validator does not
        provide frequent backups to the network, the trust of that validator will quickly decline and the banks will
        elect a new validator.
      </p>
      <p>
        In addition to transaction validation, validators will also assign trust levels to banks. The assignment of
        banks trust will be based on any number of criteria as determined by the validator, but common factors may
        include improperly formatted transactions and server reliability. Validators will also collect transaction fees
        from transactions sent to them from the banks using a tier based fee structure based on bank trust levels. This
        is why it is important to build and maintain trust with all nodes in the network.
      </p>
      <p>
        Validators also provide additional network information such as a log of all connected banks, statistics on
        connected banks (Tx error rate, total Txs, etc...), and other optional network analytics as well. All of these
        are not a requirement as they are outside the main responsibilities of the validator, however validators that
        offer additional information services to the network will build trust faster than those that do not. This is
        because banks would prefer validators that are both more reliable and offer more services than others.
      </p>
      <p>
        In addition to the elected primary validator for the network, the network will also be composed of backup
        validators. The purpose of backup validators are to both continuously validate and backup network data from the
        primary validator, as well as serve as backups in the case where the primary validator were to go offline.
      </p>

      <div className="img-container">
        <img alt="validator backup" className="validator-backup" src={ValidatorBackup} />
      </div>

      <p>
        Backup validators are unable to process incoming transactions while actively syncing with the primary validator.
        This is because if they were to do so, the network would then have two separate sources of truth. If backup
        validators were to ever begin processing incoming transactions, this would create a new network separate from
        the main network. Since banks are only permitted to have one primary validator, they would have to choose
        between the original validator and the new one. Networks are essentially defined by the validator.
      </p>
      <p>
        Important Note: While syncing, if a backup validator ever receives data from the primary validatory that is
        inaccurate or otherwise unable to be verified, the backup validator should reject the updates and immediately
        end synchronization with the primary validator. The backup validator should then begin to accept incoming
        transactions as the new primary validator and broadcast their findings to the banks. The banks, upon
        verification of the inaccurate data, will switch primary validators as well as punish the original validator in
        the form of reduced trust.
      </p>
      <p>
        Backup validators are free to either continue acting as a backup on the main network or split off to form their
        own network at any time, but banks will always remain free to choose which network they wish to participate in.
        By splitting off of the main network, the banks remaining on the original network will decrease their trust
        levels of all nodes (both banks and validators) on the new network. Banks will also lose trust in other banks if
        they are caught communicating with validators outside of their network. This is because they will suspect that
        the offending bank is intending to switch networks soon, therefore harming the original network.
      </p>
      <p>
        When a new backup validator joins the network, they must reach out to the banks directly. This is done so that
        the backup validators are not reliant on the existing validator, which may or may not have the backup validators
        best interest in mind.
      </p>
      <p>
        Banks must also register with validators before they are accepted onto the network by that validator. This is
        done in a similar fashion to the registration process between user accounts and banks. To register, banks will
        pay a registration fee to the validator. The validator will then place the registration in a “pending” state as
        it performs a network background check of the applying bank. During this process, validators will check the
        bank's trust level with other existing banks. Banks must also prove that they are configured properly to act as
        a bank node. This is done through the ability to act as a server by responding properly to network requests made
        from the validator to the bank's IP address. This verification prevents end users from acting as banks by
        sending transactions directly to the validator.
      </p>
      <p>
        Registration fees and transaction fees between both user accounts and banks, and banks and validators generally
        follow a simple rule. That is initial registration fees are a fixed cost while transaction fees are tiered based
        on trust levels. The next page will diagram a more comprehensive model of the system.
      </p>

      <div className="img-container">
        <img alt="overview full" className="overview-full" src={OverviewFull} />
      </div>
    </section>
  );
};

export default Validators;
