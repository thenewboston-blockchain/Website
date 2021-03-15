import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import BlockchainArchitecture from './BlockchainArchitecture.png';
import BlockchainSync from './BlockchainSync.png';

const GuideBlockchainArchitecture: FC = () => {
  return (
    <DocContainer className="GuideBlockchainArchitecture" title="Blockchain Architecture" lastUpdated="06 Mar 2021">
      <p>
        Every PV will provide three important pieces of data that all nodes will use to validate all network
        transactions:
      </p>

      <DocList variant="ul">
        <li>Root account file</li>
        <ul>
          <li>This is the flattened representation of all account balances at a given point in time</li>
        </ul>
        <li>Root account file hash</li>
        <ul>
          <li>
            After downloading the root account file from the PV, nodes will hash their downloaded copy and compare it to
            the root account file hash provided by the primary validator to ensure the values match
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
          <li>Used by the nodes to indicate when syncing is complete</li>
        </ul>
      </DocList>

      <DocImage alt="blockchain architecture" maxWidth={1000} src={BlockchainArchitecture} />

      <p>When nodes first come online, they will:</p>

      <DocList variant="ol">
        <li>Download the root account file from the PV.</li>
        <li>
          Hash the downloaded root account file and compare it to the hash provided by the PV to ensure they match.
        </li>
        <li>
          Store the block hash of the PVs last confirmation block, also known as the HEAD block hash, for reference (we
          will see how this is used later).
        </li>
      </DocList>

      <p>
        After the node has all data downloaded and has made their own copy of the account file, the node will begin
        processing blocks starting with the seed block and continuing until it reaches the address of the HEAD block.
        The iteration logic is as follows:
      </p>

      <DocList variant="ol">
        <li>Fetch the next confirmation block from the PV</li>
        <li>Verify the block against their own account data</li>
        <ol type="a">
          <li>
            If the node's results match the updated balances given by the PV (the block is verified), the node will:
          </li>
          <ol type="i">
            <li>Update the account balances</li>
            <li>
              Generate a hash of the block message, which will become the block identifier of the next confirmation
              block and repeat
            </li>
          </ol>
        </ol>
      </DocList>

      <DocImage alt="blockchain sync" maxWidth={740} src={BlockchainSync} />
    </DocContainer>
  );
};

export default GuideBlockchainArchitecture;
