import React from 'react';
import format from 'date-fns/format';

import {SFC} from 'types/generic';
import {Task} from 'types/github';
import * as S from './Styles';

export interface ContributorTasksProps {
  tasks: Task[];
}

const ContributorTasks: SFC<ContributorTasksProps> = ({className, tasks}) => {
  const renderRows = () => {
    return tasks.map(({amount_paid, completed_date, issue_id, repository, title}: Task, index) => (
      <tr key={index} data-testid="ContributorTasks__row">
        <S.Td data-testid="ContributorTasks__task-title" title={title}>
          <S.IssueLink
            href={`https://github.com/thenewboston-developers/${repository}/issues/${issue_id}`}
            iconSize={12}
            iconTotalSize={12}
          >
            {title}
          </S.IssueLink>
        </S.Td>
        <S.Td data-testid="ContributorTasks__repository" title={repository}>
          {repository}
        </S.Td>
        <S.Td data-testid="ContributorTasks__date-completed">{format(completed_date, 'L/d/yy')}</S.Td>
        <S.TdAmount data-testid="ContributorTasks__amount">+ {parseInt(amount_paid, 10).toLocaleString()}</S.TdAmount>
      </tr>
    ));
  };

  return (
    <S.Container className={className} data-testid="ContributorTasks">
      <S.Table>
        <thead>
          <tr>
            <S.Th>Recent Task</S.Th>
            <S.Th>Repository</S.Th>
            <S.Th>Completed</S.Th>
            <S.Th>Amount</S.Th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </S.Table>
    </S.Container>
  );
};

export default ContributorTasks;
