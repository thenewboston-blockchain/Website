import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {A, Label, TableBorderGrid} from 'components';
import './Tasks.scss';

const Tasks = () => {
  const [websiteIssues, setWebsiteIssues] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const {data} = await axios.get('https://api.github.com/repos/thenewboston-developers/Website/issues');
      setWebsiteIssues(data);
    };

    fetchData();
  }, []);

  const renderAssignee = (assignee: any) => {
    if (!assignee || !assignee.login || !assignee.avatar_url) return null;
    return <img alt={assignee.login} className="Tasks__assignee" src={assignee.avatar_url} />;
  };

  const renderLabels = (labels: any[]) => {
    return labels.map(({color, name}) => <Label color={color} name={name} />);
  };

  const renderTaskTable = (rows: any[], title: string) => {
    return (
      <TableBorderGrid
        className="Tasks__TableBorderGrid"
        headers={['Title', 'URL', 'Labels', 'Assignee', 'State']}
        rows={rows}
        title={title}
      />
    );
  };

  const renderWebsiteIssues = () => {
    const rows = websiteIssues.map(({assignee, html_url, labels, state, title}: any) => [
      title,
      <A href={html_url}>{html_url}</A>,
      renderLabels(labels),
      renderAssignee(assignee),
      state,
    ]);
    return renderTaskTable(rows, 'Website Tasks');
  };

  return <div className="Tasks">{renderWebsiteIssues()}</div>;
};

export default Tasks;
