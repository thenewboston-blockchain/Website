import React, {FC} from 'react';

import {DocContainer, DocImage, TableVertical} from 'components';

import BlockStructureFlow from './BlockStructureFlow.png';

const GuideBlockStructure: FC = () => {
  return (
    <DocContainer className="GuideBlockStructure" title="Block Structure" lastUpdated="24 Apr 2021">
      <p>
        Blocks are composed of <strong>signed requests</strong>, the resulting updates to the network, and the signature
        of the primary validator. Although each signed request shape differs based on the specific type of change the
        user is attempting to make to the network, the general structure is the same. Below we look at the common fields
        included in all signed requests.
      </p>
      <TableVertical
        altColors
        rows={[
          ['Data Type', 'Indicator for what shape and type of data is included in the message'],
          ['Account Number', 'Identifier for an account'],
          ['Account Lock', 'Unique value used to ensure that the same request is not processed more than once'],
          ['Signature', 'Value used as proof that the account owner has authorized the request'],
          ['Fees', 'Payments to nodes in exchange for processing the request'],
          ['Message', 'The shape and contents of this vary based on data type'],
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
