import React, {useState} from 'react';
import sub from 'date-fns/sub';

import {EmptyPage, RepositoryFilter, TimeFilter} from 'components';
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
import {sortByDateKey, sortByNumberKey} from 'utils/sort';

import LeaderboardContributor from './LeaderboardContributor';
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

  const getContributorsWithTotalEarnings = () => {
    const contributorsWithTasks = getContributorsWithTasks();
    return contributorsWithTasks.map((contributor: ContributorWithTasks) => ({
      ...contributor,
      total_earnings: getTotalEarnings(contributor.tasks),
    }));
  };

  const getTotalEarnings = (tasks: Task[]) => {
    const amounts = tasks.map(({amount_paid}: Task) => parseInt(amount_paid, 10));
    return amounts.reduce((a, b) => a + b, 0);
  };

  const renderContributors = () => {
    const contributorsWithTotalEarnings = getContributorsWithTotalEarnings();
    if (!contributorsWithTotalEarnings.length) return <EmptyPage />;
    return contributorsWithTotalEarnings
      .sort(sortByNumberKey('total_earnings', 'desc'))
      .map(({account_number, github_avatar_url, github_username, tasks, total_earnings}, index) => (
        <LeaderboardContributor
          account_number={account_number}
          github_avatar_url={github_avatar_url}
          github_username={github_username}
          key={github_username}
          rank={index + 1}
          tasks={tasks}
          total_earnings={total_earnings}
        />
      ));
  };

  return (
    <div className="Leaderboard">
      <TimeFilter className="Leaderboard__TimeFilter" selectedFilter={timeFilter} setSelectedFilter={setTimeFilter} />
      <RepositoryFilter
        className="Leaderboard__RepositoryFilter"
        selectedFilter={repositoryFilter}
        setSelectedFilter={setRepositoryFilter}
      />
      <div className="Leaderboard__contributor-list">{renderContributors()}</div>
    </div>
  );
};

export default Leaderboard;
