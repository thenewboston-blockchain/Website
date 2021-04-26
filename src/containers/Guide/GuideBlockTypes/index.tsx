import React, {FC} from 'react';

import {CalloutType, DocCallout, DocContainer} from 'components';
import './GuideBlockTypes.scss';
import {NavLink} from 'react-router-dom';

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
      <p>
        The following section documents the message fields found in each block type. This excludes account lock and
        fees, as those fields are common to all block types.
      </p>
      <DocCallout type={CalloutType.important}>
        The genesis block is excluded in this documentation as it has both a special use case and structure. For more
        details on the genesis block, see the <NavLink to="/guide/blocks">Blocks</NavLink> section of the documentation.
      </DocCallout>
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
