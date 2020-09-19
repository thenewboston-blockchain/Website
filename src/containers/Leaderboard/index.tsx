import React, {useState} from 'react';
import clsx from 'clsx';
import parse from 'date-fns/parse';
import sub from 'date-fns/sub';

import ContributorList from 'containers/ContributorList';
import {Contributor, ContributorWithTasks, Repository, RepositoryFilterType, Task} from 'types/github';
import {sortByDateKey} from 'utils/sort';
import './Leaderboard.scss';

import contributors from 'data/contributors.json';
import tasks from 'data/tasks.json';

enum Time {
  days7 = '7d',
  days30 = '30d',
  all = 'All',
}

type TimeFilterType = Time.days7 | Time.days30 | Time.all;

const timeFilterMap = {
  [Time.days7]: 7,
  [Time.days30]: 730,
  [Time.all]: null,
};

const REPOSITORIES = [
  Repository.accountManager,
  Repository.bank,
  Repository.thenewbostonPython,
  Repository.validator,
  Repository.website,
];

const REPOSITORY_FILTERS = [Repository.all, ...REPOSITORIES];

const Leaderboard = () => {
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>(Time.all);

  const getContributorsWithTasks = (): ContributorWithTasks[] => {
    return (contributors as any)
      .map((contributor: Contributor) => {
        const contributorsTasks = getContributorsTasks(contributor.github_username);
        if (!contributorsTasks || !contributorsTasks.length) return null;
        return {
          ...contributor,
          tasks: contributorsTasks,
        };
      })
      .filter((contributor: Contributor | null) => !!contributor);
  };

  const getContributorsTasks = (github_username: string): Task[] | null => {
    let contributorsTasks = (tasks as any)[github_username];
    if (!contributorsTasks || !contributorsTasks.length) return null;

    contributorsTasks =
      repositoryFilter === Repository.all
        ? contributorsTasks
        : contributorsTasks.filter((task: Task) => task.repository === repositoryFilter);

    if (timeFilter !== Time.all) {
      const now = new Date();
      const days = timeFilterMap[timeFilter];
      const past = sub(now, {days});
      contributorsTasks = contributorsTasks.filter(
        (task: Task) => parse(task.completed_date, 'L/d/yy', new Date()) > past,
      );
    }

    if (!contributorsTasks.length) return null;
    contributorsTasks = contributorsTasks.sort(sortByDateKey('completed_date', 'desc'));

    return contributorsTasks;
  };

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
      <ContributorList className="Leaderboard__ContributorList" contributorsWithTasks={getContributorsWithTasks()} />
    </div>
  );
};

export default Leaderboard;
