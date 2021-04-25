import React, {FC} from 'react';

import {DocContainer, DocImage, DocList, DocSubHeader} from 'components';

import BlockChange from './BlockChange.png';
import GenesisBlock from './GenesisBlock.png';
import GenesisBlockComposition from './GenesisBlockComposition.png';
import './GuideBlocks.scss';

const GuideBlocks: FC = () => {
  const renderBlock = (name: string, backgroundColor: string) => (
    <div className="GuideBlocks__block" style={{backgroundColor}}>
      <div className="GuideBlocks__block--name">{name}</div>
    </div>
  );

  const renderBlockTypeRow = (name: string, description: string, backgroundColor: string) => (
    <div className="GuideBlocks__block-type-row">
      {renderBlock(name, backgroundColor)}
      <div className="GuideBlocks__block-type-row--description">{description}</div>
    </div>
  );

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

      <DocSubHeader>Block Types</DocSubHeader>
      {renderBlockTypeRow(
        'Genesis',
        'First block of the blockchain that defines the initial structure of the network',
        '#e5e5e5',
      )}
      {renderBlockTypeRow('Coin Transfer', 'Transfer of coins between accounts', '#b2d6ef')}
      {renderBlockTypeRow('Node Registration', 'Nodes enrollment onto the network', '#d1bcd2')}
      {renderBlockTypeRow('Schedule', 'Addition of a node to the list of upcoming validators', '#99d5ca')}
      {renderBlockTypeRow('Username Registration', 'The purchase of a username by an account', '#f9d2de')}
      {renderBlockTypeRow(
        'Lock',
        'The locking of coins in exchange for points and the ability to boost a node',
        '#ffeca9',
      )}
    </DocContainer>
  );
};

export default GuideBlocks;
