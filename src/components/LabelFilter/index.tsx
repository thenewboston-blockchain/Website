import {Label} from 'components';
import React from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

export interface LabelFilterProps {
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

const DEFAULT_LABEL_COLOR = 'e3e8ee';

const LabelFilter: SFC<LabelFilterProps> = ({className, handleLabelClick, selectedLabelNames}) => {
  const renderLabels = () => {
    return Object.entries(LABEL_COLORS).map(([labelName, hexColor]) => (
      <S.LabelFilterButton data-testid="LabelFilter__button" key={labelName} onClick={handleLabelClick(labelName)}>
        <Label
          className="LabelFilter__label"
          color={selectedLabelNames.includes(labelName) ? hexColor : DEFAULT_LABEL_COLOR}
          key={labelName}
          name={labelName}
        />
      </S.LabelFilterButton>
    ));
  };

  return (
    <S.LabelFilter className={className} data-testid="LabelFilter">
      {renderLabels()}
    </S.LabelFilter>
  );
};

export default LabelFilter;
