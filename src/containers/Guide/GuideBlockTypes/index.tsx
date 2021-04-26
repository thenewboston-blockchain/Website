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

  const renderBlockTypeRow = (name: string, backgroundColor: string, description: string) => (
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
      {renderBlockTypeRow('Coin Transfer', '#b2d6ef', 'Transfer of coins between accounts')}
      {renderBlockTypeRow(
        'Coin Lock',
        '#e5e5e5',
        'The locking of coins in exchange for points and the ability to boost a node',
      )}
      {renderBlockTypeRow('Node Registration', '#d1bcd2', 'Nodes enrollment onto the network')}
      {renderBlockTypeRow('Node Boost', '#f9d2de', 'Vote for a node to be included in the schedule')}
      {renderBlockTypeRow('Schedule', '#99d5ca', 'Addition of a node to the list of upcoming validators')}
      {renderBlockTypeRow('Username Registration', '#ffbbb1', 'The purchase of a username by an account')}
      {renderBlockTypeRow('Governor Application', '#ffdba9', 'Enables an account to be eligible for governor')}
      {renderBlockTypeRow('Vote purchase', '#c7e8ac', 'The purchase of one or more votes for a given account')}
      {renderBlockTypeRow('Governor Vote', '#ffeca9', 'Places one or more vote for a governor')}
    </DocContainer>
  );
};

export default GuideBlockTypes;
