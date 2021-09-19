import React from 'react';
import format from 'date-fns/format';

import {SFC} from 'types/generic';
import {Bounty} from 'types/github';
import * as S from './Styles';

export interface ContributorBountiesProps {
  bounties: Bounty[];
}

const ContributorBounties: SFC<ContributorBountiesProps> = ({className, bounties}) => {
  const renderRows = () => {
    return bounties.map(({amount_paid, completed_date, issue_id, repository, title}: Bounty, index) => (
      <tr key={index} data-testid="ContributorBounties__row">
        <S.Td data-testid="ContributorBounties__bounty-title" title={title}>
          <S.IssueLink
            href={`https://github.com/thenewboston-developers/${repository}/issues/${issue_id}`}
            iconSize={12}
            iconTotalSize={12}
          >
            {title}
          </S.IssueLink>
        </S.Td>
        <S.Td data-testid="ContributorBounties__repository" title={repository}>
          {repository}
        </S.Td>
        <S.Td data-testid="ContributorBounties__date-completed">{format(completed_date, 'L/d/yy')}</S.Td>
        <S.TdAmount data-testid="ContributorBounties__amount">
          + {parseInt(amount_paid, 10).toLocaleString()}
        </S.TdAmount>
      </tr>
    ));
  };

  return (
    <S.Container className={className} data-testid="ContributorBounties">
      <S.Table>
        <thead>
          <tr>
            <S.Th>Recent Bounty</S.Th>
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

export default ContributorBounties;
