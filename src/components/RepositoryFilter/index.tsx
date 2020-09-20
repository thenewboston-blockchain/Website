import React, {FC} from 'react';
import clsx from 'clsx';

import {GenericVoidFunction} from 'types/generic';
import {Repository, RepositoryFilterType} from 'types/github';
import './RepositoryFilter.scss';

const REPOSITORIES = [
  Repository.accountManager,
  Repository.bank,
  Repository.thenewbostonPython,
  Repository.validator,
  Repository.website,
];

const REPOSITORY_FILTERS = [Repository.all, ...REPOSITORIES];

interface ComponentProps {
  className?: string;
  selectedFilter: RepositoryFilterType;
  setSelectedFilter: GenericVoidFunction;
}

const RepositoryFilter: FC<ComponentProps> = ({className, selectedFilter, setSelectedFilter}) => {
  const handleOptionClick = (i: RepositoryFilterType): GenericVoidFunction => (): void => {
    setSelectedFilter(i);
  };

  const renderOptions = () => {
    return REPOSITORY_FILTERS.map((option) => (
      <div
        className={clsx('RepositoryFilter__option', {
          'RepositoryFilter__option--active': option === selectedFilter,
        })}
        key={option}
        onClick={handleOptionClick(option)}
        role="button"
        tabIndex={0}
      >
        {option}
      </div>
    ));
  };

  return <div className={clsx('RepositoryFilter', className)}>{renderOptions()}</div>;
};

export default RepositoryFilter;
