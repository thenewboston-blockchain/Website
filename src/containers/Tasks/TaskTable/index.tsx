import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';

import {A, Label, TableBorderGrid} from 'components';
import './TaskTable.scss';

interface ComponentProps {
  repoName: string;
  tableTitle: string;
}

const TaskTable: FC<ComponentProps> = ({repoName, tableTitle}) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const {data} = await axios.get(`https://api.github.com/repos/thenewboston-developers/${repoName}/issues`);
      setRows(
        data
          .filter(({pull_request}: any) => !pull_request)
          .map(({assignee, html_url, labels, title}: any) => [
            <A href={html_url}>{title}</A>,
            renderLabels(labels),
            renderAssignee(assignee),
          ]),
      );
    };

    fetchData();
  }, [repoName]);

  const renderAssignee = (assignee: any) => {
    if (!assignee || !assignee.login || !assignee.avatar_url) return null;
    return <img alt={assignee.login} className="TaskTable__assignee" src={assignee.avatar_url} />;
  };

  const renderLabels = (labels: any[]) => {
    return labels.map(({color, name}) => <Label color={color} name={name} />);
  };

  if (!rows.length) return null;

  return (
    <div className="TaskTable">
      <TableBorderGrid
        className="TaskTable__TableBorderGrid"
        headers={['Task', 'Labels', 'Assignee']}
        rows={rows}
        title={tableTitle}
      />
    </div>
  );
};

export default TaskTable;
