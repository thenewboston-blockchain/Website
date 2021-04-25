import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, TableVertical} from 'components';

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
          [
            'Node',
            'Network server that has several responsibilities, such as checking that requests conform to network protocol and routing blocks',
          ],
          [
            'Primary Validator (PV)',
            "Validator that accepts requests from other nodes; after successful validation of each request, it creates a new block which is first added to it's own blockchain and then forwarded to the confirmation validators",
          ],
          [
            'Confirmation Validator (CV)',
            'Validator that will receive blocks from the PV, validate those results, and if valid add that block to their blockchain',
          ],
        ]}
      />

      <p>
        Users may also indicate their most trusted nodes by boosting them, as described in the{' '}
        <NavLink to="/governance/locked-coins-and-boosting">locked coins and node boosting</NavLink> documentation. The
        top boosted nodes on the network will be designated as validators and will be responsible for the creation of
        the blockchain.
      </p>
    </DocContainer>
  );
};

export default GuideNodes;
