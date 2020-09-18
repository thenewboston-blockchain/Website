import React, {useEffect, useState} from 'react';
import axios from 'axios';
import clsx from 'clsx';

import ContributorList, {Contributor} from 'containers/ContributorList';
import './Leaderboard.scss';

const REPOSITORIES = ['Account-Manager', 'Bank', 'thenewboston-python', 'Validator', 'Website'];
const REPOSITORY_FILTERS = ['All', ...REPOSITORIES];

const Leaderboard = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

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

  const renderRepositoryFilters = () => {
    return REPOSITORY_FILTERS.map((option) => (
      <div
        className={clsx('Leaderboard__repository-filter-option', {
          'Leaderboard__repository-filter-option--active': option === 'All',
        })}
        key={option}
      >
        {option}
      </div>
    ));
  };

  return (
    <div className="Leaderboard">
      <div className="Leaderboard__time-filter">
        <span className="Leaderboard__time-filter-option">7d</span>
        <span className="Leaderboard__time-filter-option Leaderboard__time-filter-option--active">30d</span>
        <span className="Leaderboard__time-filter-option">All</span>
      </div>
      <div className="Leaderboard__repository-filter">{renderRepositoryFilters()}</div>
      <ContributorList className="Leaderboard__ContributorList" contributors={contributors} />
    </div>
  );
};

export default Leaderboard;
