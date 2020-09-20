import React, {useState} from 'react';

import {RepositoryFilter} from 'components';
import {Repository, RepositoryFilterType} from 'types/github';

import TaskTable from './TaskTable';
import './Tasks.scss';

const Tasks = () => {
  const [repositoryFilter, setRepositoryFilter] = useState<RepositoryFilterType>(Repository.all);

  const renderTaskList = () => {
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
