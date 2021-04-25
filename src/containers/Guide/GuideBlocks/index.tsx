import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {DocContainer, DocImage, DocList, DocSubHeader} from 'components';

import BlockChange from './BlockChange.png';
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
        Blocks are data structures that represent a change to the network. These changes originate from signed requests
        and may include:
      </p>
      <DocList variant="ul">
        <li>a transfer of coins between accounts</li>
        <li>the registration of a username</li>
        <li>a new node being added to the network</li>
        <li>etc...</li>
      </DocList>
      <p>
        The very first block in the blockchain is referred to as the <strong>genesis block</strong>. This block defines
        the initial structure of the network. We will examine the genesis block in more detail in the{' '}
        <NavLink to="/guide/transfers">Network Initialization</NavLink> section.
      </p>
      <DocImage alt="block change" maxWidth={620} src={BlockChange} />
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
