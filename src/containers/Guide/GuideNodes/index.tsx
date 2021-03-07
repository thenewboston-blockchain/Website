import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, TableVertical} from 'components';

import NodeFlow from './NodeFlow.png';
import Nodes from './Nodes.png';

const GuideNodes: FC = () => {
  return (
    <DocContainer className="GuideNodes" title="Nodes" lastUpdated="06 Mar 2021">
      <p>
        Nodes play a critical role regarding several aspects of the network. They act as the bond between end users and
        the network and have several responsibilities to each. When users first download account manager applications
        and create their accounts, they will then select a node which they wish to use. They are then able to connect to
        the network through that node and may begin sending blocks.
      </p>
      <p>
        Users are able to send blocks through any node of their choosing at any time. However, due to the fact that
        nodes will typically only keep the transaction history of the accounts who have sent transactions through them,
        users will generally use the same node for extended periods of time.
      </p>

      <DocImage alt="nodes" maxWidth={180} src={Nodes} />

      <p>
        Users are able to indicate which nodes they feel should be designated as PV by boosting them, as described in
        the <NavLink to="/governance/locked-coins-and-banking-boosting">locked coins and node boosting</NavLink>{' '}
        documentation. A schedule will be created at the beginning of each block day to indicate which nodes will be
        assigned a turn as PV on that block day. All nodes on the network will have a record of the PV schedule.
      </p>

      <DocImage alt="node flow" maxWidth={560} src={NodeFlow} />

      <p>A node will always be in one of three states.</p>

      <TableVertical
        altColors
        rows={[
          [
            'Node',
            'The default state where primary functionality is to provide end users a connection into the network',
          ],
          [
            'Primary Validator (PV)',
            'A designated node that accepts blocks from other nodes and after successful validation/confirmation of each block, creates a new confirmation block which is added to the blockchain',
          ],
          [
            'Validator',
            'Nodes included in the current PV Schedule who are responsible for checking the results of the PV when not acting as PV themselves',
          ],
        ]}
      />
    </DocContainer>
  );
};

export default GuideNodes;
