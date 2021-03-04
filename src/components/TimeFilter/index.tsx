import React, {FC} from 'react';
import clsx from 'clsx';

import {GenericVoidFunction} from 'types/generic';
import {Time, TimeFilterType} from 'types/github';

import './TimeFilter.scss';

export interface TimeFilterProps {
  className?: string;
  selectedFilter: TimeFilterType;
  setSelectedFilter: GenericVoidFunction;
}

const TimeFilter: FC<TimeFilterProps> = ({className, selectedFilter, setSelectedFilter}) => {
  const handleOptionClick = (i: TimeFilterType): GenericVoidFunction => (): void => {
    setSelectedFilter(i);
  };

  const renderOptions = () => {
    return [Time.days7, Time.days30, Time.all].map((option) => (
      <button
        className={clsx('TimeFilter__option', {
          'TimeFilter__option--active': option === selectedFilter,
        })}
        data-testid="TimeFilter__option"
        key={option}
        onClick={handleOptionClick(option)}
      >
        {option}
      </button>
    ));
  };

  return (
    <div className={clsx('TimeFilter', className)} data-testid="TimeFilter">
      <h2>Top Contributors</h2>
      <div className="TimeFilter__option-container" data-testid="TimeFilter__option-container">
        {renderOptions()}
      </div>
    </div>
  );
};

export default TimeFilter;
