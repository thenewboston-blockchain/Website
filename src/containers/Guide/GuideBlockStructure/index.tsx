import React, {FC} from 'react';

import {DocContainer, DocImage, TableVertical} from 'components';

import BlockStructure from './BlockStructure.png';
import BlockStructureFlow from './BlockStructureFlow.png';
import './GuideBlockStructure.scss';

const GuideBlockStructure: FC = () => {
  return (
    <DocContainer className="GuideBlockStructure" title="Block Structure" lastUpdated="24 Apr 2021">
      <p>
        With exception of the genesis block, all blocks follow the same general structure. This structure provides a
        clear description of change to one or more objects in the network, including both the original request and the
        resulting updates.
      </p>

      <DocImage alt="block structure" maxWidth={680} src={BlockStructure} />

      <h3>Block Fields</h3>
      <TableVertical
        altColors
        className="GuideBlockStructure__TableVertical"
        rows={[
          ['Signed Request', 'Request data that has been signed by an account owner'],
          ['Updates', 'Resulting changes to one or more objects'],
          [
            'Signature',
            'The signature of the PV indicating the validity of the block and the addition to its blockchain',
          ],
        ]}
      />

      <h3>Signed Request Fields</h3>
      <TableVertical
        altColors
        className="GuideBlockStructure__TableVertical"
        rows={[
          ['Data Type', 'Indicator for what shape and type of data is included in the message'],
          ['Account Number', 'Identifier for an account'],
          ['Message', 'The shape and contents of this vary based on data type'],
          ['Signature', 'Value used as proof that the account owner has authorized the request'],
        ]}
      />

      <h3>Message Fields</h3>
      <TableVertical
        altColors
        className="GuideBlockStructure__TableVertical"
        rows={[
          ['Account Lock', 'Unique value used to ensure that the same request is not processed more than once'],
          ['Fees', 'Payments to nodes in exchange for processing the request'],
        ]}
      />

      <p>
        The following diagram outlines the flow from signed request to confirmation. As requests move throughout the
        network, nodes will sign the data as indication of validity. Each node type plays a different role in the
        processing of a request and in turn the creation of blocks on the blockchain.
      </p>
      <DocImage alt="validation threshold" maxWidth={600} src={BlockStructureFlow} />
    </DocContainer>
  );
};

export default GuideBlockStructure;
