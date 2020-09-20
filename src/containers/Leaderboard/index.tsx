import React, {useState} from 'react';
import sub from 'date-fns/sub';

import {RepositoryFilter, TimeFilter} from 'components';
import ContributorList from 'containers/ContributorList';
import {
  Contributor,
  ContributorWithTasks,
  Repository,
  RepositoryFilterType,
  Task,
  TaskDict,
  Time,
  TimeFilterType,
} from 'types/github';
import {getContributors, getTasks} from 'utils/data';
import {sortByDateKey} from 'utils/sort';

import './Leaderboard.scss';

const timeFilterMap = {
  [Time.days7]: 7,
  [Time.days30]: 730,
  [Time.all]: null,
};

const Leaderboard = () => {
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>(Time.all);

  const getContributorsWithTasks = (): ContributorWithTasks[] => {
    const contributors = getContributors();
    const tasks = getTasks();

    return contributors
      .map(
        (contributor: Contributor): ContributorWithTasks => {
          const contributorsTasks = getContributorsTasks(tasks, contributor.github_username);
          return {
            ...contributor,
            tasks: contributorsTasks,
          };
        },
      )
      .filter((contributor: ContributorWithTasks) => !!contributor.tasks.length);
  };

  const getContributorsTasks = (tasks: TaskDict, github_username: string): Task[] => {
    let contributorsTasks: Task[] = tasks[github_username];
    if (!contributorsTasks || !contributorsTasks.length) return [];

    contributorsTasks =
      repositoryFilter === Repository.all
        ? contributorsTasks
        : contributorsTasks.filter((task: Task) => task.repository === repositoryFilter);

    if (timeFilter !== Time.all) {
      const now = new Date();
      const days = timeFilterMap[timeFilter];
      const past = sub(now, {days});
      contributorsTasks = contributorsTasks.filter((task: Task) => task.completed_date > past);
    }

    if (!contributorsTasks.length) return [];
    contributorsTasks = contributorsTasks.sort(sortByDateKey('completed_date', 'desc'));

    return contributorsTasks;
  };

  return (
    <div className="Leaderboard">
      <TimeFilter className="Leaderboard__TimeFilter" selectedFilter={timeFilter} setSelectedFilter={setTimeFilter} />
      <RepositoryFilter
        className="Leaderboard__RepositoryFilter"
        selectedFilter={repositoryFilter}
        setSelectedFilter={setRepositoryFilter}
      />
      <ContributorList className="Leaderboard__ContributorList" contributorsWithTasks={getContributorsWithTasks()} />
    </div>
  );
};

export default Leaderboard;
