import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import ConfirmationValidatorBlockSyncing from './ConfirmationValidatorBlockSyncing.png';
import ConfirmationValidatorSyncing from './ConfirmationValidatorSyncing.png';

const GuideConfirmationValidators: FC = () => {
  return (
    <DocContainer className="GuideConfirmationValidators" title="Confirmation Validators">
      <p>
        The final technical details to cover are the specific functionality of the confirmation validators and
        generation of confirmation blocks (which will be outlined in the next section).
      </p>
      <p>
        Every primary validator will provide three important pieces of data that all confirmation validators will use to
        validate all network transactions:
      </p>

      <DocList variant="ul">
        <li>Root account file</li>
        <ul>
          <li>This is the flattened representation of all account balances at a given point in time</li>
        </ul>
        <li>Root account file hash</li>
        <ul>
          <li>
            After downloading the root account file from the primary validator, confirmation validators will hash their
            downloaded copy and compare it to the root account file hash provided by the primary validator to ensure the
            values match
          </li>
          <li>This process is used to ensure that data integrity is maintained during the download process</li>
        </ul>
        <li>Seed block identifier</li>
        <ul>
          <li>Identifier of the last block that was used when the root account file was generated</li>
          <li>Used to verify all account balances on the root account file at that moment in time</li>
        </ul>
        <li>Head block hash</li>
        <ul>
          <li>Value representing the message hash of the primary validator's most recently verified block</li>
          <li>Used by the confirmation validators to know when syncing is complete</li>
        </ul>
      </DocList>

      <DocImage alt="confirmation validator syncing" maxWidth={1000} src={ConfirmationValidatorSyncing} />

      <p>When confirmation validators first come online, they will:</p>

      <DocList variant="ol">
        <li>Download the root account file from the primary validator.</li>
        <li>
          Hash the downloaded root account file and compare it to the hash provided by the primary validator to ensure
          they match.
        </li>
        <li>
          Store the block hash of the primary validator's last validated block, also known as the HEAD block hash, for
          reference (we will see how this is used later).
        </li>
      </DocList>

      <p>
        After the confirmation validator has all data downloaded and has made their own copy of the account file, the
        confirmation validator will begin processing blocks starting with the seed block and continuing until it reaches
        the address of the HEAD block. The iteration logic is as follows:
      </p>

      <DocList variant="ol">
        <li>Fetch the next confirmation block from the primary validator</li>
        <li>Verify the block against their own account data</li>
        <ol type="a">
          <li>
            If the confirmation validator's results match the updated balances given by the primary validator (the block
            is verified), the confirmation validator will:
          </li>
          <ol type="i">
            <li>Update the account balances</li>
            <li>
              Generate a hash of the block message, which will become the block identifier of the next confirmed block
              and repeat
            </li>
          </ol>
        </ol>
      </DocList>

      <DocImage alt="confirmation validator block syncing" maxWidth={740} src={ConfirmationValidatorBlockSyncing} />

      <p>
        The process in which existing confirmation validators must resync with a new primary validator is as follows:
      </p>

      <DocList variant="ol">
        <li>Obtain the seed block identifier from the new primary validator</li>
        <ol type="a">
          <li>
            If the confirmation validator does not have this block (meaning the new validator was ahead in processing
            blocks), then the confirmation validator must query the new primary validator with the address of the most
            recent validated block and continue syncing until the seed block is found.
          </li>
        </ol>
        <li>
          Beginning with the previous primary validator's root account file, apply the confirmed blocks (already
          verified by the confirmation validator) until reaching the seed block from the new primary validator.
        </li>
        <li>Compare the updated account file to the root account file of the new primary validator</li>
        <ol type="a">
          <li>
            If they match, accept them as the new primary validator and copy their root account file, hash of that base
            account file, and hash of the base block over to the confirmation validators config.
          </li>
        </ol>
      </DocList>

      <p>
        When the primary validator verifies a new block, it will send a POST request to all confirmation validators.
        This will inform the confirmation validators of the updated data immediately, and prevent the confirmation
        validators from needing to continuously make GET requests to the primary validator to check for new blocks. The
        primary validator has incentive to reliably forward all confirmation blocks to the confirmation validators,
        since this will help the primary validator's trust level remain high among all banks.
      </p>
      <p>
        Given that confirmation validators do not earn coins through transaction fees like the primary validator, the
        incentive for individuals to deploy and maintain confirmation validators is achieved through separate means.
        Confirmation validators provide confirmation services which can be purchased by banks. This topic will be
        discussed in more detail in the following section.
      </p>
      <p>
        It is important to note that confirmation validators may also become the primary network validator if the banks
        simply wish to change primary validators for any number of reasons (improved reliability, faster response times,
        additional data services, etc...). The primary validator is determined by the banks and does not require the
        existing primary validator to go offline.
      </p>
    </DocContainer>
  );
};

export default GuideConfirmationValidators;
