import React, {useEffect, useState} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

import {RepositoryFilter} from 'components';
import {AMOUNT_COLOR} from 'constants/github';
import {Repository, RepositoryFilterType} from 'types/github';
import {fetchGithubIssues} from 'utils/github';

import Task from './Task';
import './Tasks.scss';

const Tasks = () => {
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const results = await fetchGithubIssues();
      setIssues(results);
    };
    fetchData();
  }, []);

  const getFilteredIssues = () => {
    const issuesWithAmounts = issues.filter(({labels}) => {
      const amountLabels = labels.filter(({color}: any) => color.toLowerCase() === AMOUNT_COLOR);
      return !!amountLabels.length;
    });
    return issuesWithAmounts;
  };

  const getRepositoryName = (repositoryUrl: string) => {
    return repositoryUrl.replace('https://api.github.com/repos/thenewboston-developers/', '');
  };

  const renderTasks = () => {
    const filteredIssues = getFilteredIssues();
    return filteredIssues.map(({assignees, created_at, html_url, labels, number, repository_url, title, user}) => {
      const createdStr = formatDistanceToNow(parseISO(created_at), {includeSeconds: true});
      return (
        <Task
          assignees={assignees}
          className="Tasks__Task"
          createdAt={`${createdStr} ago`}
          creator={user}
          githubLabels={labels}
          htmlUrl={html_url}
          key={html_url}
          number={number}
          repositoryName={getRepositoryName(repository_url)}
          title={title}
        />
      );
    });
  };

  return (
    <div className="Tasks">
      <RepositoryFilter
        className="Tasks__RepositoryFilter"
        selectedFilter={repositoryFilter}
        setSelectedFilter={setRepositoryFilter}
      />
      <div className="Tasks__TaskList">{renderTasks()}</div>
    </div>
  );
};

export default Tasks;
