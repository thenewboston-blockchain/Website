import React, {FC} from 'react';

import {A, ContributorTasks, CopyableAccountNumber, Qr, TotalAmount} from 'components';
import {Task} from 'types/github';

import './LeaderboardContributor.scss';

interface ComponentProps {
  account_number: string;
  github_avatar_url: string;
  github_username: string;
  rank: number;
  tasks: Task[];
  total_earnings: number;
}

const LeaderboardContributor: FC<ComponentProps> = ({
  account_number,
  github_avatar_url,
  github_username,
  rank,
  tasks,
  total_earnings,
}) => {
  return (
    <div className="LeaderboardContributor">
      <div className="LeaderboardContributor__rank">#{rank}</div>
      <div>
        <img className="LeaderboardContributor__user-avatar" src={github_avatar_url} alt={github_username} />
      </div>
      <div className="LeaderboardContributor__user-details">
        <A className="LeaderboardContributor__user-login" href={`https://github.com/${github_username}`}>
          {github_username}
        </A>
        <CopyableAccountNumber
          accountNumber={account_number}
          className="LeaderboardContributor__CopyableAccountNumber"
        />
        <div className="LeaderboardContributor__qr-container">
          <Qr text={account_number} width={100} />
        </div>
      </div>
      <ContributorTasks className="LeaderboardContributor__ContributorTasks" tasks={tasks} />
      <TotalAmount amount={total_earnings} className="LeaderboardContributor__TotalAmount" title="Total Earnings" />
    </div>
  );
};

export default LeaderboardContributor;
