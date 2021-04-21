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
      <DocImage alt="block change" maxWidth={620} src={BlockChange} />
      <p>A block is a request indicating some change a user would like to make to the network.</p>

      <DocSubHeader>Block Types</DocSubHeader>
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
