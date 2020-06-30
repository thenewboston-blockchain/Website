import React from 'react';

import './ConfirmationValidators.scss';

const ConfirmationValidators = () => {
  return (
    <section className="ConfirmationValidators">
      <h1 className="page-title">Confirmation Validators</h1>
      <p>
        The final technical details to cover are the specific functionality of the confirmation validators and
        generation of confirmation blocks (which will be outlined in the next section).
      </p>
      <p>
        Every primary validator will provide three important pieces of data that all confirmation validators will use to
        validate all network transactions:
      </p>

      <ul className="mb-20">
        <li>Root account file</li>
        <ul>
          <li>
            this is the flattened representation of all account balances at the moment in time that the validator was
            first set to "primary"
          </li>
          <li>the data in the root balance sheet provided by the primary validator will never be updated in any way</li>
        </ul>
        <li>Root account file hash</li>
        <ul>
          <li>
            after downloading the root account file from the primary validator, confirmation validators will hash their
            downloaded copy and compare it to the root account file hash provided by the primary validator to ensure the
            values match
          </li>
        </ul>
        <li>Seed block identifier</li>
        <ul>
          <li>identifier of the last block that was used when the root account file was generated</li>
          <li>used to verify all account balances on the root account file at that moment in time</li>
        </ul>
        <li>Head block hash</li>
        <ul>
          <li>Hashed message of the primary validators most recently verified block</li>
          <li>used by the confirmation validators to know when syncing is complete</li>
        </ul>
      </ul>

      <p>When confirmation validators first come online, the will:</p>

      <ol className="mb-20">
        <li>Download the root balance sheet from the primary validator</li>
        <li>
          Hash that balance sheet and compare it to the hash provided by the primary validator to ensure they match
        </li>
        <li>
          Store the block hash of the primary validators last validated block, also known as the head block hash, for
          reference (we will see how this is used later)
        </li>
      </ol>

      <p>
        After the confirmation validator has all data downloaded and has made their own copy of the balance sheet, the
        confirmation validator will begin processing blocks beginning with the seed block and continuing until it
        reaches the address of the head block. The iteration logic is as follows:
      </p>

      <ol className="mb-20">
        <li>Download the confirmed block from the primary validator</li>
        <li>Verify the block against their own copy of the balance sheet</li>
        <ol type="a">
          <li>
            if the confirmation validators results match the updated balances given by the primary validator (the block
            is verified) the confirmation validator will:
          </li>
          <ol type="i">
            <li>update the account balances</li>
            <li>send a confirmation block to any banks that are registered with them</li>
            <li>
              generate a hash of the block message, which will become the block_identifier of the next confirmed block,
              and repeat
            </li>
          </ol>
        </ol>
      </ol>

      <p>
        Note that when a discrepancy is found by a confirmation validator and is unable to re-confirm a block that has
        already been confirmed by the primary validator, that confirmation validator should begin to accept incoming
        transactions as the new primary validator. At that point in time, the other confirmation validators on the
        network would have also found the erroneous block and began acting as primary validators themselves.
      </p>
      <p>
        A network state would then occur where all confirmation validators were no longer syncing with the primary
        validator due to incorrect information provided by the primary validator. The banks then know to mark that
        primary validator as "untrusted" and they will jointly elect a new primary validator from all of the available
        confirmation validators. The banks will switch their primary validators to the confirmation validator who has
        earned the highest level of network trust which is a value that they will already have predetermined. After the
        election, all confirmation validators will become aware of the new bank elected primary validator and will begin
        syncing to it. This will allow for an extremely fault tolerant network with zero downtime, even as the entire
        network is changing over to a new primary validator.
      </p>
      <p>
        The process in which existing confirmation validators must re-sync with a new primary validator is as follows:
      </p>

      <ol className="mb-20">
        <li>Obtain the seed block identifier from the new primary validator</li>
        <ol type="a">
          <li>
            if the confirmation validator does not have this block (meaning the new validator was ahead in processing
            blocks) then the confirmation validator must query the new primary validator with the address of the most
            recent validated block and continue syncing until the seed block is found
          </li>
        </ol>
        <li>
          Beginning with the previous primary validators root balance sheet, apply the confirmed blocks (already
          verified by the confirmation validator) until reaching the seed block from the new primary validator
        </li>
        <li>Compare the updated balance sheet to the root balance sheet of the new primary validator</li>
        <ol type="a">
          <li>
            if they match, accept them as the new primary validator and copy their root balance sheet, hash of that base
            balance sheet, and hash of the base block over to the confirmation validators config
          </li>
        </ol>
      </ol>

      <p>
        When a new block is verified by the primary validator, the primary validator will send a POST request to all
        confirmation validators. This will inform the confirmation validators of the updated data immediately, and
        prevent the confirmation validators from needing to continuously make GET requests to the primary validator to
        check for new blocks.
      </p>
      <p>
        Given that confirmation validators do not earn points through transaction fees like the primary validator, the
        incentive for individuals to deploy and maintain confirmation validators is achieved through separate means.
        Confirmation validators may receive points from banks through pre-registration fees. This process is useful for
        banks by avoiding the need to register with a new validator if the primary validator were to go offline. It is
        also beneficial to bank members and the network as a whole in ensuring the network would remain functional in
        the event the primary validator goes down. Confirmation validators also provide confirmation services, which
        will be discussed in more detail in the following section.
      </p>
      <p>
        It is important to note that confirmation validators may also become the primary network validator if the banks
        simply wish to change primary validators for any number of reasons (improved reliability, faster response times,
        additional data services, etc...). The primary validator is appointed through consensus of the banks and does
        not require the existing primary validator to go offline.
      </p>
    </section>
  );
};

export default ConfirmationValidators;
