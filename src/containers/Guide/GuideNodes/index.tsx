import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, TableVertical} from 'components';

import NodeFlow from './NodeFlow.png';
import Nodes from './Nodes.png';

const GuideNodes: FC = () => {
  return (
    <DocContainer className="GuideNodes" title="Nodes" lastUpdated="24 Apr 2021">
      <p>
        A nodes primary functionality is to connect end users to the network. When users first download applications
        they are typically assigned a default node, although this setting can be overridden. The node a users chooses to
        connect to their network is known as their "active node". Once connected, the user may begin using the network.
      </p>

      <DocImage alt="nodes" maxWidth={180} src={Nodes} />

      <p>A node is always in one of three states.</p>
      <TableVertical
        altColors
        rows={[
          ['Node', 'The default state where primary functionality is to connect end users to the network'],
          [
            'Primary Validator (PV)',
            'An elected node that accepts signed requests from other nodes, and after successful validation of each, creates a new block that is added to the blockchain',
          ],
          [
            'Confirmation Validator (CV)',
            'A node included in the current schedule that checks the results of the PV when not acting as PV itself',
          ],
        ]}
      />

      <p>
        Users may also indicate their most trusted nodes by boosting them, as described in the{' '}
        <NavLink to="/governance/locked-coins-and-boosting">locked coins and node boosting</NavLink> documentation. The
        top boosted nodes on the network will be designated as validators and will be responsible for the creation of
        the blockchain.
      </p>

      <DocImage alt="node flow" maxWidth={560} src={NodeFlow} />
    </DocContainer>
  );
};

export default GuideNodes;
