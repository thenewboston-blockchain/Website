import React, {FC} from 'react';

import {DocContainer} from 'components';
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
    <DocContainer className="GuideBlockTypes" title="Block Types" lastUpdated="25 Apr 2021">
      <p>Here are some block types.</p>
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

export default GuideBlockTypes;
