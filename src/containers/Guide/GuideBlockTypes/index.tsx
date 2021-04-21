import React, {FC} from 'react';

import {DocContainer} from 'components';

import './GuideBlockTypes.scss';

const GuideBlockTypes: FC = () => {
  const renderBlock = (name: string) => (
    <div className="GuideBlockTypes__block">
      <div className="GuideBlockTypes__block--name">{name}</div>
    </div>
  );

  const renderBlockTypeRow = (name: string, description: string) => (
    <div className="GuideBlockTypes__block-type-row">
      {renderBlock(name)}
      <div className="GuideBlockTypes__block-type-row--description">{description}</div>
    </div>
  );

  return (
    <DocContainer className="GuideBlockTypes" title="Block Types" lastUpdated="21 Apr 2021">
      {renderBlockTypeRow('Genesis', 'First block of the blockchain')}
      {renderBlockTypeRow('Tx', 'Transfer of coins between accounts')}
    </DocContainer>
  );
};

export default GuideBlockTypes;
