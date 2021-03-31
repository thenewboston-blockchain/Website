import React, {FC} from 'react';

import {DocContainer, DocImage, DocList, TableVertical} from 'components';
import {NavLink} from 'react-router-dom';

import BlockchainArchitecture from './BlockchainArchitecture.png';
import BlockchainSync from './BlockchainSync.png';

const GuideBlockchainArchitecture: FC = () => {
  return (
    <DocContainer className="GuideBlockchainArchitecture" title="Blockchain Architecture" lastUpdated="28 Mar 2021">
      <p>
        Every Primary Validator (PV) provides important pieces of data that all nodes must use to validate network
        transactions.
      </p>
      <TableVertical
        altColors
        rows={[
          [<strong>Data</strong>, <strong>Description</strong>, <strong>Purpose</strong>],
          [
            <strong>Root account file</strong>,
            'This is a flattened representation of all account balances at any point in time.',
            <p>
              See <NavLink to="/guide/root-account-file">Root Account File</NavLink>.
            </p>,
          ],
          [
            <strong>Root account file hash</strong>,
            'Nodes must download the root account file from the PV, hash their downloaded copy, and compare it against the root account file hash provided by the PV to ensure that values match.',
            'This guarantees data integrity during the download process.',
          ],
          [
            <strong>Seed block identifier</strong>,
            'An identifier of the last block used when the root account file was generated.',
            'It verifies all account balances on the root account file at that moment in time.',
          ],
          [
            <strong>Head block hash</strong>,
            "This value represents the message hash of the PV's most recently verified block.",
            'The nodes use it to indicate when syncing is complete.',
          ],
        ]}
      />

      <DocImage alt="blockchain architecture" maxWidth={1000} src={BlockchainArchitecture} />

      <p>So, when nodes first come online, they:</p>

      <DocList variant="ol">
        <li>Download the root account file from the PV.</li>
        <li>
          Hash the downloaded root account file and compare it to the hash provided by the PV to ensure they match.
        </li>
        <li>
          Store the block hash of the PV's last confirmation block, also known as the HEAD block hash, for reference.
        </li>
      </DocList>

      <p>
        After a node downloads all data and makes its own copy of the account file, it processes blocks, starting with
        the seed block and continuing until it reaches the address of the HEAD block. The iteration logic follows:
      </p>

      <DocList variant="ol">
        <li>Fetch the next confirmation block from the PV.</li>
        <li>Verify the block against the node's account data.</li>
        <li>
          If the node's results match the updated balances that the PV provides, the block is verified, and then the
          node will:
        </li>
        <ul>
          <li>Update the account balances.</li>
          <li>
            Generate a hash of the block message, which will become the block identifier of the next confirmation.
          </li>
          <li>Repeat.</li>
        </ul>
      </DocList>

      <DocImage alt="blockchain sync" maxWidth={740} src={BlockchainSync} />
    </DocContainer>
  );
};

export default GuideBlockchainArchitecture;
