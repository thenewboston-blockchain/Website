import React, {FC} from 'react';

import {DocContainer, DocImage, DocList} from 'components';

import GenesisBlock from './GenesisBlock.png';
import GenesisBlockComposition from './GenesisBlockComposition.png';

const GuideNetworkInitialization: FC = () => {
  return (
    <DocContainer className="GuideNetworkInitialization" title="Network Initialization" lastUpdated="21 Apr 2021">
      <p>
        The network is initialized from a single node and a genesis block. This block is the very first block in the
        blockchain.
      </p>
      <DocImage alt="genesis block" maxWidth={400} src={GenesisBlock} />
      <p>
        The genesis block consists of the minimum amount of information required to initialize a new network including:
      </p>
      <DocList variant="ul">
        <li>All account information from alpha</li>
        <li>The node registration for the creating node</li>
        <li>The initial schedule consisting a single node (the origin node)</li>
      </DocList>
      <DocImage alt="genesis block composition" maxWidth={500} src={GenesisBlockComposition} />
    </DocContainer>
  );
};

export default GuideNetworkInitialization;
