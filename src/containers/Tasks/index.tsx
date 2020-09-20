import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {A, RepositoryFilter} from 'components';
import {REPOSITORIES} from 'constants/github';
import {Repository, RepositoryFilterType} from 'types/github';

import TaskTable from './TaskTable';
import './Tasks.scss';

const Tasks = () => {
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const promises = REPOSITORIES.map((repoName) =>
        axios.get(`https://api.github.com/repos/thenewboston-developers/${repoName}/issues`),
      );

      const results = await Promise.all(promises);
      setIssues(
        results.reduce(
          (acc: any[], items: any) => [...acc, ...items.data.filter(({pull_request}: any) => !pull_request)],
          [],
        ),
      );
    };

    fetchData();
  }, []);

  const getFilteredIssues = () => {
    return issues;
  };

  const renderTaskList = () => {
    const filteredIssues = getFilteredIssues();
    console.log(filteredIssues);
    return (
      <div className="Tasks__TaskList">
        <TaskTable repoName="Website" tableTitle="Website Tasks" />
        <TaskTable repoName="Account-Manager" tableTitle="Account Manager Tasks" />
        <TaskTable repoName="Bank" tableTitle="Bank Tasks" />
        <TaskTable repoName="Validator" tableTitle="Validator Tasks" />
        <TaskTable repoName="thenewboston-python" tableTitle="Python Library Tasks" />
      </div>
    );
  };

  return (
    <div className="Tasks">
      <RepositoryFilter
        className="Tasks__RepositoryFilter"
        selectedFilter={repositoryFilter}
        setSelectedFilter={setRepositoryFilter}
      />
      {renderTaskList()}
    </div>
  );
};

export default Tasks;
