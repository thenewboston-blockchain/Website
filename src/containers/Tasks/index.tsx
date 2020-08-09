import React from 'react';

import TaskTable from './TaskTable';
import './Tasks.scss';

const Tasks = () => {
  return (
    <div className="Tasks">
      <TaskTable repoName="Website" tableTitle="Website Tasks" />
      <TaskTable repoName="Account-Manager" tableTitle="Account Manager Tasks" />
      <TaskTable repoName="Bank" tableTitle="Bank Tasks" />
      <TaskTable repoName="Validator" tableTitle="Validator Tasks" />
      <TaskTable repoName="thenewboston-python" tableTitle="Python Library Tasks" />
    </div>
  );
};

export default Tasks;
