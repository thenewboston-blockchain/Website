import React, {FC} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import clsx from 'clsx';

import {REPOSITORIES} from 'constants/github';
import {GenericVoidFunction} from 'types/generic';
import {Repository, RepositoryUrlParams} from 'types/github';

import './RepositoryFilter.scss';

const REPOSITORY_FILTERS = [Repository.all, ...REPOSITORIES];

interface ComponentProps {
  className?: string;
}

const RepositoryFilter: FC<ComponentProps> = ({className}) => {
  const {repository} = useParams<RepositoryUrlParams>();
  const history = useHistory();
  const location = useLocation();

  const handleOptionClick = (i: Repository): GenericVoidFunction => (): void => {
    const route = location.pathname.split('/')[1];
    history.push(`/${route}/${i}`);
  };

  const renderOptions = () => {
    return REPOSITORY_FILTERS.map((option) => (
      <div
        className={clsx('RepositoryFilter__option', {
          'RepositoryFilter__option--active': option === repository,
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
