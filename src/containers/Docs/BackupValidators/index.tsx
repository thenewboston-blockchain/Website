import React from 'react';

import './BackupValidators.scss';

const BackupValidators = () => {
  return (
    <section className="BackupValidators">
      <h1 className="page-title">Backup Validators</h1>
      <p>
        The final technical details to cover are the specific functionality of the backup validators and the
        confirmation mechanism (which will be outlined in the next section).
      </p>
      <p>
        Every primary validator will provide three important pieces of data that all backup validators will use to
        validate all network transactions:
      </p>

      <ul>
        <li>Base balance sheet</li>
        <ul>
          <li>
            this is the flattened representation of the balance sheet at the moment in time that the validator was first
            set to “primary”
          </li>
          <li>the data in the base balance sheet provided by the primary validator will never be updated in any way</li>
        </ul>
        <li>Hash of the base balance sheet</li>
        <ul>
          <li>
            backup validators will verify that the hashed balance sheet matches the hash provided by the primary
            validator
          </li>
          <li>this hash will also be the address of the first validated block from the primary validator</li>
        </ul>
        <li>Hash of the base block</li>
        <ul>
          <li>the base block is the most recent validated block of the previous primary validator</li>
          <li>it marks the final block that was used in creating the base balance sheet</li>
          <li>
            this is used by all other backup validators on the network since they will already have copies of the
            previous primary validators balance sheet as well as the chain of validated blocks
          </li>
        </ul>
        <li>Address of the most recent validated block</li>
        <ul>
          <li>this will allow the backup validators to know when they are “up to date”</li>
        </ul>
      </ul>

      <p>When backup validators first come online, the will:</p>

      <ol>
        <li>Download the base balance sheet from the primary validator</li>
        <li>
          Hash that balance sheet and compare it to the hash provided by the primary validator to ensure they match
        </li>
        <li>
          Store the address of the primary validators last validated block for reference (we will see how this is used
          later)
        </li>
      </ol>

      <p>
        After the backup validator has all data downloaded and has made their own copy of the balance sheet, the backup
        validator will begin processing blocks beginning with the hash of the base balance sheet and continuing until it
        reaches the address of the last validated block. The iteration logic is as follows:
      </p>

      <ol>
        <li>Download the verified block at the address</li>
        <li>Verify the block against their own copy of the balance sheet</li>
        <ol type="a">
          <li>
            if the backup validators results match the “Updated Balances” given by the primary validator (the block is
            verified) the backup validator will:
          </li>
          <ol type="i">
            <li>update the account balances on their own copy of the balance sheet</li>
            <li>send a block confirmation notice to any banks that are registered with them</li>
            <li>generate a hash of the block, which is also the address of the next block, and repeat</li>
          </ol>
        </ol>
        <ol type="a">
          <li>if the backup validator results do not match (the block is not verified) the backup validator will:</li>
          <ol type="i">
            <li>reject the updates and immediately end synchronization with the primary validator</li>
            <li>
              begin to accept incoming transactions as the new primary validator and broadcast their findings to the
              banks
            </li>
          </ol>
        </ol>
      </ol>

      <p>
        Note that when a discrepancy is found by a backup validator and is unable to re-confirm a block that has already
        been confirmed by the primary validator, that backup validator should begin to accept incoming transactions as
        the new primary validator. At that point in time, the other backup validators on the network would have also
        found the erroneous block and began acting as primary validators themselves.
      </p>
    </section>
  );
};

export default BackupValidators;
