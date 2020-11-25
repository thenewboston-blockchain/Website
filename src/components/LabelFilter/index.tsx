import React, {FC} from 'react';
import clsx from 'clsx';

import {Label} from 'components';
import './LabelFilter.scss';

interface ComponentProps {
  className?: string;
  handleLabelClick(labelName: string): () => void;
  selectedLabelNames: string[];
}

const LABEL_COLORS = {
  bug: 'cd3d64',
  design: 'c7c2ea',
  discussion: 'f8e5b9',
  documentation: 'f0b4e4',
  engineering: '067ab8',
  suggestion: 'f8b886',
};

const LabelFilter: FC<ComponentProps> = ({className, handleLabelClick, selectedLabelNames}) => {
  const renderLabels = () => {
    return Object.entries(LABEL_COLORS).map(([labelName, hexColor]) => (
      <button className="LabelFilter__button" key={labelName} onClick={handleLabelClick(labelName)}>
        <Label
          className="LabelFilter__label"
          color={selectedLabelNames.includes(labelName) ? hexColor : 'e3e8ee'}
          key={labelName}
          name={labelName}
        />
      </button>
    ));
  };

  return <div className={clsx('LabelFilter', className)}>{renderLabels()}</div>;
};

export default LabelFilter;
