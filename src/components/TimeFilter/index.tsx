import React from 'react';

import {GenericVoidFunction, SFC} from 'types/generic';
import {Time, TimeFilterType} from 'types/github';

import * as S from './Styles';

export interface TimeFilterProps {
  selectedFilter: TimeFilterType;
  setSelectedFilter: GenericVoidFunction;
}

const TimeFilter: SFC<TimeFilterProps> = ({className, selectedFilter, setSelectedFilter}) => {
  const handleOptionClick = (i: TimeFilterType): GenericVoidFunction => (): void => {
    setSelectedFilter(i);
  };

  const renderOptions = () => {
    return [Time.days7, Time.days30, Time.all].map((option) => {
      const isActive = option === selectedFilter;
      return (
        <S.Option
          isActive={isActive}
          className={className && `${className}__option ${isActive ? `${className}__option--active` : ''}`}
          data-testid="TimeFilter__option"
          key={option}
          onClick={handleOptionClick(option)}
        >
          {option}
        </S.Option>
      );
    });
  };

  return (
    <S.Container className={className} data-testid="TimeFilter">
      <S.Heading>Top Contributors</S.Heading>
      <S.OptionContainer
        className={className && `${className}__option-container`}
        data-testid="TimeFilter__option-container"
      >
        {renderOptions()}
      </S.OptionContainer>
    </S.Container>
  );
};

export default TimeFilter;
