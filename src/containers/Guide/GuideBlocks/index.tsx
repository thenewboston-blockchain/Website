import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {CalloutType, DocCallout, DocContainer, DocImage, DocList} from 'components';

import BlockChange from './BlockChange.png';
import GenesisBlock from './GenesisBlock.png';
import GenesisBlockComposition from './GenesisBlockComposition.png';

const GuideBlocks: FC = () => {
  return (
    <DocContainer className="GuideBlocks" title="Blocks" lastUpdated="22 Apr 2021">
      <p>
        The network is initialized from a single node and a <strong>genesis block</strong>. This is the very first block
        in the blockchain which defines the initial structure of the network.
      </p>
      <DocImage alt="genesis block" maxWidth={460} src={GenesisBlock} />

      <p>
        The genesis block consists of the minimum amount of information required to initialize a new network including:
      </p>
      <DocList variant="ul">
        <li>All account information from alpha</li>
        <li>The node registration of the source node</li>
        <li>The initial schedule consisting a single node (the source node)</li>
      </DocList>
      <DocImage alt="genesis block composition" maxWidth={540} src={GenesisBlockComposition} />

      <p>
        Blocks are data structures that represent a description of change to the network. These originate from signed
        requests and may include:
      </p>
      <DocList variant="ul">
        <li>a transfer of coins between accounts</li>
        <li>the registration of a username</li>
        <li>a new node being added to the network</li>
        <li>etc...</li>
      </DocList>
      <DocImage alt="block change" maxWidth={660} src={BlockChange} />

      <DocCallout type={CalloutType.note}>
        For details on all the different block types, see the <NavLink to="/guide/block-types">Block Types</NavLink>{' '}
        section of the documentation.
      </DocCallout>
    </DocContainer>
  );
};

export default GuideBlocks;
