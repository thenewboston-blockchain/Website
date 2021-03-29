import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {CalloutType, DocCallout, DocContainer, DocImage, TableVertical} from 'components';

import NodeFlow from './NodeFlow.png';
import Nodes from './Nodes.png';

const GuideNodes: FC = () => {
  return (
    <DocContainer className="GuideNodes" title="Nodes" lastUpdated="27 Mar 2021">
      <p>
        Nodes play a critical role in several aspects of the network. They connect end users to the network and have
        several responsibilities against each. When users first download account manager applications and create their
        accounts, they first select the node they wish to use, they connect to the network through that node, and they
        can then begin sending blocks.
      </p>
      <p>
        Users can send blocks through any node they choose, at any time. However, because nodes typically keep only the
        transaction history of the accounts that have sent transactions through them, users generally use the same node
        for extended periods of time.
      </p>

      <DocImage alt="nodes" maxWidth={180} src={Nodes} />

      <p>
        Users can indicate the nodes they believe that must be designated as PV by boosting them, as described in the{' '}
        <NavLink to="/governance/locked-coins-and-boosting">locked coins and node boosting</NavLink> documentation. A
        schedule will be created at the beginning of each network day to indicate which nodes will be assigned a turn as
        PV on that network day. All nodes on the network will have a record of the PV schedule.
      </p>

      <DocCallout type={CalloutType.note}>
        <p>
          <strong>1 network day</strong> is the time unit used in the network, equal to 1,000 blocks (average number of
          confirmation blocks per day).
        </p>
        <p>
          The network does not use human time as a reliable form of time measurement, so time is measured in
          confirmation blocks. This method of measurement will fluctuate heavily early in relation to human time, but
          will become more accurate as the network grows.
        </p>
      </DocCallout>

      <DocImage alt="node flow" maxWidth={560} src={NodeFlow} />

      <p>A node is always in one of three states.</p>

      <TableVertical
        altColors
        rows={[
          ['Node', 'The default state where primary functionality is to connect end users to the network'],
          [
            'Primary Validator (PV)',
            'A designated node that accepts blocks from other nodes, and after successful validation/confirmation of each block, creates a new confirmation block to be added to the blockchain',
          ],
          [
            'Validator',
            'A node included in the current PV Schedule that checks the results of the PV when not acting as PV itself',
          ],
        ]}
      />
    </DocContainer>
  );
};

export default GuideNodes;
