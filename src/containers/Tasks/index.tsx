import React, {useEffect, useState} from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';

import {LabelFilter, Loader, RepositoryFilter} from 'components';
import {GenericVoidFunction} from 'types/generic';
import {Issue, Repository, RepositoryFilterType} from 'types/github';
import {fetchGithubIssues} from 'utils/github';

import Task from './Task';
import './Tasks.scss';

const Tasks = () => {
  const [error, setError] = useState<boolean>(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);
  const [selectedLabelNames, setSelectedLabelNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const results = await fetchGithubIssues();
        setIssues(results);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getFilteredIssues = () => {
    let filteredIssues = issues.filter(({amount}) => amount !== 0);

    filteredIssues =
      repositoryFilter === Repository.all
        ? filteredIssues
        : filteredIssues.filter(({repositoryName}) => repositoryName === repositoryFilter);

    return filteredIssues;
  };

  const handleLabelClick = (labelName: string): GenericVoidFunction => (): void => {
    const results = selectedLabelNames.includes(labelName)
      ? selectedLabelNames.filter((name) => name !== labelName)
      : [...selectedLabelNames, labelName];
    setSelectedLabelNames(results);
  };

  const renderEmptyState = () => (
    <div className="Tasks__empty-state">
      <h1>No items to display</h1>
    </div>
  );

  const renderTasks = () => {
    const filteredIssues = getFilteredIssues();
    if (error || !filteredIssues.length) return renderEmptyState();
    return filteredIssues.map(
      ({amount, assignees, created_at, html_url, labels, number, repositoryName, title, user}) => {
        const createdStr = formatDistanceToNow(parseISO(created_at), {includeSeconds: true});
        return (
          <Task
            amount={amount}
            assignees={assignees}
            className="Tasks__Task"
            createdAt={`${createdStr} ago`}
            creator={user}
            githubLabels={labels}
            htmlUrl={html_url}
            key={html_url}
            number={number}
            repositoryName={repositoryName}
            title={title}
          />
        );
      },
    );
  };

  return (
    <div className="Tasks">
      <div className="Tasks__FilterMenu">
        <RepositoryFilter selectedFilter={repositoryFilter} setSelectedFilter={setRepositoryFilter} />
        <LabelFilter
          className="Tasks__LabelFilter"
          handleLabelClick={handleLabelClick}
          selectedLabelNames={selectedLabelNames}
        />
      </div>
      <div className="Tasks__TaskList">{loading ? <Loader className="Tasks__Loader" /> : renderTasks()}</div>
    </div>
  );
};

export default Tasks;
