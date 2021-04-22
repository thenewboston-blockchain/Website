import React, {FC} from 'react';

import {DocContainer, DocImage, DocSubHeader} from 'components';

import BlockChange from './BlockChange.png';
import './GuideBlockTypes.scss';

const GuideBlockTypes: FC = () => {
  const renderBlock = (name: string, backgroundColor: string) => (
    <div className="GuideBlockTypes__block" style={{backgroundColor}}>
      <div className="GuideBlockTypes__block--name">{name}</div>
    </div>
  );

  const renderBlockTypeRow = (name: string, description: string, backgroundColor: string) => (
    <div className="GuideBlockTypes__block-type-row">
      {renderBlock(name, backgroundColor)}
      <div className="GuideBlockTypes__block-type-row--description">{description}</div>
    </div>
  );

  return (
    <DocContainer className="GuideBlockTypes" title="Block Types" lastUpdated="21 Apr 2021">
      <p>
        Networks are first created from a Genesis block. The Genesis block will define the initial structure of the
        network. This is also the very first block in the blockchain.
      </p>
      <p>
        Each additional block added to the blockchain represents a change to the network. These changes originate from
        user requests and may include a transfer of coins between accounts, a new node being added to the network, the
        registration of a username, and so on.
      </p>
      <DocImage alt="block change" maxWidth={620} src={BlockChange} />
      <p>
        When a block is added to the blockchain by the PV, that block will be forwarded to all other validators for
        verification. The block will include not only the original request, but also the resulting changes to the
        underlying data. When the validators receive this block, they will process the users request and compare their
        resulting changes to those from the PV.
      </p>
      <p>
        This continuous validation of ordered blocks and comparison of results enables all nodes in the network to
        remain in sync. This is the mechanism that allows the network nodes to remain distributed yet maintain a shared
        state.
      </p>

      <DocSubHeader>Block Type Definitions</DocSubHeader>
      {renderBlockTypeRow('Genesis', 'First block of the blockchain', '#e5e5e5')}
      {renderBlockTypeRow('Tx', 'Transfer of coins between accounts', '#b2d6ef')}
      {renderBlockTypeRow('Node Registration', 'Nodes registration onto the network', '#d1bcd2')}
      {renderBlockTypeRow('Schedule', 'Addition of a node to the PV schedule', '#99d5ca')}
      {renderBlockTypeRow('Username Registration', 'The purchase of a username by an account', '#f9d2de')}
      {renderBlockTypeRow('Lock', 'The locking of coins', '#ffeca9')}
    </DocContainer>
  );
};

export default GuideBlockTypes;
