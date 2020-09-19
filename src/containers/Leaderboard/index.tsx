import React, {useEffect, useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';

import ContributorList, {Contributor} from 'containers/ContributorList';
import {Repository, RepositoryFilterType} from 'types/github';

import './Leaderboard.scss';

enum Time {
  days7 = '7d',
  days30 = '30d',
  all = 'All',
}

type TimeFilterType = Time.days7 | Time.days30 | Time.all;

const REPOSITORIES = [
  Repository.accountManager,
  Repository.bank,
  Repository.thenewbostonPython,
  Repository.validator,
  Repository.website,
];

const REPOSITORY_FILTERS = [Repository.all, ...REPOSITORIES];

const Leaderboard = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>(Time.days7);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const promises = REPOSITORIES.map((repositoryName) =>
        axios.get(`https://api.github.com/repos/thenewboston-developers/${repositoryName}/contributors`),
      );
      const responses = await Promise.all(promises);
      const results = responses
        .reduce((acc: Contributor[], cur) => [...acc, ...cur.data], [])
        .filter((contributor) => contributor.type === 'User');
      setContributors(results);
    };
    fetchData();
  }, []);

  const handleRepositoryFilterClick = (i: RepositoryFilterType): any => (): void => {
    setRepositoryFilter(i);
  };

  const handleTimeFilterClick = (i: TimeFilterType): any => (): void => {
    setTimeFilter(i);
  };

  const renderRepositoryFilterOptions = () => {
    return REPOSITORY_FILTERS.map((option) => (
      <div
        className={clsx('Leaderboard__repository-filter-option', {
          'Leaderboard__repository-filter-option--active': option === repositoryFilter,
        })}
        key={option}
        onClick={handleRepositoryFilterClick(option)}
        role="button"
        tabIndex={0}
      >
        {option}
      </div>
    ));
  };

  const renderTimeFilterOptions = () => {
    return [Time.days7, Time.days30, Time.all].map((option) => (
      <span
        className={clsx('Leaderboard__time-filter-option', {
          'Leaderboard__time-filter-option--active': option === timeFilter,
        })}
        key={option}
        onClick={handleTimeFilterClick(option)}
        role="button"
        tabIndex={0}
      >
        {option}
      </span>
    ));
  };

  return (
    <div className="Leaderboard">
      <div className="Leaderboard__time-filter">{renderTimeFilterOptions()}</div>
      <div className="Leaderboard__repository-filter">{renderRepositoryFilterOptions()}</div>
      <ContributorList className="Leaderboard__ContributorList" contributors={contributors} />
    </div>
  );
};

export default Leaderboard;
